import TravelStrategy from "./TravelStrategy.js";

/**
 * Return the center of the map
 *
 * @param {Number} gridSize the size of the map/grid
 * @return {Position} the position of the center of the map
 */
function centerMap(gridSize) {
	return {
		x: Math.round( (gridSize - 1) / 2),
		y: Math.round( (gridSize - 1) / 2),
	};
}

/**
 * The class that defines an agressive travel strategy
 *
 * @export
 * @class AgressiveTravelStrategy
 * @extends {TravelStrategy}
 */
export default class AgressiveTravelStrategy extends TravelStrategy {
/**
	 * Returns the position of the lowest hp and in range agent or the position to go near center
	 *
	 * @param {Agent} agent the agent whose position is generated
	 * @param {MapManager} mapManager the map manager
	 * @param {PositionManager} positionManager the position manager
	 * @return {Position}
	 * @memberof Strategy
	 */
	static generatePos(agent, mapManager, positionManager) {
		const inRange = positionManager.getAgentsInRange(agent);
		if (inRange.length > 0) {
			if (inRange.length > 1) {
				const listOfHps = inRange.map(a => a.life);
				const minHP = Math.min(...listOfHps);
				const botMinHp = inRange.find(a => a.life === minHP);
				return positionManager.getPosition(botMinHp.name);
			}
			return positionManager.getPosition(inRange[0].name);
		}
		return positionManager.getClosestPosition(positionManager.getPosition(agent.name), centerMap(mapManager.getGridSize(), mapManager) );
	}
}
