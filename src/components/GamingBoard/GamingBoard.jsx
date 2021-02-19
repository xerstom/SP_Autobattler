import { Button, Code, Grid, GridItem } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState } from "react";

import Bench from "./Bench/Bench.jsx";
import Board from "./Board/Board.jsx";
import Market from "./Market/Market.jsx";
import Profile from "./Profile/Profile.jsx";

const GamingBoard = props => {
	const { manager } = props;
	const [playerBoard, setPlayerBoard] = useState(manager.getPlayerBoard() );
	const [playerBench, setPlayerBench] = useState(manager.getPlayerBench() );

	const buyCard = () => {
		const res = manager.buyCard();
		if (!res[0] ) {
			return false;
		}
		if (res[1] === "board") {
			setPlayerBoard(manager.getPlayerBoard() );
		} else if (res[1] === "bench") {
			setPlayerBench(manager.getPlayerBench() );
		}
		return true;
	};

	const sellCard = (index, location) => {
		manager.sellCard(index, location);
		if (location === "bench") {
			setPlayerBench(manager.getPlayerBench() );
		} else {
			setPlayerBoard(manager.getPlayerBoard() );
		}
	};

	const swapCard = (index, location) => {
		if (manager.swapCard(index, location) ) {
			setPlayerBench(manager.getPlayerBench() );
			setPlayerBoard(manager.getPlayerBoard() );
		}
	};

	const onCombat = true;
	const playerCombat = manager.agents[0];
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
					<Market manager={manager} buyCard={buyCard}/>
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
					<Profile user={manager.getPlayerProfile()} />
				</GridItem>
				<GridItem rowStart={9} colStart={4} rowSpan={4} colSpan={3} bg="pink">
					Input zone
				</GridItem>
				
			</Grid>
		</>
	);
};

GamingBoard.propTypes = {
	onClickHandler: PropTypes.func,
	manager: PropTypes.object,
};

export default GamingBoard;
