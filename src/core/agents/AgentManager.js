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

	boardUp() {
		const player = this.getPlayer();
		if (!player.isBoardSizeMax() && player.hasEnoughMoney(player.boardUpPrice) ) {
			player.decreaseMoney(player.boardSize);
			player.upBoard();
			return true;
		}
		return false;
	}

	levelUp() {
		const player = this.getPlayer();
		if (!player.isLevelMax() && player.hasEnoughMoney(player.levelUpPrice) ) {
			player.decreaseMoney(player.levelUpPrice);
			player.upLevel();
			return true;
		}
		return false;
	}
}

export default AgentManager;
