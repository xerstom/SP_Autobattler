import { Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

import Agent from "./Agent/Agent.jsx";

const AgentDisplayer = props => {
	const { gInterface } = props;

	// const [agents, setAgents] = useState(manager.getAgents());

	const agents = gInterface.getAgents().sort( (a, b) => b - a).map(agent => <Agent key={agent.color} agent={agent}></Agent>);
	
	return (
		<Flex wrap="wrap" h="100%">
			{agents}
		</Flex>
	);
};

AgentDisplayer.propTypes = {
	gInterface: PropTypes.object,
};

export default AgentDisplayer;
