import Agent from "../agents/Agent.js";

export default function generateAgents(x, COLORS) {
	const agents = [];
	for (let i = 1; i <= x; ++i) {
		agents.push(new Agent(COLORS[i] ) );
	}
	return agents;
}
