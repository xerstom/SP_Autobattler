class Agent {
	constructor(name) {
		this.name = name;
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
}

export default Agent;
