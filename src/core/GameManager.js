import generateAgents from "./factory/AgentFactory.js";
import { generateTemplateCards } from "./factory/CardFactory.js";
import { COLORS } from "./utils/constants.js";

/**
 *
 * @prop {Array<Agent>} agents
 * @prop {Array<CardTemplate>} templates
 * @class GameManager
 */
class GameManager {
	constructor() {
		this.agents = generateAgents(7, COLORS);
		this.templates = generateTemplateCards(100);
		
		this.phase = 0; //
		this.end = false;
		this.init();
	}

	init() {
		this.agents.forEach(e => e.init(3, this.templates) );
		console.log(this.agents);
		// genere cartes template
		// genere 7 agents
		// donne des cartes aux agents
		// position agents
	}
	
	start() {
		console.log("start");
		while (this.end) {
			//
		}
	}
}

export default GameManager;
