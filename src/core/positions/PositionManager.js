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
	player.setPosition(generatePosition(borders), 7);
}

export function setPosition(player, position) {
	console.log(player);
	player.setPosition(position.x, position.y);
}

export function movePositions() {
	return "initPo";
}


export function isDisabled(x, y, borders) {
	return x < borders.x1 || x > borders.x2 || y < borders.y1 || y > borders.y2;
}

export function canMove(x, y, playerPositon, mouvementPoints) {
	return Math.abs(x - playerPositon.x) + Math.abs(y - playerPositon.y) <= mouvementPoints;
}
