import { generateGameCard, generateGameCards, generateTemplateCards } from "../factory/CardFactory.js";
import Manager from "../Manager.js";
import { CONFIG } from "../utils/constants.js";

class CardManager extends Manager {
	constructor(gameManager) {
		super(gameManager);
		this.templates = generateTemplateCards(CONFIG.TEMPLATE_CARDS);

		this.marketCard = generateGameCard(this.templates);
	}

	get player() {
		return this.m.getPlayer();
	}

	init() {
		this.m.getAgents()
			.forEach(e => this.initCards(e, CONFIG.BASE_CARDS) );
	}

	initCards(agent, x) {
		agent.setBoard(generateGameCards(x, this.templates) );
	}
	
	getTemplate(predicate) {
		return this.templates.find(predicate);
	}

	getMarketCard() {
		return this.marketCard;
	}

	// logic
	// TODO rerollMarketCard / rerollCard
	rerollMarketCard() {
		this.marketCard = generateGameCard(this.templates);
	}

	rerollCard() {
		if (this.player.hasEnoughMoney(CONFIG.REROLL_PRICE) ) {
			this.player.decreaseMoney( { price: CONFIG.REROLL_PRICE } );
			return true;
		}
		return false;
	}

	buyCard() {
		const res = [false, ""];
		if (!this.player.hasEnoughMoney(this.marketCard.price) ) {
			return res;
		}
		const [existing, location] = this.player.cardExist(this.marketCard);
		if (existing) {
			existing.buff(1);
			res[1] = location;
		} else if (this.player.isBoardFull() ) {
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

	has(player, card) {
		//
	}
}

export default CardManager;
