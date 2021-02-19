import { Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState } from "react";

import Agent from "./Agent/Agent.jsx";

const AgentDisplayer = props => {
	const { manager } = props;

	// const [agents, setAgents] = useState(manager.getAgents());

	const agents = manager.getAgents().map(agent => <Agent key={agent.color} agent={agent}></Agent>);
	
	return (
		<Flex wrap="wrap" h="100%">
			<Agent key={manager.getPlayer()} agent={manager.getPlayer()}></Agent>
			{agents}
		</Flex>
	);
};

AgentDisplayer.propTypes = {
	
};

export default AgentDisplayer;
