import { Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

import Agent from "./Agent/Agent.jsx";

const AgentDisplayer = props => {
	const { agents } = props;

	// const [agents, setAgents] = useState(manager.getAgents());

	const sortedAgents = agents.sort( (a, b) => b.life - a.life)
		.map(agent => <Agent key={agent.color} agent={agent}></Agent>);
	
	return (
		<Flex wrap="wrap" h="100%">
			{sortedAgents}
		</Flex>
	);
};

AgentDisplayer.propTypes = {
	agents: PropTypes.array,
};

export default AgentDisplayer;
