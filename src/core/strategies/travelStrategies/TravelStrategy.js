import { distance, rand } from "../../utils/utils.js";

/**
 * The super class that defines a default travel strategy
 *
 * @export
 * @class TravelStrategy
 */
export default class TravelStrategy {
	/**
	 * Returns a new random position for the agent
	 *
	 * @param {Agent} agent the agent whose position is generated
	 * @param {MapManager} mapManager the map manager
	 * @param {PositionManager} positionManager the position manager
	 * @return {Position}
	 * @memberof Strategy
	 */
	// eslint-disable-next-line no-unused-vars
	static generatePos(agent, mapManager, positionManager) {
		const mp = mapManager.getMovementPoints();
		const d1 = distance(agent.position.x, mapManager.nextBorders.x1);
		const d2 = distance(mapManager.nextBorders.x2, agent.position.x);

		const xNegativeMove = d1 <= mapManager.getMovementPoints() ? d1 : mp;
		const xMove = rand(0, d2 <= mp ? d2 + xNegativeMove : mp + xNegativeMove) - xNegativeMove;

		const moveDistLeft = mp - Math.abs(xMove);

		const d3 = distance(agent.position.y, mapManager.nextBorders.y1);
		const d4 = distance(mapManager.nextBorders.y2, agent.position.y);

		const yNegativeMove = d3 <= mp ? d3 : mp;
		const yMove = rand(0, d4 <= moveDistLeft ? d4 + yNegativeMove : moveDistLeft + yNegativeMove) - yNegativeMove;

		return { x: agent.position.x + xMove, y: agent.position.y + yMove };
	}
}
