import { Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React from "react";

import Stats from "./Stats.jsx";

const MarketCard = props => {
	const { card } = props;
	const BorderedFlex = styled(Flex)`
		border: 10px solid transparent;
		border-image: url("ressources/border${card.level}.png") 54 round;

	`;
	return (
		<BorderedFlex flexDirection="column" p={3} w="100%" h="100%" justifyContent="space-between" bg="gray.300" >
			<Stats card={card}/>
			<Text fontSize="1vw" textAlign="center">Price: {card.price}</Text>
		</BorderedFlex>
	);
};

MarketCard.propTypes = {
	card: PropTypes.object,
};

export default MarketCard;
