import generateAgents from "../factory/AgentFactory.js";
import Manager from "../Manager.js";
import { COLORS, CONFIG } from "../utils/constants.js";

class AgentManager extends Manager {
	constructor(gameManager) {
		super(gameManager);
		this.agents = generateAgents(CONFIG.AGENTS, COLORS);
	}

	init() {
		//
	}

	getAll() {
		return this.agents;
	}

	getSorted() {
		return [...this.agents].sort( (a, b) => a.life - b.life);
	}

	getPrior(agent = this.getPlayer() ) {
		const sorted = this.getSorted();
		const index = sorted.findIndex(a => a.name === agent.name);
		return sorted.slice(0, index);
	}

	getLater(agent = this.getPlayer() ) {
		const sorted = this.getSorted();
		const index = sorted.findIndex(a => a.name === agent.name);
		return sorted.slice(index, sorted.length);
	}

	getPlayer() {
		return this.agents[0];
	}

	getBots() {
		return this.agents.slice(1);
	}

	get(predicate) {
		return this.agents.find(predicate);
	}

	getByName(name) {
		return this.agents.find(a => a.name === name);
	}

	boardUp(agent) {
		if (!agent.isBoardSizeMax() && agent.hasEnoughMoney(agent.boardUpPrice) ) {
			agent.decreaseMoney(agent.boardSize);
			agent.upBoard();
			return true;
		}
		return false;
	}

	levelUp(agent) {
		if (!agent.isLevelMax() && agent.hasEnoughMoney(agent.levelUpPrice) ) {
			agent.decreaseMoney(agent.levelUpPrice);
			agent.upLevel();
			return true;
		}
		return false;
	}

	buy(agent, action) {
		return this[action](agent);
	}

	increaseMoneyForAllAgents(moneyToAdd) {
		this.agents.forEach(a => a.increaseMoney(moneyToAdd) );
	}
}

export default AgentManager;
