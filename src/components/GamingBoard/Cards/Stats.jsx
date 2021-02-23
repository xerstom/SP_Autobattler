import {
	Box, Flex, Heading, Image, Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

const Stats = props => {
	const { card } = props;
	return (
		<Flex flexDirection="column" w="100%" h="90%" justifyContent="flex-start" >

			<Heading as="h6" size="md" mb={1} textAlign="center">  {card.displayName}</Heading>
			<Box h="60%" overflow="hidden" >
				<Image src={`Ressources/cardImages/${card.displayImage}`}></Image>
			</Box>
			<Flex flexDirection="column" w="100%" h="20%" fontSize={14} justifyContent="center" bg="gray.300" >
				<Flex flexDirection="row" justifyContent="space-between" alignItems="center">
					<Flex flexDirection="row" alignItems="center" justifyContent="center">
						<Text mr={1} fontSize="1vw" >{card.level}</Text>
						<Image boxSize={6} src="/ressources/level.png"></Image>
					</Flex>
					<Flex flexDirection="row">
						<Image boxSize="1.2vw" src="/ressources/star.png"></Image>
						<Text ml={1} fontSize="2xl" > {card.adaptative}</Text>
					</Flex>
				</Flex>
				<Flex flexDirection="row" h="10%" justifyContent="space-between">
					<Flex flexDirection="row">
						<Text mr={1} fontSize="2xl" >{card.attack}</Text>
						<Image boxSize="25px" src="/ressources/battle.png"></Image>
					</Flex>
					<Flex flexDirection="row" h="10%">
						<Image boxSize="25px" src="/ressources/heart.png"></Image>
						<Text fontSize="2xl" ml={1} >{card.life}</Text>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

Stats.propTypes = {
	card: PropTypes.object,
};

export default Stats;
