import TravelStrategy from "./TravelStrategy.js";



export default class AgressiveTravelStrategy extends TravelStrategy {
	static generatePos(agent, mapManager, positionManager) {
		const inRange = positionManager.getAgentsInRange(agent, mapManager, positionManager);
		const inRangeAndValid = mapManager.validPositions(inRange);

		if (inRangeAndValid.lenght > 0) {
			if (inRangeAndValid.lenght > 1) {
				const listOfHps = inRangeAndValid.map(a => a.life);
				const minIndex = inRangeAndValid.indexOf(Math.min(...listOfHps) );
				return inRangeAndValid[minIndex.position];
			}
			return inRange[0].position;
		}
		return positionManager.getPositionToCenter(agent.pos, mapManager, { x: mapManager.getGridSize() / 2, y: mapManager.getGridSize() } );
	}
}
