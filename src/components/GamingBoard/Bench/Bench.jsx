import { Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

import Card from "../Card/Card.jsx";

const Bench = props => {
	const { cards, sellCard, swapCard } = props;
	return (
		<Flex flexDirection="row" p={2} w="100%" h="100%" bgColor="rgba(255, 255, 255, .40)">
			{
				cards.map( (e, index) => <Card key={`bench${index}`} card={e} sell={() => sellCard(index, "bench")} swap={() => swapCard(index, "bench")}/>)
			}
		</Flex>
	);
};

Bench.propTypes = {
	cards: PropTypes.array,
	sellCard: PropTypes.func,
	swapCard: PropTypes.func,
};

export default Bench;
