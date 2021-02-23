
import { Flex, Image, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

const calculateColor = (life) => {
	if (life > 50) {
		return "green";
	}
	return life > 25 ? "orange" : "red";
};


const Agent = props => {
	const { agent } = props;
	return (
		<Flex boxShadow="xl" w="25vh" h="auto" flexDirection="column" borderRadius="5%" justifyContent="space-between" alignItems="center" p={4} m={4} bg="gray.300">
			<Text stroke="1px black" color={agent.color} textShadow="0px 1px 0px rgba(150, 150, 150, 1)" >{agent.name}</Text>
			<Flex flexDirection="row" justifyContent="space-between" width="100%">
				<Flex flexDirection="column" justifyContent="space-between" >
					<Image boxSize="30px" src="/ressources/heart.png"></Image>
					<Text color ={calculateColor(agent.life)}> {agent.life} </Text>
				</Flex>
				<Flex flexDirection="column" justifyContent="space-between" >
					<Image boxSize="30px" src="/ressources/coin.png"></Image>
					<Text color="yellow" > {agent.money}</Text>
				</Flex>
			</Flex>
			<Flex flexDirection="row" justifyContent="space-between" width="100%" >
				<Flex flexDirection="column" justifyContent="space-between" alignItems="center" >
					<Image boxSize="30px" src="/ressources/size.png"></Image>
					<Text color="black" > {agent.boardSize} </Text>
				</Flex>
				<Flex flexDirection="column" justifyContent="space-between" alignItems="center" >
					<Image boxSize="30px" src="/ressources/star.png"></Image>
					<Text color="black" > {agent.level}</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

Agent.propTypes = {
	agent: PropTypes.object,
};

export default Agent;
