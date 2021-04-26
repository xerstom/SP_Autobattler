import BoardUpStrategy from "./managmentStrategies/BoardUpStrategy.js";
import BuyStrategy from "./managmentStrategies/BuyStrategy.js";
import LevelUpStrategy from "./managmentStrategies/LevelUpStrategy.js";
import ManagementStrategy from "./managmentStrategies/ManagementStrategy.js";
import AgressiveTravelStrategy from "./travelStrategies/AgressiveTravelStrategy.js";
import DefensiveTravelStrategy from "./travelStrategies/DefensiveTravelStrategy.js";

// import TravelStrategy from "./travelStrategies/TravelStrategy.js";


/**
 * Class to encapsulate all the strategies
 * @class Strategy
 * @prop {Number} agressivity probability to be aggressive
 * @prop {Number} passivness probability to be passive
 * @prop {String} choice previous choice made but not fulfilled
 * @prop {Number} levelUpProbability probability to levelUp this turn
 * @prop {Number} boardUpProbability probability to increase the board size this turn
 * @prop {Number} buyProbability probability to cards this turn
 */
export default class Strategy {
	/**
	 * Constructor of the Strategy Class
	 *
     * @param {Number} agressivity probability to be aggressive
     * @param {Number} levelUpProbability probability to levelUp this turn
     * @param {Number} boardUpProbability probability to increase the board size this turn
     */
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

	/**
	 * Randomly pick a travel strategy based on probabilities
	 *
	 * @return {TravelStrategy} the randomly chosen strategy
	 * @memberof Strategy
	 */
	getTravelStrategy() {
		if (Math.random() < this.agressivity) {
			return AgressiveTravelStrategy;
		}
		return DefensiveTravelStrategy;
	}

	/**
	 * Return the next pos of an agent based on his strategy
	 *
	 * @param {PositionManager} positionManager the position manager
	 * @param {MapManager} mapManager the map manager
	 * @param {Agent} agent the agent whose position is generated
	 * @return {Position}
	 * @memberof Strategy
	 */
	getPos(positionManager, mapManager, agent) {
		return this.getTravelStrategy().generatePos(agent, mapManager, positionManager);
	}
	
	/**
	 * Execute the turn of an agent based on his managment strategy
	 *
	 * @param {Agent} agent
	 * @param {AgentManager} agentManager
	 * @param {CardManager} cardManager
	 * @return {void}
	 * @memberof Strategy
	 */
	executeTurn(agent, agentManager, cardManager) {
		return ManagementStrategy._executeTurn(this.getManagmentStrategy(), this, agent, agentManager, cardManager);
	}

	/**
	 * Randomly pick a management strategy based on probabilities
	 *
	 * @return {ManagementStrategy} The chosen management strategy
	 * @memberof Strategy
	 */
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
