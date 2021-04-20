import TravelStrategy from "./TravelStrategy.js";

export default class DefensiveTravelStrategy extends TravelStrategy {
	static generatePos(agent, mapManager, positionManager) {
		let meanX = 0;
		let meanY = 0;
		const agents = positionManager.m.getAgents().filter(a => a !== agent);
		agents.forEach(a => {
			meanX += a.position.x;
			meanY += a.position.y;
		} );
		meanX /= agents.length;
		meanY /= agents.length;

		meanX = Math.abs(meanX - mapManager.getGridSize() );
		meanY = Math.abs(meanY - mapManager.getGridSize() );

		return positionManager.getClosestPosition(agent.position, mapManager, { x: meanX, y: meanY } );
	}
}
