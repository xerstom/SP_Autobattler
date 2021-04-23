import { generateGameCard, generateGameCards, generateTemplateCards } from "../factory/CardFactory.js";
import Manager from "../Manager.js";
import { CONFIG } from "../utils/constants.js";

class CardManager extends Manager {
	constructor(gameManager) {
		super(gameManager);
		this.templates = generateTemplateCards(CONFIG.TEMPLATE_CARDS);

		this.marketCards = new Map();
	}
	
	// init
	init() {
		this.m.getAgents()
			.forEach(e => this.initCards(e, CONFIG.BASE_CARDS) );
	}

	initCards(agent, x) {
		agent.setBoard(generateGameCards(x, this.templates) );
		this.setMarket(agent.name, generateGameCard(this.templates, 1) );
	}

	// setters / getters
	setMarket(name, card) {
		this.marketCards.set(name, card);
	}

	getMarketCard(name) {
		return this.marketCards.get(name);
	}
	
	getTemplate(predicate) {
		return this.templates.find(predicate);
	}

	// Management
	rerollMarketCard(agent) {
		this.setMarket(agent.name, generateGameCard(this.templates, agent.level) );
	}

	rerollCard(agent) {
		if (agent.hasEnoughMoney(CONFIG.REROLL_PRICE) ) {
			agent.decreaseMoney(CONFIG.REROLL_PRICE);
			this.rerollMarketCard(agent);
			return true;
		}
		return false;
	}

	buyCard(agent) {
		const res = [false, ""];
		const marketCard = this.getMarketCard(agent.name);
		if (!agent.hasEnoughMoney(marketCard.price) ) {
			return res;
		}
		const [existing, location] = agent.cardExist(marketCard);
		if (existing) {
			existing.buff(1);
			res[1] = location;
		} else if (agent.isBoardFull() ) {
			if (agent.isBenchFull() ) {
				return res;
			}
			agent.addBench(marketCard);
			res[1] = "bench";
		} else {
			agent.addBoard(marketCard);
			res[1] = "board";
		}
		res[0] = true;
		agent.decreaseMoney(marketCard.price);
		this.rerollMarketCard(agent);
		return res;
	}

	sellCard(agent, index, location) {
		let card = null;
		if (location === "board") {
			card = agent.rmBoard(index);
		} else if (location === "bench") {
			card = agent.rmBench(index);
		} else {
			return false;
		}
		agent.increaseMoney(card.price);
		return true;
	}

	swapCard(agent, index, location) {
		let card = null;
		if (location === "board" && !agent.isBenchFull() ) {
			card = agent.rmBoard(index);
			agent.addBench(card);
		} else if (location === "bench" && !agent.isBoardFull() ) {
			card = agent.rmBench(index);
			agent.addBoard(card);
		} else {
			return false;
		}
		return true;
	}
}

export default CardManager;
