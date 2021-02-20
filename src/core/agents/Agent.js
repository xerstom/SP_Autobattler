const BOARD_PLACE = 5;
const BENCH_PLACE = 7;
class Agent {
	constructor(color) {
		this.name = `Mr ${color.charAt(0).toUpperCase() + color.slice(1)}`;
		this.color = color;
		this.life = 100;
		this.strategy = 0; // strategy

		this.position = {
			x: 0,
			y: 0,
		};
		this.level = 0;
		
		this.money = 1000;
		this.board = [];
		this.bench = []; // list of cards on bench
	}

	/**
	 * wether the card already exist in board / bench
	 *
	 * @param {*} card
	 * @returns
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

	setPosition(x, y) {
		this.position.x = x;
		this.position.y = y;
	}

	hasEnoughMoney(money) {
		return this.money > money;
	}

	isBoardFull() {
		return this.board.length === BOARD_PLACE;
	}

	isBenchFull() {
		return this.bench.length === BENCH_PLACE;
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

	increaseMoney(card) {
		this.money += card.price;
	}

	decreaseMoney(card) {
		this.money -= card.price;
	}
}

export default Agent;
