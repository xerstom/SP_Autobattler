import Agent from "../agents/Agent.js";

export default function generateAgents(x, COLORS) {
	const agents = [];
	agents.push(new Agent(COLORS[0] ) );
	for (let i = 0; i < x; ++i) {
		agents.push(new Agent(COLORS[i + 1] ) );
	}
	return agents;
}
