import BoardUpStrategy from "./managmentStrategies/BoardUpStrategy.js";
import BuyStrategy from "./managmentStrategies/BuyStrategy.js";
import LevelUpStrategy from "./managmentStrategies/LevelUpStrategy.js";
import ManagementStrategy from "./managmentStrategies/ManagementStrategy.js";
import AgressiveTravelStrategy from "./travelStrategies/AgressiveTravelStrategy.js";
import DefensiveTravelStrategy from "./travelStrategies/DefensiveTravelStrategy.js";

// import TravelStrategy from "./travelStrategies/TravelStrategy.js";

export default class Strategy {
	constructor(agressivity, levelUpProbability, boardUpProbability) {
		// travelStrategy
		this.agressivity = agressivity ?? Math.random();
		this.passivness = 1 - this.agressivity;

		this.choice = null;

		// Managment strategy
		let probaLeft = 1;

		this.levelUpProbability = levelUpProbability ?? Math.random();
		probaLeft -= this.levelUpProbability;

		this.boardUpProbability = boardUpProbability < (probaLeft) ? boardUpProbability : Math.random() * probaLeft;
		probaLeft -= this.boardUpProbability;

		this.buyProbability = probaLeft;
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
		return ManagementStrategy._executeTurn(this.getManagmentStrategy(), this, agent, agentManager, cardManager);
	}

	getManagmentStrategy() {
		if (this.choice) {
			return this.choice;
		}
		const rand = Math.random();
		if (rand < this.buyProbability) {
			this.choice = BuyStrategy;
			return BuyStrategy;
		}
		if (rand < (this.boardUpProbability + this.buyProbability) ) {
			this.choice = BoardUpStrategy;
			return BoardUpStrategy;
		}
		this.choice = LevelUpStrategy;
		return LevelUpStrategy;
	}
}
