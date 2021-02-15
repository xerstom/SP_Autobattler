import Agent from "../agents/Agent.js";

export default function generateAgents(x) {
	const agents = [];
	for (let i = 0; i < x; ++i) {
		agents.push(new Agent(`Walter${i}`) );
	}
	agents.push(new Agent("Player") );
	return agents;
}
