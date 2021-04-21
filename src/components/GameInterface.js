import GameManager from "../core/GameManager.js";

function format(agent) {
	return {
		name: agent.name,
		color: agent.color,
		position: { ...agent.position },
		life: agent.life,
		level: agent.level,
		boardSize: agent.boardSize,
		money: agent.money,
	};
}

// phase 1 => waiting for position
// phase 2 => waiting for next turn
class GameInterface {
	constructor() {
		this._gameManager = new GameManager();
		this._gameManager.init();

		this.currentPhase = 2; // waiting for next turn
		this.agents = [];
		this.updatedAgents = [];
	}

	// gameloop
	start() {
		this._gameManager.start();
		this.agents = this._gameManager.getAgentsPosition();
	}

	next(selectedBox = null) {
		if (this.currentPhase === 1 && !selectedBox) { // phase = 1 => waiting for position => need selected position
			return -1;
		}
		this.agents = this._gameManager.getAgentsPosition();

		const phase = this._gameManager.next(selectedBox);
		this.currentPhase = phase;
		return phase;
	}
	
	getPriorAgents() {
		this.updatedAgents = this._gameManager.getPriorAgentsPosition();
		return this.updatedAgents.length;
	}

	getLaterAgents() {
		this.updatedAgents = this._gameManager.getLaterAgentsPosition();
		return this.updatedAgents.length;
	}

	// getters
	getAgents() {
		return [...this.agents];
	}
	
	getUpdatedAgents() {
		if (this.updatedAgents.length > 0) {
			const uAgent = this.updatedAgents.shift();
			const index = this.agents.findIndex(a => a.name === uAgent.name);
			this.agents.splice(index, 1, uAgent);
		}
		// return le cache
		return this.getAgents();
	}
	
	getPlayer() {
		return { ...this._gameManager.getPlayer() };
	}

	getBots() {
		return [...this._gameManager.getBots()];
	}

	// get BOARD
	getPlayerProfile() {
		return { ...this._gameManager.getPlayer() };
	}

	getPlayerBoard() {
		return [...this._gameManager.getPlayer().board];
	}

	getPlayerBench() {
		return [...this._gameManager.getPlayer().bench];
	}

	getMarketCard() {
		return { ...this._gameManager.getMarketCard() };
	}

	// GET MAP
	getGridSize() {
		return this._gameManager.getGridSize();
	}

	// cards
	buyCard() {
		return this._gameManager.buyCard();
	}

	sellCard(index, location) {
		return this._gameManager.sellCard(index, location);
	}

	swapCard(index, location) {
		return this._gameManager.swapCard(index, location);
	}

	createMarketCard() {
		this._gameManager.createMarketCard();
	}
	
	rerollCard() {
		return this._gameManager.rerollCard();
	}

	// POSITION
	move(position) {
		this._gameManager.move(position);
	}

	isSelectable(x, y) {
		return this._gameManager.canPlayerMove(x, y) && !this.isDisabled(x, y) && !this.willBeDisabled(x, y);
	}

	// MAP
	isDisabled(x, y) {
		return this._gameManager.isDisabled(x, y);
	}

	willBeDisabled(x, y) {
		return this._gameManager.willBeDisabled(x, y);
	}

	//
	boardUp() {
		return this._gameManager.boardUp();
	}

	levelUp() {
		return this._gameManager.levelUp();
	}
}

export default GameInterface;
