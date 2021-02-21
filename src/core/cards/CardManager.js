import { generateGameCard, generateGameCards, generateTemplateCards } from "../factory/CardFactory.js";
import Manager from "../Manager.js";
import { CONFIG } from "../utils/constants.js";

class CardManager extends Manager {
	constructor(gameManager) {
		super(gameManager);
		this.templates = generateTemplateCards(CONFIG.TEMPLATE_CARDS);
		this.marketCard = generateGameCard(this.templates, 1);
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
		this.marketCard = generateGameCard(this.templates, this.m.getPlayer().level);
	}

	rerollCard() {
		const player = this.m.getPlayer();
		if (player.hasEnoughMoney(CONFIG.REROLL_PRICE) ) {
			player.decreaseMoney(CONFIG.REROLL_PRICE);
			return true;
		}
		return false;
	}

	buyCard() {
		const player = this.m.getPlayer();
		const res = [false, ""];
		if (!player.hasEnoughMoney(this.marketCard.price) ) {
			return res;
		}
		const [existing, location] = player.cardExist(this.marketCard);
		if (existing) {
			existing.buff(1);
			res[1] = location;
		} else if (player.isBoardFull() ) {
			if (player.isBenchFull() ) {
				return res;
			}
			player.addBench(this.marketCard);
			res[1] = "bench";
		} else {
			player.addBoard(this.marketCard);
			res[1] = "board";
		}
		res[0] = true;
		player.decreaseMoney(this.marketCard.price);
		return res;
	}

	sellCard(index, location) {
		const player = this.m.getPlayer();
		let card = null;
		if (location === "board") {
			card = player.rmBoard(index);
		} else if (location === "bench") {
			card = player.rmBench(index);
		} else {
			return false;
		}
		player.increaseMoney(card.price);
		return true;
	}

	swapCard(index, location) {
		const player = this.m.getPlayer();
		let card = null;
		if (location === "board" && !player.isBenchFull() ) {
			card = player.rmBoard(index);
			player.addBench(card);
		} else if (location === "bench" && !player.isBoardFull() ) {
			card = player.rmBench(index);
			player.addBoard(card);
		} else {
			return false;
		}
		return true;
	}
}

export default CardManager;
