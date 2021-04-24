import BoardUpStrategy from "./managmentStrategies/BoardUpStrategy.js";
import BuyStrategy from "./managmentStrategies/BuyStrategy.js";
import LevelUpStrategy from "./managmentStrategies/LevelUpStrategy.js";
import AgressiveTravelStrategy from "./travelStrategies/AgressiveTravelStrategy.js";
import DefensiveTravelStrategy from "./travelStrategies/DefensiveTravelStrategy.js";
// import TravelStrategy from "./travelStrategies/TravelStrategy.js";

export default class Strategy {
	constructor(agressivity, buyProbability, boardUpProbability) {
		// travelStrategy
		this.agressivity = agressivity ?? Math.random();
		this.passivness = 1 - this.agressivity;

		// Managment strategy
		let probaLeft = 1;

		this.buyProbability = buyProbability ?? Math.random();
		probaLeft -= this.buyProbability;

		this.boardUpProbability = boardUpProbability < (probaLeft) ? boardUpProbability : Math.random() * probaLeft;
		probaLeft -= this.boardUpProbability;

		this.levelUpProbability = probaLeft;
	}

	getTravelStrategy() {
		if (Math.random() < this.agressivity) {
			return AgressiveTravelStrategy;
		}
		return DefensiveTravelStrategy;
	}

	getPos(positionManager, mapManager, agent) {
		return this.getTravelStrategy().generatePos(agent, mapManager, positionManager);
	}
	
	executeTurn(agent, agentManager, cardManager) {
		return this.getManagmentStrategy().executeTurn(this, agent, agentManager, cardManager);
	}

	getManagmentStrategy() {
		const rand = Math.random();
		if (rand < this.buyProbability) {
			return BuyStrategy;
		}
		if (rand < (this.boardUpProbability + this.buyProbability) ) {
			return BoardUpStrategy;
		}
		return LevelUpStrategy;
	}
}
