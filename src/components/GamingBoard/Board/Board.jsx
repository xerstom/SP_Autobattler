import { Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

import Card from "../Cards/Card.jsx";

const Board = props => {
	const { cards, sellCard, swapCard, interactable } = props;
	return (
		<Flex flexDirection="row" p={2} w="100%" h="100%" bgColor="rgba(255, 255, 255, .40)">
			{
				cards.map( (e, index) => <Card key={`board${index}`} card={e} interactable={interactable} sell={() => sellCard(index, "board")} swap={() => swapCard(index, "board")}/>)
			}
		</Flex>
	);
};

Board.propTypes = {
	cards: PropTypes.array,
	interactable: PropTypes.bool,
	sellCard: PropTypes.func,
	swapCard: PropTypes.func,
};
export default Board;
