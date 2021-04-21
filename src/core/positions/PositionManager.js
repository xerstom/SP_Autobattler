import Manager from "../Manager.js";
import { CONFIG } from "../utils/constants.js";
import { absDistance, rand } from "../utils/utils.js";

function generatePosition(borders) {
	return rand(borders.x1, borders.x2);
}

class PositionManager extends Manager {
	constructor(gameManager) {
		super(gameManager);

		this.positions = new Map();
		this.movementPoints = CONFIG.MOVEMENT_POINTS;
	}

	getMovementPoints() {
		return this.movementPoints;
	}

	setPosition(name, x, y) {
		this.positions.set(name, { name, x, y } );
	}

	getPosition(name) {
		return this.positions.get(name);
	}

	getAllPosition() {
		return [...this.positions.values()];
	}

	init() {
		const agents = this.m.getAgents();
		for (let i = 0; i < agents.length; i++) {
			this.setPosition(agents[i].name, i, generatePosition(this.m.mapManager.borders) );
		}
	}

	// TODO: verifier avec les borders?
	canMove(name, x, y) {
		const position = this.getPosition(name);
		return Math.abs(x - position.x) + Math.abs(y - position.y) <= this.movementPoints;
	}

	moveBots(agents) {
		for (const agent of agents) {
			const newPos = agent.strategy.getPos(this, this.m.mapManager, agent);
			this.move(agent, newPos);
		}
	}

	move(agent, position) {
		if (this.canMove(agent.name, position.x, position.y) ) {
			this.setPosition(agent.name, position.x, position.y);
		}
	}

	getAgentsInRange(agent) {
		return this.m.getPriorAgents(agent).filter(a => this.isInMoveDistance(a, agent) );
	}

	isInMoveDistance(a, b) {
		const aPos = this.getPosition(a.name);
		const bPos = this.getPosition(b.name);
		return (absDistance(aPos.x, bPos.x) + absDistance(aPos.y, bPos.y) <= this.movementPoints);
	}

	getClosestPosition(srcPos, targetPos, mapManager) {
		let xMove = srcPos.x < targetPos.x
			? Math.round(this.movementPoints / 2)
			: -Math.round(this.movementPoints / 2);
		xMove = this.reAdjustPosition(srcPos.x, targetPos.x, xMove);
		// Mp left to move
		let mpLeft = this.movementPoints - Math.abs(xMove);
		
		let yMove = srcPos.y < targetPos.y
			? mpLeft
			: -mpLeft;

		yMove = this.reAdjustPosition(srcPos.y, targetPos.y, yMove);

		mpLeft = mpLeft - Math.abs(yMove) > 0 ? mpLeft : 0;

		// While we have mp to use
		while (mpLeft > 0) {
			// if we are not at the x pos
			if (xMove + srcPos.x !== targetPos.x) {
				xMove > 0 ? xMove++ : xMove--;
				mpLeft--;
			} else if (yMove + srcPos.y !== targetPos.y) { // if we are not at the x pos
				yMove > 0 ? yMove++ : yMove--;
				mpLeft--;
			} else { // We are at the exact pos
				break;
			}
		}

		return { x: srcPos.x + xMove, y: srcPos.y + yMove };
	}

	reAdjustPosition(curPos, posToGo, move) {
		if (curPos < posToGo) {
			// If we are left from the posToGo
			if (curPos + move > posToGo) { // If we went beyond posToGo
				move = posToGo - curPos;
			}
		} else if (curPos - move < posToGo) { // If we are right from the posToGo
			// If we went beyond posToGo
			move = curPos - posToGo;
		}
		return move;
	}
}

export default PositionManager;
