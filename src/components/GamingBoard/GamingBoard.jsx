import { Button, Code, Grid, GridItem } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState } from "react";

import Bench from "./Bench/Bench.jsx";
import Board from "./Board/Board.jsx";
import Market from "./Market/Market.jsx";
import Profile from "./Profile/Profile.jsx";

const GamingBoard = props => {
	const { manager } = props;
	const [playerBoard, setPlayerBoard] = useState(manager.player.board);
	const [playerBench, setPlayerBench] = useState(manager.player.bench);
	const [marketCard, setMarketCard] = useState(manager.createGameCard(0) );

	const buyCard = () => {
		if (manager.player.board.length < 5) {
			manager.player.board.push(marketCard);
			setPlayerBoard( [...manager.player.board] );
		} else if (manager.player.bench.length < 7) {
			manager.player.bench.push(marketCard);
			setPlayerBench( [...manager.player.bench] );
		} else {
			// error
			return;
		}
		manager.player.money -= marketCard.price;
		setMarketCard(manager.createGameCard(0) );
	};

	const rerollCard = () => {
		setMarketCard(manager.createGameCard(0) );
	};

	const sellCard = (index, location) => {
		const deleted = manager.player[location].splice(index, 1);
		manager.player.money += deleted[0].price;
		if (location === "bench") {
			setPlayerBench( [...manager.player.bench] );
		} else {
			setPlayerBoard( [...manager.player.board] );
		}
	};

	const swapCard = (index, location) => {
		console.log(index, location);
		const deleted = manager.player[location].splice(index, 1);
		if (location === "bench") {
			manager.player.board.push(deleted[0] );
		} else {
			manager.player.bench.push(deleted[0] );
		}
		console.log("deletede", deleted);
		console.log(manager.player.bench, manager.player.board);
		setPlayerBench( [...manager.player.bench] );
		setPlayerBoard( [...manager.player.board] );
	};

	const onCombat = false;
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
							<Bench cards={playerCombat.bench} user="enemy"/>
						</GridItem>
						: ""
				}
				{
					onCombat
						? <GridItem rowStart={3} colStart={4} rowSpan={2} colSpan={9} mb={2}>
							<Board cards={playerCombat.board}/>
						</GridItem>
						: ""
				}
				<GridItem rowStart={5} colStart={4} rowSpan={2} colSpan={9} mt={2}>
					<Board cards={playerBoard} sellCard={sellCard} swapCard={swapCard}/>
				</GridItem>
				<GridItem rowStart={7} colStart={5} rowSpan={2} colSpan={7} mt={2}>
					<Bench cards={playerBench} sellCard={sellCard} swapCard={swapCard}/>
				</GridItem>
				<GridItem rowStart={9} colStart={8} rowSpan={4} colSpan={4}>
					<Market card={marketCard} buyCard={buyCard} rerollCard={rerollCard}/>
				</GridItem>

				{
					onCombat
						? <GridItem rowStart={2} colStart={1} rowSpan={3} colSpan={2} m={3}>
							<Profile user={manager.agents[0]}/>
						</GridItem>
						: ""
				}
				<GridItem rowStart={5} colStart={1} rowSpan={4} colSpan={3} >
					<Code p={0} h="100%" w="100%">Enemy monster destroyed super monster</Code>
				</GridItem>
				<GridItem rowStart={9} colStart={1} rowSpan={4} colSpan={2} m={4}>
					<Profile user={manager.player} />
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
