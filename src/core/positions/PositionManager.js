import { rand } from "../utils/utils.js";
/**
 *
 * @param {Array<Agent>} agents
 * @param {Agent} player
 * @param {*} board
 */

function generatePosition(borders) {
	const res = rand(borders.x1, borders.x2);
	return res;
}

export function initPosition(agents, player, borders) {
	for (let i = 0; i < agents.length; i++) {
		agents[i].setPosition(generatePosition(borders), i);
	}
	player.setPosition(generatePosition(borders), 5);
}

export function setPlayerPosition(player, positon) {
	player.position = positon;
}

export function movePositions() {
	return "initPo";
}
