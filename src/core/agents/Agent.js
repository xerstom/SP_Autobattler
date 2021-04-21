import { COLOR_HEX, CONFIG } from "../utils/constants.js";

/**
 *
 * @prop {String} name
 * @prop {String} color
 * @prop {Number} life Current Agent life
 * @prop {Object} strategy
 * @prop {Object} position Agent position
 * @prop {Number} position.x
 * @prop {Number} position.y
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

	upLevel() {
		this.level++;
		this.levelUpPrice = Math.round(this.levelUpPrice * CONFIG.LEVEL_UP_MULTIPLIER);
	}

	upBoard() {
		this.boardSize++;
		this.boardUpPrice = Math.round(this.boardUpPrice * CONFIG.BOARD_UP_MULTIPLIER);
	}

	hasEnoughMoney(money) {
		return this.money > money;
	}

	isBoardFull() {
		return this.board.length === this.boardSize;
	}

	isBenchFull() {
		return this.bench.length === CONFIG.MAX_BENCH_PLACE;
	}

	isLevelMax() {
		return this.level === CONFIG.MAX_LEVEL;
	}

	isBoardSizeMax() {
		return this.boardSize === CONFIG.MAX_BOARD_PLACE;
	}

	setBoard(board) {
		this.board = board;
	}

	addBoard(card) {
		this.board.push(card);
	}

	addBench(card) {
		this.bench.push(card);
	}

	rmBoard(index) {
		return this.board.splice(index, 1)[0];
	}

	rmBench(index) {
		return this.bench.splice(index, 1)[0];
	}

	increaseMoney(money) {
		this.money += money;
	}

	decreaseMoney(money) {
		this.money -= money;
	}
}

export default Agent;
