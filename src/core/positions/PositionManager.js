import Manager from "../Manager.js";
import { absDistance, rand } from "../utils/utils.js";

function generatePosition(borders) {
	return rand(borders.x1, borders.x2);
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

	canPlayerMove(x, y) {
		return this.canMove(x, y, this.m.getPlayer().position, this.m.getMovementPoints() );
	}

	canMove(x, y, playerPositon, movementPoints) {
		return Math.abs(x - playerPositon.x) + Math.abs(y - playerPositon.y) <= movementPoints;
	}

	movePriorAgents() {
		this.moveBots(this.m.getPriorAgents() );
	}

	moveLaterAgents() {
		this.moveBots(this.m.getLaterAgents().slice(1) );
	}

	moveBots(agents) {
		for (const agent of agents) {
			// const newPos = generateValidPosition(agent.position, movementPoints, nextBorders);
			const newPos = agent.strategy.getPos(this, this.m.mapManager, agent);
			agent.setPosition(newPos.x, newPos.y);
		}
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

	isInMoveDistance(a, b, mp) {
		return (absDistance(a.position.x, b.position.x) + absDistance(a.position.y, b.position.y) <= mp);
	}

	getAgentsInRange(agent, mapManager) {
		const mp = mapManager.getMovementPoints();
		return this.m.getAgents().filter(a => a !== agent && this.isInMoveDistance(a, agent, mp) );
	}

	getClosestPosition(curPos, mapManager, pos) {
		let xMove = curPos.x < pos.x
			? Math.round(mapManager.getMovementPoints() / 2)
			: -Math.round(mapManager.getMovementPoints() / 2);
		xMove = this.reAdjustPosition(curPos.x, pos.x, xMove);
		// Mp left to move
		let mpLeft = mapManager.getMovementPoints() - Math.abs(xMove);
		
		let yMove = curPos.y < pos.y
			? mpLeft
			: -mpLeft;

		yMove = this.reAdjustPosition(curPos.y, pos.y, yMove);

		mpLeft = mpLeft - Math.abs(yMove) > 0 ? mpLeft : 0;

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
