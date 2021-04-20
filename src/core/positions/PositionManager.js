import Manager from "../Manager.js";
import { absDistance, distance, rand } from "../utils/utils.js";

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

	movePriorAgents() {
		this.moveBots(this.m.getPriorAgents(), this.m.getMovementPoints(), this.m.getNextBorders() );
	}

	moveLaterAgents() {
		this.moveBots(this.m.getLaterAgents().slice(1), this.m.getMovementPoints(), this.m.getNextBorders() );
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
		}
	}

	canPlayerMove(x, y) {
		return this.canMove(x, y, this.m.getPlayer().position, this.m.getMovementPoints() );
	}

	canMove(x, y, playerPositon, movementPoints) {
		return Math.abs(x - playerPositon.x) + Math.abs(y - playerPositon.y) <= movementPoints;
	}

	moveBots(agents, movementPoints = this.m.getMovementPoints(), nextBorders = this.m.getNextBorders() ) {
		for (const agent of agents) {
			const newPos = generateValidPosition(agent.position, movementPoints, nextBorders);
			agent.setPosition(newPos.x, newPos.y);
		}
	}

	isInMoveDistance(a, b, mp) {
		return (absDistance(a.position.x, b.position.x) + absDistance(a.position.y, b.position.y) < mp);
	}

	getAgentsInRange(agent, mapManager) {
		const mp = mapManager.getMovementPoints();
		return this.m.getAgents().filter(a => a !== agent && this.isInMoveDistance(a, agent, mp) );
	}

	getClosestPosition(curPos, mapManager, pos) {
		let xMove = curPos.x < pos.x ? curPos.x + (mapManager.getMovementPoints() / 2) : curPos.x - (mapManager.getMovementPoints() / 2);
		this.readjustPosition(curPos.x, pos.x, xMove);

		// Mp left to move
		let mpLeft = mapManager.getMovementPoints() - xMove;

		let yMove = curPos.y < pos.y ? curPos.y + mpLeft : curPos.x - mpLeft;

		this.readjustPosition(curPos.y, pos.y, yMove);

		mpLeft = mpLeft - yMove >= 0 ?? 0;

		// While we have mp to use
		while (mpLeft > 0) {
			// if we are not at the x pos
			if (xMove + curPos.x !== pos.x) {
				xMove > 0 ? xMove++ : xMove--;
				mpLeft--;
			} else if (yMove + curPos.y !== pos.y) { // if we are not at the x pos
				yMove > 0 ? yMove++ : yMove--;
				mpLeft--;
			} else { // We are at the exact pos
				break;
			}
		}

		return { x: curPos.x + xMove, y: curPos.y + yMove };
	}

	reAdjustPosition(curPos, posToGo, Move) {
		if (curPos < posToGo) {
			// If we are left from the posToGo
			if (Move > posToGo) { // If we went beyond posToGo
				Move = posToGo - curPos;
			}
		} else if (Move < posToGo) { // If we are right from the posToGo
			// If we went beyond posToGo
			Move = curPos - posToGo;
		}
	}
}

export default PositionManager;
