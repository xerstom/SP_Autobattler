import AgressiveTravelStrategy from "./travelStrategies/AgressiveTravelStrategy.js";
import DefensiveTravelStrategy from "./travelStrategies/DefensiveTravelStrategy.js";
// import TravelStrategy from "./travelStrategies/TravelStrategy.js";

export default class Strategy {
	constructor(agressivity) {
		this.agressivity = agressivity ?? Math.rand();
		this.passivness = 1 - this.agressivity;
	}

	getTravelStrategy() {
		if (Math.rand() < this.agressivity) {
			return AgressiveTravelStrategy;
		}
		return DefensiveTravelStrategy;
	}

	getPos(positionManager, mapManager, agent) {
		return this.getTravelStrategy().generatePos(agent, mapManager, positionManager);
	}
}
