import GameManager from "./GameManager.js";

/**
 *
 * @prop {Array<Agent>} agents
 * @prop {Array<CardTemplate>} templates
 * @class GameManager
 */
class BackGameInterface {
	constructor() {
		this._gameManager = new GameManager();
		this._gameManager.init();
	}

	get gm() {
		return this._gameManager;
	}

	start() {
		this.gm.start();
	}

	// GAMELOOP
	next(selectedBox) {
		return this.gm.next(selectedBox);
	}

	// POSITIONS
	_formatPosition(agent) {
		const position = this.gm.getPosition(agent);
		return {
			name: agent.name,
			color: agent.color,
			x: position.x,
			y: position.y,
		};
	}

	getAgentsPosition() {
		return this.gm.getAgents().map(e => this._formatPosition(e) );
	}

	getPriorAgentsPosition() {
		return this.gm.getPriorAgents().map(e => this._formatPosition(e) );
	}

	getLaterAgentsPosition() {
		return this.gm.getLaterAgentsCache().map(e => this._formatPosition(e) );
	}

	// AGENTS
	_formatAgent(agent) {
		return {
			name: agent.name,
			color: agent.color,
			life: agent.life,
			level: agent.level,
			boardSize: agent.boardSize,
			money: agent.money,
			boardUpPrice: agent.boardUpPrice,
			levelUpPrice: agent.levelUpPrice,
		};
	}

	getAgents() {
		return this.gm.getAgents().map(e => this._formatAgent(e) );
	}

	getAgent(name) {
		return this._formatAgent(this.gm.getAgent(name) );
	}

	// Profile
	_formatBoard(agent) {
		return {
			name: agent.name,
			bench: [...agent.bench],
			board: [...agent.board],
		};
	}

	getBoard(name) {
		return this._formatBoard(this.gm.getAgent(name) );
	}

	// GETTERS
	getGridSize() {
		return this.gm.getGridSize();
	}

	getMarketCard() {
		return this.gm.getMarketCard();
	}

	// PLAYER INTERACTION
	canPlayerMove(x, y) {
		return this.gm.canPlayerMove(x, y);
	}

	levelUp() {
		return this.gm.levelUp();
	}

	boardUp() {
		return this.gm.boardUp();
	}

	rerollCard() {
		return this.gm.rerollCard();
	}

	buyCard() {
		return this.gm.buyCard();
	}

	sellCard(index, location) {
		return this.gm.sellCard(index, location);
	}

	swapCard(index, location) {
		return this.gm.swapCard(index, location);
	}

	// MAP
	isDisabled(x, y) {
		return this.gm.isDisabled(x, y);
	}

	willBeDisabled(x, y) {
		return this.gm.willBeDisabled(x, y);
	}

	// BATTLE
	getBattleSummary() {
		return this.gm.getBattleSummary();
	}
}

export default BackGameInterface;
