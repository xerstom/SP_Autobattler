import { Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

const Card = props => (
	<Flex flexDirection="column" p={3} w="100%" h="100%" mr={5} justifyContent="space-between" bgColor="rgba(255, 255, 255, .40)">
		<Text textAlign="center">Card: {props.card.name}</Text>
		<Flex flexDirection="row" h="fit-content" justifyContent="space-between">
			<Text>LVL: {props.card.level}</Text>
			<Text>BUFF: {props.card.adaptative}</Text>
		</Flex>
		<Flex flexDirection="row" h="fit-content" justifyContent="space-between">
			<Text>A: {props.card.attack}</Text>
			<Text>L: {props.card.life}</Text>
		</Flex>
	</Flex>
);

Card.propTypes = {
	card: PropTypes.object,
};

export default Card;
