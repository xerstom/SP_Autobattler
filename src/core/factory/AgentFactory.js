import Bot from "../agents/Bot.js";
import Player from "../agents/Player.js";

/**
 * Create an agent
 *
 * @param {Boolean} bot
 * @param {String} color
 * @returns {Agent}
 */
function createAgent(bot, color) {
	return bot
		? new Bot(color)
		: new Player(color);
}

/**
 * Generate all agents
 *
 * @export
 * @param {Number} x Number of agents to create
 * @param {CONSTANT} COLORS All colors to apply to agents
 * @returns {Array<Agent>}
 */
export default function generateAgents(x, COLORS) {
	const agents = [];
	agents.push(createAgent(false, COLORS[0] ) );
	for (let i = 1; i < x; ++i) {
		agents.push(createAgent(true, COLORS[i] ) );
	}
	return agents;
}

