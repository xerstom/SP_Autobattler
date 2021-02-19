
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

const calculateColor = (life) => {
	if (life > 50) {
		return "green";
	}
	return life > 25 ? "orange" : "red";
};
const lifeIcon = "https://www.flaticon.com/svg/vstatic/svg/1037/1037983.svg?token=exp=1613761522~hmac=2d58d9035d68e1edbae17b63e55fd975";
const coinIcon = "https://www.flaticon.com/svg/vstatic/svg/533/533544.svg?token=exp=1613761749~hmac=1eb64cb61f5288ff7f77b866984ac761";
const Agent = props => {
	const { agent } = props;
	return (
		<Flex boxShadow="xl" w="25vh" h="auto" flexDirection="column" borderRadius="5%" justifyContent="space-between" alignItems="center" p={4} m={4} bg={"gray.300"} >
			<Text stroke="1px black" color = {agent.color} textShadow="0px 1px 0px rgba(150, 150, 150, 1)" > {agent.name}</Text>
			<Flex flexDirection="row" justifyContent="space-between" width="100%">
				<Flex flexDirection="column" justifyContent="space-between" >
					<Image src={lifeIcon}></Image>
					<Text color ={calculateColor(agent.life)}> {agent.life} </Text>
				</Flex>
				<Flex flexDirection="column" justifyContent="space-between" >
					<Image src={coinIcon}></Image>
					<Text color="yellow" > {agent.money}</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

Agent.propTypes = {
	
};

export default Agent;
