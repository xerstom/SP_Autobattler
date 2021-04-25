import {
	Box, Flex, Heading, Image, Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

const Stats = props => {
	const { card } = props;
	return (
		<Flex flexDirection="column" w="100%" h="90%" justifyContent="flex-start" >

			<Heading as="h6" fontSize="1vw" mb={1} textAlign="center">  {card.displayName}</Heading>
			<Box h="60%" overflow="hidden" border="solid 3px #101010" borderRadius="3%" >
				<Image h="100%" w="100%" objectFit="cover" src={`/ressources/cardImages/${card.displayImage}`}></Image>
			</Box>
			<Flex flexDirection="column" w="100%" h="20%" fontSize={14} justifyContent="center" bg="gray.300" >
				<Flex flexDirection="row" justifyContent="space-between" alignItems="center">
					<Flex flexDirection="row" alignItems="center" justifyContent="center">
						<Image boxSize="1.3vw" src="/ressources/level.png"></Image>
						<Text ml={1} fontSize="1vw" >{card.level}</Text>
						
					</Flex>
					<Flex flexDirection="row">
						<Text mr={1} fontSize="1vw" > {card.adaptative}</Text>
						<Image boxSize="1.3vw" src="/ressources/star.png"></Image>
					</Flex>
				</Flex>
				<Flex flexDirection="row" h="10%" justifyContent="space-between">
					<Flex flexDirection="row">
						<Image boxSize="1.3vw" src="/ressources/battle.png"></Image>
						<Text ml={1} fontSize="1vw" >{card.attack}</Text>

					</Flex>
					<Flex flexDirection="row" h="10%">
						<Text fontSize="1vw" mr={1} >{card.life}</Text>
						<Image boxSize="1.3vw" src="/ressources/heart.png"></Image>
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
