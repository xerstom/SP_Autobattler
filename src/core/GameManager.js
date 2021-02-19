import Agent from "./agents/Agent.js";
import generateAgents from "./factory/AgentFactory.js";
import { generateGameCard, generateTemplateCards } from "./factory/CardFactory.js";
import {
	canMove, initPosition, isDisabled, moveAgents, setPosition,
} from "./positions/PositionManager.js";
import { COLORS, LEVEL_PROPORTION } from "./utils/constants.js";
import { rand } from "./utils/utils.js";

const REROLL_PRICE = 2;

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
		this.createGameCard();
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

	getPlayerBoard() {
		return [...this.player.board];
	}

	getPlayerBench() {
		return [...this.player.bench];
	}

	getAgents() {
		return [...this.agents];
	}

	getPlayer() {
		return { ...this.player };
	}

	getPlayerProfile() {
		return { ...this.player };
	}

	getMarketCard() {
		return { ...this.marketCard };
	}

	createGameCard() {
		const { level } = this.player;
		const max = Math.floor(this.templates.length * LEVEL_PROPORTION[level] );
		const card = rand(0, max - 1);
		this.marketCard = generateGameCard(this.templates[card] );
	}

	rerollCard() {
		if (this.player.hasEnoughMoney(REROLL_PRICE) ) {
			this.player.decreaseMoney( { price: REROLL_PRICE } );
			return true;
		}
		return false;
	}

	buyCard() {
		const res = [false, ""];
		if (!this.player.hasEnoughMoney(this.marketCard.price) ) {
			return res;
		}
		if (this.player.isBoardFull() ) {
			if (this.player.isBenchFull() ) {
				return res;
			}
			this.player.addBench(this.marketCard);
			res[1] = "bench";
		} else {
			this.player.addBoard(this.marketCard);
			res[1] = "board";
		}
		res[0] = true;
		this.player.decreaseMoney(this.marketCard);
		return res;
	}

	sellCard(index, location) {
		let card = null;
		if (location === "board") {
			card = this.player.rmBoard(index);
		} else if (location === "bench") {
			card = this.player.rmBench(index);
		} else {
			return false;
		}
		this.player.increaseMoney(card);
		return true;
	}

	swapCard(index, location) {
		let card = null;
		if (location === "board" && !this.player.isBenchFull() ) {
			card = this.player.rmBoard(index);
			this.player.addBench(card);
		} else if (location === "bench" && !this.player.isBoardFull() ) {
			card = this.player.rmBench(index);
			this.player.addBoard(card);
		} else {
			return false;
		}
		return true;
	}

	/* FACADE */

	// Position Manager
	move(position) {
		if (this.canPlayerMove(position.x, position.y) ) {
			setPosition(this.player, position);
			moveAgents(this.agents, this.mouvementPoints, this.nextBorders);
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
