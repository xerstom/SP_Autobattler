import { generateGameCard } from "../factory/CardFactory.js";
import { LEVEL_PROPORTION } from "../utils/constants.js";
import { rand } from "../utils/utils.js";

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

	init(x, templates) {
		for (let i = 0; i < x; ++i) {
			const max = Math.floor(templates.length * LEVEL_PROPORTION[0] );
			const card = rand(0, max - 1);
			this.board.push(generateGameCard(templates[card] ) );
		}
	}

	setPosition(x, y) {
		this.position.x = x;
		this.position.y = y;
	}

	isBoardFull() {
		return this.board.length === BOARD_PLACE;
	}

	isBenchFull() {
		return this.bench.length === BENCH_PLACE;
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
