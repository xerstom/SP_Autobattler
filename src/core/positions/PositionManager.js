import { rand } from "../utils/utils.js";


// Private functions
function generatePosition(borders) {
	return rand(borders.x1, borders.x2);
}
function distance(x1, x2) {
	return Math.abs( (x1 - x2) );
}

function generateValidPosition(position, mouvementPoints, nextBorders) {
	const d1 = distance(position.x, nextBorders.x1);
	const d2 = distance(position.x, nextBorders.x2);

	const xNegativeMove = d1 <= mouvementPoints ? d1 : mouvementPoints;
	const xMove = rand(0, d2 <= mouvementPoints ? d2 + xNegativeMove : mouvementPoints + xNegativeMove) - xNegativeMove;


	
	const moveDistLeft = mouvementPoints - Math.abs(xMove);

	const d3 = distance(position.y, nextBorders.y1);
	const d4 = distance(position.y, nextBorders.y2);

	const yNegativeMove = d3 <= mouvementPoints ? d3 : mouvementPoints;
	const yMove = rand(0, d4 <= moveDistLeft ? d4 + yNegativeMove : moveDistLeft + yNegativeMove) - yNegativeMove;
	
	return { x: position.x + xMove, y: position.y + yMove };
}


export function initPosition(agents, player, borders) {
	for (let i = 0; i < agents.length; i++) {
		agents[i].setPosition(generatePosition(borders), i);
	}
	player.setPosition(generatePosition(borders), 7);
}

export function setPosition(player, position) {
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

export function moveAgents(agents, mouvementPoints, nextBorders) {
	for (let i = 0; i < agents.length; i++) {
		const newPos = generateValidPosition(agents[i].position, mouvementPoints, nextBorders);
		agents[i].setPosition(newPos.x, newPos.y);
	}
}



