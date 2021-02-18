import Agent from "./agents/Agent.js";
import generateAgents from "./factory/AgentFactory.js";
import { generateGameCard, generateTemplateCards } from "./factory/CardFactory.js";
import { canMove, initPosition, isDisabled, setPosition } from "./positions/PositionManager.js";
import { COLORS, LEVEL_PROPORTION } from "./utils/constants.js";
import { rand } from "./utils/utils.js";

/**
 *
 * @prop {Array<Agent>} agents
 * @prop {Array<CardTemplate>} templates
 * @class GameManager
 */
class GameManager {
	constructor() {
		this.player = new Agent(COLORS[0] );
		this.agents = generateAgents(7, COLORS);
		this.templates = generateTemplateCards(100);
		this.borders = { x1: 0, x2: 9, y1: 0, y2: 9 };
		this.nextBorders = { x1: 1, x2: 9, y1: 0, y2: 9 };
		this.mouvementPoints = 5;
		this.phase = 0; //
		this.end = false;
		this.init();
	}

	init() {
		this.player.init(3, this.templates);
		this.agents.forEach(e => e.init(3, this.templates) );
		// genere cartes template
		// genere 7 agents
		// donne des cartes aux agents
		// position agents
		initPosition(this.agents, this.player, this.borders);
	}

	

	start() {
		while (this.end) {
			//
		}
	}

	createGameCard(level) {
		const max = Math.floor(this.templates.length * LEVEL_PROPORTION[level] );
		const card = rand(0, max - 1);
		return generateGameCard(this.templates[card] );
	}
	/* FACADE */

	// Position Manager
	move(position) {
		if (this.canPlayerMove(position.x, position.y) ) {
			setPosition(this.player, position);
		}
	}

	canPlayerMove(x, y) {
		return canMove(x, y, this.player.position, this.mouvementPoints);
	}

	isDisabled(x, y) {
		return isDisabled(x, y, this.borders);
	}

	willBeDisabled(x, y) {
		return isDisabled(x, y, this.nextBorders);
	}
}

export default GameManager;
