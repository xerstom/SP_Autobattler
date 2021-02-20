import Manager from "../Manager.js";
import { distance, rand } from "../utils/utils.js";

function generatePosition(borders) {
	return rand(borders.x1, borders.x2);
}

function generateValidPosition(position, movementPoints, nextBorders) {
	const d1 = distance(position.x, nextBorders.x1);
	const d2 = distance(nextBorders.x2, position.x);

	const xNegativeMove = d1 <= movementPoints ? d1 : movementPoints;
	const xMove = rand(0, d2 <= movementPoints ? d2 + xNegativeMove : movementPoints + xNegativeMove) - xNegativeMove;

	const moveDistLeft = movementPoints - Math.abs(xMove);

	const d3 = distance(position.y, nextBorders.y1);
	const d4 = distance(nextBorders.y2, position.y);

	const yNegativeMove = d3 <= movementPoints ? d3 : movementPoints;
	const yMove = rand(0, d4 <= moveDistLeft ? d4 + yNegativeMove : moveDistLeft + yNegativeMove) - yNegativeMove;

	return { x: position.x + xMove, y: position.y + yMove };
}

class PositionManager extends Manager {
	constructor(gameManager) {
		super(gameManager);

		this.positions = [];
	}

	init() {
		const agents = this.m.getAgents();
		for (let i = 0; i < agents.length; i++) {
			agents[i].setPosition(generatePosition(this.m.mapManager.borders), i);
		}
	}

	setPosition(player, position) {
		player.setPosition(position.x, position.y);
	}

	/**
	 * Move all agents when player has chosen where to go
	 *
	 * @param {*} position
	 * @memberof PositionManager
	 */
	move(position) {
		if (this.canPlayerMove(position.x, position.y) ) {
			this.setPosition(this.m.getPlayer(), position);
			this.moveBots(this.m.getBots(), this.m.getMovementPoints(), this.m.getNextBorders() );
		}
	}

	canPlayerMove(x, y) {
		return this.canMove(x, y, this.m.getPlayer().position, this.m.getMovementPoints() );
	}

	canMove(x, y, playerPositon, movementPoints) {
		return Math.abs(x - playerPositon.x) + Math.abs(y - playerPositon.y) <= movementPoints;
	}

	moveBots(agents, movementPoints, nextBorders) {
		for (let i = 0; i < agents.length; i++) {
			const newPos = generateValidPosition(agents[i].position, movementPoints, nextBorders);
			agents[i].setPosition(newPos.x, newPos.y);
		}
	}
}

export default PositionManager;
