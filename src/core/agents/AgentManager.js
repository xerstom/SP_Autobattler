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

	getPlayer() {
		return this.agents[0];
	}

	getBots() {
		return this.agents.slice(1);
	}

	get(predicate) {
		return this.agents.find(predicate);
	}

	getName(name) {
		return this.agents.find(a => a.name === name);
	}
}

export default AgentManager;
