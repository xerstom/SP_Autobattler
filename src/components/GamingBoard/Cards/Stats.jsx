import { Box, Flex, Image, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

const Stats = props => {
	const { card } = props;
	return (
		<Flex flexDirection="column" w="100%" h="100%" fontSize={14} justifyContent="space-between" mb={3} >
			<Text textAlign="center">Card: {card.name}</Text>
			<Flex flexDirection="row" h="fit-content" justifyContent="space-between">
				<Flex flexDirection="row">
					<Text mr={1} textAlign="right" >{card.adaptative}</Text>
					<Image boxSize="25px" src="/ressources/level.png"></Image>
				</Flex>
				<Flex flexDirection="row">
					<Image boxSize="25px" src="/ressources/star.png"></Image>
					<Text ml={1} textAlign="left"> {card.adaptative}</Text>
				</Flex>
			</Flex>
			<Flex flexDirection="row" h="fit-content" justifyContent="space-between">
				<Flex flexDirection="row">
					<Text mr={1} textAlign="right" >{card.attack}</Text>
					<Image boxSize="25px" src="/ressources/battle.png"></Image>
				</Flex>
				<Flex flexDirection="row">
					<Image boxSize="25px" src="/ressources/heart.png"></Image>
					<Text ml={1} textAlign="left" >{card.life}</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

Stats.propTypes = {
	card: PropTypes.object,
};

export default Stats;
