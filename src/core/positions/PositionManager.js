import Manager from "../Manager.js";
import { CONFIG } from "../utils/constants.js";
import { absDistance, rand } from "../utils/utils.js";

function generatePosition(borders) {
	return rand(borders.x1, borders.x2);
}

/**
 * @typedef {{x: Number, y: Number}} Position
 */


/**
 * Manager that handles all the positions and movements
 *
 * @class PositionManager
 * @prop {Map<Position>} positions map of the positions
 * @prop {Number} movementPoints the maximum movement points for the agents
 * @extends {Manager}
 */
class PositionManager extends Manager {
	/**
	 * Consructor for PositionManager
	 * @param {GameManager} gameManager the game manager
	 * @memberof PositionManager
	 */
	constructor(gameManager) {
		super(gameManager);

		this.positions = new Map();
		this.movementPoints = CONFIG.MOVEMENT_POINTS;
	}

	/**
	 * Initiate all the agents position
	 *
	 * @memberof PositionManager
	 */
	init() {
		const agents = this.m.getAgents();
		for (let i = 0; i < agents.length; i++) {
			this.setPosition(agents[i].name, i, generatePosition(this.m.mapManager.borders) );
		}
	}

	/**
	 * return the movementPoints value
	 *
	 * @return {Number} the maximum movement points for the agents
	 * @memberof PositionManager
	 */
	getMovementPoints() {
		return this.movementPoints;
	}

	/**
	 * Sets the position of a given agent base on his name
	 *
	 * @param {String} name the name of the agent
	 * @param {Number} x x coordinate of the position
	 * @param {Number} y x coordinate of the position
	 * @memberof PositionManager
	 */
	setPosition(name, x, y) {
		this.positions.set(name, { name, x, y } );
	}

	/**
	 * get the position of a given agent based on his name
	 *
	 * @param {String} name the name of the agent
	 * @return {Position} the agent position
	 * @memberof PositionManager
	 */
	getPosition(name) {
		return this.positions.get(name);
	}

	/**
	 * Get a copy of all the agent position
	 *
	 * @return {Map<Position>} positions map of the positions
	 * @memberof PositionManager
	 */
	getAllPosition() {
		return [...this.positions.values()];
	}

	/**
	 * Compares two positions and returns if they are the same
	 *
	 * @param {*} a first position
	 * @param {*} b second position
	 * @return {Boolean} returns if the given position are the same
	 * @memberof PositionManager
	 */
	samePosition(a, b) {
		const aPos = this.getPosition(a.name);
		const bPos = this.getPosition(b.name);
		return (aPos.x === bPos.x && aPos.y === bPos.y);
	}

	// TODO: verifier avec les borders?
	/**
	 * Returns a boolean to indicate if the agent can move to the given point
	 *
	 * @param {String} name the name of the agent
	 * @param {Number} x x coordinate of the position
	 * @param {Number} y x coordinate of the position
	 * @return {Boolean} return if the agent can move to the given point
	 * @memberof PositionManager
	 */
	canMove(name, x, y) {
		const position = this.getPosition(name);
		return Math.abs(x - position.x) + Math.abs(y - position.y) <= this.movementPoints;
	}

	/**
	 * move all the bots using their strategies
	 *
	 * @param {Agent[]} agents The agents to move
	 * @memberof PositionManager
	 */
	moveBots(agents) {
		for (const agent of agents) {
			const newPos = agent.strategy.getPos(this, this.m.mapManager, agent);
			this.move(agent, newPos);
		}
	}

	/**
	 * Move the given agent to the given position if it is possible
	 *
	 * @param {Agent} agent the agent to move
	 * @param {Position} position the position to move the agent to
	 * @memberof PositionManager
	 */
	move(agent, position) {
		if (this.canMove(agent.name, position.x, position.y) ) {
			this.setPosition(agent.name, position.x, position.y);
		}
	}

	/**
	 * Returns an array with all the in range agents
	 *
	 * @param {Agent} agent the agents to look around
	 * @return {Agent[]} the array of agents
	 * @memberof PositionManager
	 */
	getAgentsInRange(agent) {
		return this.m.getPriorAgents(agent).filter(a => this.isInMoveDistance(a, agent) );
	}

	/**
	 * returns if an agent is in move distance from another
	 *
	 * @param {*} a the first agent
	 * @param {*} b the second agent
	 * @return {Boolean} if their are in range
	 * @memberof PositionManager
	 */
	isInMoveDistance(a, b) {
		const aPos = this.getPosition(a.name);
		const bPos = this.getPosition(b.name);
		return (absDistance(aPos.x, bPos.x) + absDistance(aPos.y, bPos.y) <= this.movementPoints);
	}

	/**
	 * Return the closest reachable position from the given position
	 *
	 * @param {Position} srcPos The position from where we start
	 * @param {Position} targetPos the position where we want to go
	 * @param {MapManager} mapManager the map manager
	 * @return {Position} the closest reachable position from the given position
	 * @memberof PositionManager
	 */
	// eslint-disable-next-line no-unused-vars
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

	/**
	 * Function that readjusts a position
	 *
	 * @param {Number} curPos the position to readjust
	 * @param {Number} posToGo the position we want to go to
	 * @param {Number} move the movement shift
	 * @return {Number} the adjusted movement shift
	 * @memberof PositionManager
	 */
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
