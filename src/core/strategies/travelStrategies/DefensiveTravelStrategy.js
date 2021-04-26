import TravelStrategy from "./TravelStrategy.js";


/**
 * The class that defines a defensive travel strategy
 *
 * @export
 * @class DefensiveTravelStrategy
 * @extends {TravelStrategy}
 */
export default class DefensiveTravelStrategy extends TravelStrategy {
	/**
	 * Returns the opposite of the mean position
	 *
	 * @param {Agent} agent the agent whose position is generated
	 * @param {MapManager} mapManager the map manager
	 * @param {PositionManager} positionManager the position manager
	 * @return {Position}
	 * @memberof Strategy
	 */
	static generatePos(agent, mapManager, positionManager) {
		let meanX = 0;
		let meanY = 0;
		const agents = positionManager.getAllPosition().filter(a => a.name !== agent.name);
		agents.forEach(a => {
			meanX += a.x;
			meanY += a.y;
		} );
		meanX /= agents.length;
		meanY /= agents.length;

		meanX = mapManager.getGridSize() - Math.round(meanX);
		meanY = mapManager.getGridSize() - Math.round(meanY);

		return positionManager.getClosestPosition(positionManager.getPosition(agent.name), {
			x: meanX,
			y: meanY,
		}, mapManager);
	}
}
