import { Button, Code, Grid, GridItem } from "@chakra-ui/react";
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
				templateColumns="repeat(12, 1fr)"
				templateRows="repeat(12, 1fr)"
				bgImage="url('/ressources/bg-image.png')"
				bgPosition="center"
				bgSize="cover"
				bgRepeat= "no-repeat"
				h="100vh" w="100vw">
				<GridItem rowStart={1} colStart={1} >
					<Button w="10%" onClick={props.onClickHandler}>{ "<<" }</Button>
				</GridItem>
				{
					onCombat
						? <GridItem rowStart={1} colStart={5} rowSpan={2} colSpan={7} mt={2}>
							<Bench cards={playerCombat.bench} interactable={false}/>
						</GridItem>
						: ""
				}
				{
					onCombat
						? <GridItem rowStart={3} colStart={4} rowSpan={2} colSpan={9} mb={2}>
							<Board cards={playerCombat.board} interactable={false}/>
						</GridItem>
						: ""
				}
				<GridItem rowStart={5} colStart={4} rowSpan={2} colSpan={9} mt={2}>
					<Board cards={playerBoard} interactable={true} sellCard={sellCard} swapCard={swapCard}/>
				</GridItem>
				<GridItem rowStart={7} colStart={5} rowSpan={2} colSpan={7} mt={2}>
					<Bench cards={playerBench} interactable={true} sellCard={sellCard} swapCard={swapCard}/>
				</GridItem>
				<GridItem rowStart={9} colStart={8} rowSpan={4} colSpan={4}>
					<Market gInterface={gInterface} buyCard={buyCard} rerollCard={rerollCard}/>
				</GridItem>

				{
					onCombat
						? <GridItem rowStart={2} colStart={1} rowSpan={3} colSpan={2} m={3}>
							<Profile user={playerCombat}/>
						</GridItem>
						: ""
				}
				<GridItem rowStart={5} colStart={1} rowSpan={4} colSpan={3} >
					<Code p={0} h="100%" w="100%">Enemy monster destroyed super monster</Code>
				</GridItem>
				<GridItem rowStart={9} colStart={1} rowSpan={4} colSpan={2} m={4}>
					<Profile user={playerProfile} />
				</GridItem>
				<GridItem rowStart={9} colStart={4} rowSpan={4} colSpan={3}>
					<Management levelUp={levelUp} boardUp={boardUp}/>
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
