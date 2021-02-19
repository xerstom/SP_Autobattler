import { Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

const Stats = props => {
	const { card } = props;
	return (
		<Flex flexDirection="column" w="100%" h="100%" fontSize={14} justifyContent="space-between">
			<Text textAlign="center">Card: {card.name}</Text>
			<Flex flexDirection="row" h="fit-content" justifyContent="space-between">
				<Text>LVL: {card.level}</Text>
				<Text>BUFF: {card.adaptative}</Text>
			</Flex>
			<Flex flexDirection="row" h="fit-content" justifyContent="space-between">
				<Text>A: {card.attack}</Text>
				<Text>L: {card.life}</Text>
			</Flex>
		</Flex>
	);
};

Stats.propTypes = {
	card: PropTypes.object,
};

export default Stats;
