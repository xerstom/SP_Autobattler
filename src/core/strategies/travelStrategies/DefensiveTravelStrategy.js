import TravelStrategy from "./TravelStrategy.js";

export default class DefensiveTravelStrategy extends TravelStrategy {
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
