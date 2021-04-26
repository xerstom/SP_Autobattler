/* eslint-disable no-magic-numbers */
import {
	Button, Flex, Grid, GridItem,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import Agent from "../GamingMap/AgentDisplayer/Agent/Agent.jsx";
import LogOutput from "../LogOutput.jsx";
import Bench from "./Bench/Bench.jsx";
import Board from "./Board/Board.jsx";
import Management from "./Management/Management.jsx";
import Market from "./Market/Market.jsx";

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms) );
}

const GamingBoard = props => {
	const { gInterface } = props;
	const [playerBoard, setPlayerBoard] = useState(gInterface.getBoard() );
	const [playerBench, setPlayerBench] = useState(gInterface.getBench() );
	const [playerProfile, setPlayerProfile] = useState(gInterface.getProfile() );
	const [marketCard, setMarketCard] = useState(gInterface.getMarketCard() );
	const [combatSummary] = useState(gInterface.getLastCombat(playerProfile.name) );
	const [detailedCombats, setDetailedCombats] = useState( [] );

	useEffect(async() => {
		const allSum = gInterface.getLastCombat(playerProfile.name);
		if (!allSum) {
			return;
		}
		const combatSum = allSum.detailedCombat;
		for (const combat of combatSum) {
			detailedCombats.push(combat);
			setDetailedCombats( [...detailedCombats] );
			await sleep(300);
		}
	}, [] );
	
	const sellCard = (index, location) => {
		gInterface.sellCard(index, location);
		if (location === "bench") {
			setPlayerBench(gInterface.getBench() );
		} else {
			setPlayerBoard(gInterface.getBoard() );
		}
		setPlayerProfile(gInterface.getProfile() );
	};

	const swapCard = (index, location) => {
		if (gInterface.swapCard(index, location) ) {
			setPlayerBench(gInterface.getBench() );
			setPlayerBoard(gInterface.getBoard() );
		}
	};
	
	const rerollNewCard = () => {
		setPlayerProfile(gInterface.getProfile() );
		setMarketCard(gInterface.getMarketCard() );
	};

	const reroll = () => {
		if (gInterface.rerollCard() ) {
			rerollNewCard();
		}
	};

	const buy = () => {
		const res = gInterface.buyCard();
		if (!res[0] ) {
			return false;
		}
		if (res[1] === "board") {
			setPlayerBoard(gInterface.getBoard() );
		} else if (res[1] === "bench") {
			setPlayerBench(gInterface.getBench() );
		}
		setPlayerProfile(gInterface.getProfile() );
		rerollNewCard();
		return true;
	};

	const levelUp = () => {
		if (gInterface.levelUp() ) {
			setPlayerProfile(gInterface.getProfile() );
		}
	};

	const boardUp = () => {
		if (gInterface.boardUp() ) {
			setPlayerProfile(gInterface.getProfile() );
		}
	};

	const handleKeyPress = e => {
		switch (e.code) {
			case "KeyR": {
				rerollNewCard();
				break;
			}
			case "KeyB": {
				buy();
				break;
			}
			case "KeyS" : {
				boardUp();
				break;
			}
			case "KeyL" : {
				levelUp();
				break;
			}
		}
	};

	const onCombat = combatSummary !== null;
	const agentCombat = combatSummary !== null && (combatSummary.agent1 === playerProfile.name ? combatSummary.agent2 : combatSummary.agent1);
	return (
		<>
			<Grid
				templateColumns="repeat(25, 4%)"
				templateRows="repeat(25, 4%)"
				bgPosition="center"
				bgSize="cover"
				bgRepeat= "no-repeat"
				h="100vh" w="100vw"
				bg="yellow.50"
				onKeyDown={handleKeyPress}
				tabIndex={-1}
			>
				<GridItem rowStart={1} colStart={1} >
					<Button w="10%" onClick={props.onClickHandler}>{ "<<" }</Button>
				</GridItem>
				
				{/* Ennemy profile */}
				{
					onCombat
						&& <GridItem rowStart={3} colStart={1} rowSpan={5} colSpan={3}>
							<Agent agent={gInterface.getProfile(agentCombat)} isPlayer={false} />
						</GridItem>
				}
				
				<GridItem rowStart={9} colStart={1} rowSpan={7} colSpan={6}>
					<LogOutput maxH="27.5vh" summary={detailedCombats}></LogOutput>
				</GridItem>

				{/* Player profile  */}
				<GridItem rowStart={16} colStart={1} rowSpan={5} colSpan={3} >
					<Agent agent={playerProfile} isPlayer={true} />
				</GridItem>

				{/* Market managment Buttons */}
				<GridItem rowStart={20} colStart={3} rowSpan={8} colSpan={2}>
					<Management user={playerProfile} levelUp={levelUp} boardUp={boardUp}/>
				</GridItem>

				{/* Market */}
				<GridItem rowStart={18} colStart={5} rowSpan={8} colSpan={4} mb={2} >
					<Market buyCard={buy} rerollCard={reroll} marketCard={marketCard} />
				</GridItem>

				{/* Boards */}
				<GridItem rowStart={2} colStart={8} rowSpan={16} colSpan={18} bgColor="blackAlpha.300" >
					<Flex h="100%" flexDirection="column" justifyContent="flex-end " >
						{
							onCombat
								&& <Flex h="50%" flexDirection="column" justifyContent="center" >
									<Board cards={gInterface.getBoard(agentCombat)} interactable={false}/>
								</Flex>
						}
						<Flex h="50%" flexDirection="column" justifyContent="center" alignItems="center" >
							<Board cards={playerBoard} interactable={true} sellCard={sellCard} swapCard={swapCard}/>
						</Flex>
					</Flex>
						
				</GridItem>
				{/* Bench */}
				<GridItem rowStart={18} colStart={10} rowSpan={8} colSpan={14} >
					<Bench cards={playerBench} interactable={true} sellCard={sellCard} swapCard={swapCard}/>
				</GridItem>
			</Grid>
		</>
	);
};

GamingBoard.propTypes = {
	gInterface: PropTypes.object,
	onClickHandler: PropTypes.func,
};

export default GamingBoard;
