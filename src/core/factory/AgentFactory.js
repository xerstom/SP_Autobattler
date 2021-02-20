import Bot from "../agents/Bot.js";
import Player from "../agents/Player.js";

function createAgent(bot, color) {
	return bot
		? new Bot(color)
		: new Player(color);
}

export default function generateAgents(x, COLORS) {
	const agents = [];
	agents.push(createAgent(true, COLORS[0] ) );
	for (let i = 1; i < x; ++i) {
		agents.push(createAgent(true, COLORS[i] ) );
	}
	return agents;
}

