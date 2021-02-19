import { Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

import Card from "../Cards/Card.jsx";

const Bench = props => {
	const { cards, sellCard, swapCard, interactable } = props;
	return (
		<Flex flexDirection="row" p={2} w="100%" h="100%" bgColor="rgba(255, 255, 255, .40)">
			{
				cards.map( (e, index) => <Card key={`bench${index}`} card={e} interactable={interactable}sell={() => sellCard(index, "bench")} swap={() => swapCard(index, "bench")}/>)
			}
		</Flex>
	);
};

Bench.propTypes = {
	cards: PropTypes.array,
	interactable: PropTypes.bool,
	sellCard: PropTypes.func,
	swapCard: PropTypes.func,
};

export default Bench;
