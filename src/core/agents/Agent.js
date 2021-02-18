import { generateGameCard } from "../factory/CardFactory.js";
import { LEVEL_PROPORTION } from "../utils/constants.js";
import { rand } from "../utils/utils.js";

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
		
		this.money = 10;
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
}

export default Agent;
