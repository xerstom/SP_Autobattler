import { generateGameCard } from "../factory/CardFactory.js";
import { LEVEL_PROPORTION } from "../utils/constants.js";
import { rand } from "../utils/utils.js";

class Agent {
	constructor(color) {
		this.name = `Mr ${color}`;
		this.color = color;
		this.life = 100;
		this.strategy = 0; // strategy

		this.position = {
			x: 0,
			y: 0,
		};
		
		this.money = 10;
		this.board = []; // list of cards on board
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
}

export default Agent;
