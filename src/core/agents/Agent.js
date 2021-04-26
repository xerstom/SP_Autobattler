import { COLOR_HEX, CONFIG } from "../utils/constants.js";

/**
 *
 * @prop {String} name Agent name
 * @prop {String} color Agent color
 * @prop {Number} life Current Agent life
 * @prop {Number} boardSize Current board size
 * @prop {Number} level Current level (card level max)
 * @prop {Number} money Current money
 * @prop {Number} boardUpPrice Price for a bordSize up
 * @prop {Number} levelUpPrice Price for a level up
 * @prop {Array<GameCard>} board
 * @prop {Array<GameCard>} bench
 *
 * @class Agent
 */
class Agent {
	/**
	 * Creates an instance of Agent.
	 * @param {String} color Agent color
	 * @memberof Agent
	 */
	constructor(color) {
		this.name = `Mr ${color.charAt(0).toUpperCase() + color.slice(1)}`;
		this.color = COLOR_HEX[color];
		this.life = CONFIG.BASE_LIFE;
		
		this.boardSize = CONFIG.BASE_BOARD_PLACE;
		this.level = 1;
		
		this.money = CONFIG.BASE_MONEY;
		
		this.boardUpPrice = CONFIG.BASE_BOARD_UP_PRICE;
		this.levelUpPrice = CONFIG.BASE_LEVEL_UP_PRICE;
		
		this.board = [];
		this.bench = []; // list of cards on bench
	}

	/**
	 * wether the card already exist in board / bench
	 *
	 * @param {GameCard} card
	 * @returns {Array<GameCard, String>} [card, location]
	 * @memberof Agent
	 */
	cardExist(card) {
		const res = [null, ""];
		res[0] = this.board.find(c => c.name === card.name);
		if (res[0] ) {
			res[1] = "board";
		} else {
			res[0] = this.bench.find(c => c.name === card.name);
			if (res[0] ) {
				res[1] = "bench";
			}
		}
		return res;
	}

	/**
	 * Increase the level and the level up price
	 *
	 * @memberof Agent
	 */
	upLevel() {
		this.level++;
		this.levelUpPrice = Math.round(this.levelUpPrice * CONFIG.LEVEL_UP_MULTIPLIER);
	}

	/**
	 * Increase the board and the board up price
	 *
	 * @memberof Agent
	 */
	upBoard() {
		this.boardSize++;
		this.boardUpPrice = Math.round(this.boardUpPrice * CONFIG.BOARD_UP_MULTIPLIER);
	}

	/**
	 * Check whether the agent has enough money
	 *
	 * @param {Number} money
	 * @returns {Boolean}
	 * @memberof Agent
	 */
	hasEnoughMoney(money) {
		return this.money >= money;
	}

	/**
	 * Whether the agent's board is full
	 *
	 * @returns {Boolean}
	 * @memberof Agent
	 */
	isBoardFull() {
		return this.board.length === this.boardSize;
	}

	/**
	 * Whether the agent's bench is full
	 *
	 * @returns {Boolean}
	 * @memberof Agent
	 */
	isBenchFull() {
		return this.bench.length === CONFIG.MAX_BENCH_PLACE;
	}

	/**
	 * Whether the agent's level is max
	 *
	 * @returns {Boolean}
	 * @memberof Agent
	 */
	isLevelMax() {
		return this.level === CONFIG.MAX_LEVEL;
	}

	/**
	 * Whether the agent's board size is max
	 *
	 * @returns {Boolean}
	 * @memberof Agent
	 */
	isBoardSizeMax() {
		return this.boardSize === CONFIG.MAX_BOARD_PLACE;
	}

	/**
	 * Set the agent's board
	 *
	 * @param {Array<GameCard>} board
	 * @memberof Agent
	 */
	setBoard(board) {
		this.board = board;
	}

	/**
	 * Set the agent's board
	 *
	 * @param {Array<GameCard>} board
	 * @memberof Agent
	 */
	 setBench(bench) {
		this.bench = bench;
	}

	/**
	 * Set the board and the bench for the agent
	 *
	 * @param {Array<GameCard>} board
	 * @param {Array<GameCard>} bench
	 * @memberof Agent
	 */
	setNewGamingBoard(board, bench) {
		this.board = board;
		this.bench = bench;
	}

	/**
	 * Adds a card to the board
	 *
	 * @param {GameCard} card
	 * @memberof Agent
	 */
	addBoard(card) {
		this.board.push(card);
	}

	/**
	 * Adds a card to the bench
	 *
	 * @param {GameCard} card
	 * @memberof Agent
	 */
	addBench(card) {
		this.bench.push(card);
	}

	/**
	 * Remove a card from the board at the chosen index
	 *
	 * @param {Number} index
	 * @returns {Array<GameCard>}
	 * @memberof Agent
	 */
	rmBoard(index) {
		return this.board.splice(index, 1)[0];
	}

	/**
	 * Remove a card from the bench at the chosen index
	 *
	 * @param {Number} index
	 * @returns {Array<GameCard>}
	 * @memberof Agent
	 */
	rmBench(index) {
		return this.bench.splice(index, 1)[0];
	}

	/**
	 * Remove a card from the board at the chosen index
	 *
	 * @param {Number} index
	 * @returns {Array<GameCard>}
	 * @memberof Agent
	 */
	increaseMoney(money) {
		this.money += money;
	}

	/**
	 * Decrease the agent's money
	 *
	 * @param {Number} money
	 * @memberof Agent
	 */
	decreaseMoney(money) {
		this.money -= money;
	}

	/**
	 * Decrease the agent's life
	 *
	 * @param {Number} life
	 * @memberof Agent
	 */
	decreaseLife(life) {
		this.life -= life;
	}
}

export default Agent;
