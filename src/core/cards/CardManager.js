import { generateGameCard, generateGameCards, generateTemplateCards } from "../factory/CardFactory.js";
import Manager from "../Manager.js";
import { CONFIG } from "../utils/constants.js";

/**
 * Manager that handles all cards and hold template cards used to create game cards
 *
 * @class CardManager
 * @extends {Manager}
 * @prop {Array<TemplateCard>} templates The templates cards used to create game cards
 * @prop {Map<String, GameCard>} marketCards The Map of Market card for each agent
 * @prop {Number} buffPercentage The percentage of point a card gets when it get buffed
 */
class CardManager extends Manager {
	constructor(gameManager) {
		super(gameManager);
		this.templates = generateTemplateCards(CONFIG.TEMPLATE_CARDS);

		this.marketCards = new Map();

		this.buffPercentage = CONFIG.BUFF_PERCENTAGE;
	}
	
	// init
	init() {
		this.m.getAgents()
			.forEach(e => this.initCards(e, CONFIG.BASE_CARDS) );
	}

	/**
	 * Initialise the cards for an agent
	 *
	 * @param {Agent} agent The agent that get its cards initialised
	 * @param {Number} x base card level allowed
	 * @memberof CardManager
	 */
	initCards(agent, x) {
		agent.setBoard(generateGameCards(x, this.templates) );
		this.setMarket(agent.name, generateGameCard(this.templates, 1) );
	}

	// setters / getters

	/**
	 * Set the market card for an agent
	 *
	 * @param {String} name
	 * @param {GameCard} card
	 * @memberof CardManager
	 */
	setMarket(name, card) {
		this.marketCards.set(name, card);
	}

	/**
	 * Get a market card for an agent
	 *
	 * @param {String} name
	 * @returns {GameCard}
	 * @memberof CardManager
	 */
	getMarketCard(name) {
		return this.marketCards.get(name);
	}
	
	/**
	 * Get a template card that matches a predicate
	 *
	 * @param {Function} predicate
	 * @returns {TemplateCard}
	 * @memberof CardManager
	 */
	getTemplate(predicate) {
		return this.templates.find(predicate);
	}

	// Management

	/**
	 * Set a new card as market card for a given agent
	 *
	 * @param {Agent} agent
	 * @memberof CardManager
	 */
	rerollMarketCard(agent) {
		this.setMarket(agent.name, generateGameCard(this.templates, agent.level) );
	}

	/**
	 * Reroll a market card for an agent if he has enough money and decrease his money
	 *
	 * @param {Agent} agent
	 * @returns {Boolean}
	 * @memberof CardManager
	 */
	rerollCard(agent) {
		if (agent.hasEnoughMoney(CONFIG.REROLL_PRICE) ) {
			agent.decreaseMoney(CONFIG.REROLL_PRICE);
			this.rerollMarketCard(agent);
			return true;
		}
		return false;
	}

	/**
	 * Calculate the number of stats the card will get when getting buffed based of the card stats
	 *
	 * @param {GameCard} marketCard
	 * @returns {Number} The number of stats the buffed card will get
	 * @memberof CardManager
	 */
	getPercentageBuff(marketCard) {
		return Math.round(marketCard.stats * this.buffPercentage);
	}

	/**
	 * Buy a market card for an agent if he has enough money and enough space on either board or bench. Decrease money.
	 * Returns where the card was added. Reroll the market card once the card was bought
	 *
	 * @param {Agent} agent
	 * @returns {Array<[Boolean, String]>} A tuple with a boolean for whether it worked, and where the card was added.
	 * @memberof CardManager
	 */
	buyCard(agent) {
		const res = [false, ""];
		const marketCard = this.getMarketCard(agent.name);
		if (!agent.hasEnoughMoney(marketCard.price) ) {
			return res;
		}
		const [existing, location] = agent.cardExist(marketCard);
		if (existing) {
			existing.buff(this.getPercentageBuff(marketCard) );
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

	/**
	 * Sell a card located on either board or bench at a specific index
	 * Increase the Agent money
	 *
	 * @param {Agent} agent
	 * @param {Number} index The card index
	 * @param {String} location The board or the bench
	 * @returns {Boolean}
	 * @memberof CardManager
	 */
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

	/**
	 * Swap a card at the specific index from the bench to the board or opposite
	 *
	 * @param {Agent} agent
	 * @param {Number} index The card index
	 * @param {String} location Where the card is located (will swap in the other location)
	 * @returns {Boolean}
	 * @memberof CardManager
	 */
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

	/**
	 * Optimize the board and the bench by mixing up cards to make sure the best cards (with the more stats) are on the board
	 *
	 * @param {Array<GameCard>} board
	 * @param {Array<GameCard>} bench
	 * @param {Number} boardMaxlength The max number of card the board can hold
	 * @returns {Array<[Array<GameCard>, Array<GameCard>]>} The new board and bench
	 * @memberof CardManager
	 */
	optimizeBoards(board, bench, boardMaxlength) {
		const cards = [...board, ...bench];
		cards.sort( (a, b) => b.stats - a.stats);
		const updatedBoard = cards.slice(0, boardMaxlength);
		const updatedBench = cards.slice(boardMaxlength);

		return [updatedBoard, updatedBench];
	}
}

export default CardManager;
