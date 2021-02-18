import { Button, Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

const Card = props => {
	const { card, sell, swap } = props;
	return (
		<Flex flexDirection="column" p={3} w="100%" h="100%" mr={5} justifyContent="space-between" bgColor="rgba(255, 255, 255, .40)">
			<Text textAlign="center">Card: {card.name}</Text>
			<Flex flexDirection="row" h="fit-content" justifyContent="space-between">
				<Text>LVL: {card.level}</Text>
				<Text>BUFF: {card.adaptative}</Text>
			</Flex>
			<Flex flexDirection="row" h="fit-content" justifyContent="space-between">
				<Text>A: {card.attack}</Text>
				<Text>L: {card.life}</Text>
			</Flex>
			<Flex flexDirection="row" h="fit-content" justifyContent="space-between">
				<Button onClick={sell} p={1} fontSize={12} height="2rem">Vendre</Button>
				<Button onClick={swap} p={1} fontSize={12} height="2rem">Swap</Button>
			</Flex>
		</Flex>
	);
};

Card.propTypes = {
	card: PropTypes.object,
	sell: PropTypes.func,
	swap: PropTypes.func,
};

export default Card;
