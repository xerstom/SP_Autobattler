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
		const inRange = positionManager.getAgentsInRange(agent, mapManager, positionManager);
		const inRangeAndValid = mapManager.validPositions(inRange);

		if (inRangeAndValid.length > 0) {
			if (inRangeAndValid.length > 1) {
				const listOfHps = inRangeAndValid.map(a => a.life);
				const minHP = Math.min(...listOfHps);
				const botMinHp = inRangeAndValid.find(a => a.life === minHP);
				return botMinHp.position;
			}
			return inRangeAndValid[0].position;
		}
		return positionManager.getClosestPosition(agent.position, mapManager, centerMap(mapManager.getGridSize() ) );
	}
}
