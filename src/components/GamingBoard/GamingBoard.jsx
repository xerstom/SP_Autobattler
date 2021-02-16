import { Button, Code, Grid, GridItem } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

import Bench from "./Bench/Bench.jsx";
import Board from "./Board/Board.jsx";
import Market from "./Market/Market.jsx";
import Profile from "./Profile/Profile.jsx";

const GamingBoard = props => {
	const { manager } = props;
	return (
		<>
			<Grid templateColumns="repeat(12, 1fr)" templateRows="repeat(12, 1fr)" h="100vh" w="100vw">
				<GridItem rowStart={1} colStart={1} bg="grey" >
					<Button w="10%" onClick={props.onClickHandler}>{ "<<" }</Button>
				</GridItem>
				<GridItem rowStart={1} colStart={5} rowSpan={2} colSpan={7} bg="yellow">
					<Bench manager={manager} user="enemy"/>
				</GridItem>
				<GridItem rowStart={3} colStart={4} rowSpan={2} colSpan={9} mb={2} bg="red">
					<Board manager={manager} user="enemy"/>
				</GridItem>
				<GridItem rowStart={5} colStart={4} rowSpan={2} colSpan={9} mt={2} bg="green">
					<Board manager={manager} user="you"/>
				</GridItem>
				<GridItem rowStart={7} colStart={5} rowSpan={2} colSpan={7} bg="yellow">
					<Bench manager={manager} user="you"/>
				</GridItem>
				<GridItem rowStart={9} colStart={8} rowSpan={4} colSpan={4} bg="blue">
					<Market manager={manager} user="you"/>
				</GridItem>

				<GridItem rowStart={2} colStart={1} rowSpan={3} colSpan={2} bg="purple">
					<Profile manager={manager} user="enemy"/>
				</GridItem>
				<GridItem rowStart={5} colStart={1} rowSpan={4} colSpan={3} >
					<Code p={0} h="100%" w="100%">Enemy monster destroyed super monster</Code>
				</GridItem>
				<GridItem rowStart={9} colStart={1} rowSpan={4} colSpan={2} bg="purple">
					<Profile manager={manager} user="you"/>
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
