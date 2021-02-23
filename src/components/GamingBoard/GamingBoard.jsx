import {
	Button, Code, Flex,
	Grid, GridItem,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState } from "react";

import Bench from "./Bench/Bench.jsx";
import Board from "./Board/Board.jsx";
import Management from "./Management/Management.jsx";
import Market from "./Market/Market.jsx";
import Profile from "./Profile/Profile.jsx";

const GamingBoard = props => {
	const { gInterface } = props;
	const [playerBoard, setPlayerBoard] = useState(gInterface.getPlayerBoard() );
	const [playerBench, setPlayerBench] = useState(gInterface.getPlayerBench() );
	const [playerProfile, setPlayerProfile] = useState(gInterface.getPlayerProfile() );

	const buyCard = () => {
		const res = gInterface.buyCard();
		if (!res[0] ) {
			return false;
		}
		if (res[1] === "board") {
			setPlayerBoard(gInterface.getPlayerBoard() );
		} else if (res[1] === "bench") {
			setPlayerBench(gInterface.getPlayerBench() );
		}
		setPlayerProfile(gInterface.getPlayerProfile() );
		return true;
	};

	const sellCard = (index, location) => {
		gInterface.sellCard(index, location);
		if (location === "bench") {
			setPlayerBench(gInterface.getPlayerBench() );
		} else {
			setPlayerBoard(gInterface.getPlayerBoard() );
		}
		setPlayerProfile(gInterface.getPlayerProfile() );
	};

	const swapCard = (index, location) => {
		if (gInterface.swapCard(index, location) ) {
			setPlayerBench(gInterface.getPlayerBench() );
			setPlayerBoard(gInterface.getPlayerBoard() );
		}
	};

	const rerollCard = () => {
		setPlayerProfile(gInterface.getPlayerProfile() );
	};

	const levelUp = () => {
		if (gInterface.levelUp() ) {
			setPlayerProfile(gInterface.getPlayerProfile() );
		}
	};

	const boardUp = () => {
		if (gInterface.boardUp() ) {
			setPlayerProfile(gInterface.getPlayerProfile() );
		}
	};

	const onCombat = true;
	const playerCombat = gInterface.getBots()[0];
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
			>
				<GridItem rowStart={1} colStart={1} >
					<Button w="10%" onClick={props.onClickHandler}>{ "<<" }</Button>
				</GridItem>
				
				{/* Ennemy profile */}
				{
					onCombat
						? <GridItem rowStart={3} colStart={1} rowSpan={3} colSpan={4}>
							<Profile user={playerCombat}/>
						</GridItem>
						: ""
				}
				
				<GridItem rowStart={8} colStart={1} rowSpan={8} colSpan={6} >
					<Code p={0} h="100%" w="100%">Enemy monster destroyed super monster</Code>
				</GridItem>

				{/* Player profile  */}
				<GridItem rowStart={16} colStart={1} rowSpan={8} colSpan={4} mt={3}>
					<Profile user={playerProfile} />
				</GridItem>

				{/* Market managment Buttons */}
				<GridItem rowStart={20} colStart={3} rowSpan={8} colSpan={2}>
					<Management user={playerProfile} levelUp={levelUp} boardUp={boardUp}/>
				</GridItem>

				{/* Market */}
				<GridItem rowStart={18} colStart={5} rowSpan={8} colSpan={4} mb={2} >
					<Market gInterface={gInterface} buyCard={buyCard} rerollCard={rerollCard} />
				</GridItem>

	

				{/* Boards */}
				<GridItem rowStart={2} colStart={8} rowSpan={16} colSpan={18} bgColor="blackAlpha.300" >
					<Flex h="100%" flexDirection="column" justifyContent="flex-end " >
						{
							onCombat
								? <Flex h="50%" flexDirection="column" justifyContent="center" >
									<Board cards={playerCombat.board} interactable={false}/>
								</Flex>
								: ""
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
