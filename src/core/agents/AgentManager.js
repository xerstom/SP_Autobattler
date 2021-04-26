import generateAgents from "../factory/AgentFactory.js";
import Manager from "../Manager.js";
import { COLORS, CONFIG } from "../utils/constants.js";

/**
 * Manager that handles all agents
 *
 * @class AgentManager
 * @extends {Manager}
 * @prop {Array<Agent>} agents All the agents
 */
class AgentManager extends Manager {
	constructor(gameManager) {
		super(gameManager);
		this.agents = generateAgents(CONFIG.AGENTS, COLORS);
	}

	init() {
		//
	}

	/**
	 * All agents
	 *
	 * @returns {Array<Agent>}
	 * @memberof AgentManager
	 */
	getAll() {
		return this.agents;
	}

	/**
	 * All agents sorted by the amount of life they have
	 *
	 * @returns {Array<Agent>}
	 * @memberof AgentManager
	 */
	getSorted() {
		return [...this.agents].sort( (a, b) => b.life - a.life);
	}

	/**
	 * All agents sorted, before the chosen agent
	 *
	 * @param {Agent} agent
	 * @returns {Array<Agent>}
	 * @memberof AgentManager
	 */
	getPrior(agent) {
		const sorted = this.getSorted();
		const index = sorted.findIndex(a => a.name === agent.name);
		return sorted.slice(0, index);
	}

	/**
	 * All agents sorted, after the chosen agent
	 *
	 * @param {Agent} agent
	 * @returns {Array<Agent>}
	 * @memberof AgentManager
	 */
	getLater(agent) {
		const sorted = this.getSorted();
		const index = sorted.findIndex(a => a.name === agent.name);
		return sorted.slice(index, sorted.length);
	}

	/**
	 * The player
	 *
	 * @returns {Player}
	 * @memberof AgentManager
	 */
	getPlayer() {
		return this.agents[0];
	}

	/**
	 * All bots (without the player)
	 *
	 * @returns {Array<Bot>}
	 * @memberof AgentManager
	 */
	getBots() {
		return this.agents.slice(1);
	}

	/**
	 * An Agent that matches the predicate
	 *
	 * @param {Function} predicate
	 * @returns {Agent}
	 * @memberof AgentManager
	 */
	get(predicate) {
		return this.agents.find(predicate);
	}

	/**
	 * An Agent that matches the name
	 *
	 * @param {String} name
	 * @returns {Agent}
	 * @memberof AgentManager
	 */
	getByName(name) {
		return this.agents.find(a => a.name === name);
	}

	/**
	 * Increase the board size of an agent if he has enough money and decrease his money
	 *
	 * @param {Agent} agent
	 * @returns {Boolean}
	 * @memberof AgentManager
	 */
	boardUp(agent) {
		if (!agent.isBoardSizeMax() && agent.hasEnoughMoney(agent.boardUpPrice) ) {
			agent.decreaseMoney(agent.boardUpPrice);
			agent.upBoard();
			return true;
		}
		return false;
	}

	/**
	 * Increase the level of an agent if he has enough money and decrease his money
	 *
	 * @param {Agent} agent
	 * @returns {Boolean}
	 * @memberof AgentManager
	 */
	levelUp(agent) {
		if (!agent.isLevelMax() && agent.hasEnoughMoney(agent.levelUpPrice) ) {
			agent.decreaseMoney(agent.levelUpPrice);
			agent.upLevel();
			return true;
		}
		return false;
	}

	/**
	 * Calls level up or board up
	 *
	 * @param {Agent} agent
	 * @param {String} action
	 * @returns {Boolean}
	 * @memberof AgentManager
	 */
	buy(agent, action) {
		return this[action](agent);
	}

	/**
	 * Increase the money for all agents of the given money
	 *
	 * @param {Number} moneyToAdd
	 * @memberof AgentManager
	 */
	increaseMoneyForAllAgents(moneyToAdd) {
		this.agents.forEach(a => a.increaseMoney(moneyToAdd) );
	}
}

export default AgentManager;
