import TravelStrategy from "./TravelStrategy.js";

// center of the map
function centerMap(gridSize) {
	return {
		x: Math.round( (gridSize - 1) / 2),
		y: Math.round( (gridSize - 1) / 2),
	};
}

export default class AgressiveTravelStrategy extends TravelStrategy {
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
