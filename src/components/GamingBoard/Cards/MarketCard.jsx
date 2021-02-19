import { Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

import Stats from "./Stats.jsx";

const MarketCard = props => {
	const { card } = props;
	return (
		<Flex flexDirection="column" p={3} w="100%" h="100%" mr={5} justifyContent="space-between" bgColor="rgba(255, 255, 255, .40)">
			<Stats card={card}/>
			<Text textAlign="center">Price: {card.price}</Text>
		</Flex>
	);
};

MarketCard.propTypes = {
	card: PropTypes.object,
};

export default MarketCard;
