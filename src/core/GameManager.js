import generateAgents from "./factory/AgentFactory.js";
import generateTemplateCards from "./factory/CardFactory.js";

/**
 *
 * @prop {Array<Agent>} agents
 * @prop {Array<CardTemplate>} templates
 * @class GameManager
 */
class GameManager {
	constructor() {
		this.agents = generateAgents(7);
		this.templates = generateTemplateCards(10, 0, 10);
		
		this.phase = 0; //
		this.end = false;
		this.init();
	}

	init() {
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
