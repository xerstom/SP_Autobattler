
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
	const { agent, isPlayer } = props;
	return (
		<Flex border={`solid ${isPlayer ? "5px" : "2px"} ${agent.color}`} boxShadow="xl" w="12vw" h="auto" flexDirection="column" borderRadius="5%" justifyContent="space-between" alignItems="center" p={4} m="2%" bg={`${isPlayer ? agent.color : "gray"}.200`}>
			<Flex alignItems="center" justifyContent="space-between" >
				{isPlayer ? <Image boxSize="2vw" mr="0.4vw" src="/ressources/crown.png"></Image> : ""}
				<Text stroke="1px black" color={agent.color} fontSize="1vw" >{agent.name}</Text>
			</Flex>
			<Flex flexDirection="row" justifyContent="space-between" width="100%">
				<Flex flexDirection="column" justifyContent="space-between" >
					<Image boxSize="2vw" src="/ressources/heart.png"></Image>
					<Text color ={calculateColor(agent.life)} fontSize="1vw" > {agent.life} </Text>
				</Flex>
				<Flex flexDirection="column" justifyContent="space-between" >
					<Image boxSize="2vw" src="/ressources/coin.png"></Image>
					<Text color="yellow" fontSize="1vw" > {agent.money}</Text>
				</Flex>
			</Flex>
			<Flex flexDirection="row" justifyContent="space-between" width="100%" >
				<Flex flexDirection="column" justifyContent="space-between" alignItems="center" >
					<Image boxSize="2vw" src="/ressources/size.png"></Image>
					<Text color="black" fontSize="1vw" > {agent.boardSize} </Text>
				</Flex>
				<Flex flexDirection="column" justifyContent="space-between" alignItems="center" >
					<Image boxSize="2vw" src="/ressources/star.png"></Image>
					<Text color="black" fontSize="1vw" > {agent.level}</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

Agent.propTypes = {
	agent: PropTypes.object,
	isPlayer: PropTypes.bool,
};

export default Agent;
