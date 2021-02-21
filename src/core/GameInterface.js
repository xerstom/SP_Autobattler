import GameManager from "./GameManager.js";

class GameInterface {
	constructor() {
		this._gameManager = new GameManager();
		this._gameManager.init();
	}

	start() {
		this._gameManager.start();
	}
	
	getAgents() {
		return this._gameManager.getAgents();
	}
	
	getPlayer() {
		return this._gameManager.getPlayer();
	}

	getBots() {
		return this._gameManager.getBots();
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

	canPlayerMove(x, y) {
		return this._gameManager.canPlayerMove(x, y);
	}

	// MAP
	isDisabled(x, y) {
		return this._gameManager.isDisabled(x, y);
	}

	willBeDisabled(x, y) {
		return this._gameManager.willBeDisabled(x, y);
	}

	generateNewBorders() {
		this._gameManager.generateNewBorders();
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
