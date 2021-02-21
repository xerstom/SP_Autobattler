import AgentManager from "./agents/AgentManager.js";
import CardManager from "./cards/CardManager.js";
import MapManager from "./map/MapManager.js";
import PositionManager from "./positions/PositionManager.js";

/**
 *
 * @prop {Array<Agent>} agents
 * @prop {Array<CardTemplate>} templates
 * @class GameManager
 */
class GameManager {
	constructor() {
		this.agentManager = new AgentManager(this);
		this.positionManager = new PositionManager(this);
		this.cardManager = new CardManager(this);
		this.mapManager = new MapManager(this);
	}

	init() {
		this.agentManager.init();
		this.cardManager.init();
		this.mapManager.init();
		this.positionManager.init();
	}

	start() {
		while (this.end) {
			//
		}
	}

	// GETTERS
	getAgents() {
		return this.agentManager.getAll();
	}

	getPlayer() {
		return this.agentManager.getPlayer();
	}

	getBots() {
		return this.agentManager.getBots();
	}

	getMovementPoints() {
		return this.mapManager.getMovementPoints();
	}

	getNextBorders() {
		return this.mapManager.getNextBorders();
	}

	getGridSize() {
		return this.mapManager.getGridSize();
	}

	getMarketCard() {
		return this.cardManager.getMarketCard();
	}

	// CARDS
	createMarketCard() {
		this.cardManager.rerollMarketCard();
	}

	rerollCard() {
		return this.cardManager.rerollCard();
	}

	buyCard() {
		return this.cardManager.buyCard();
	}

	sellCard(index, location) {
		return this.cardManager.sellCard(index, location);
	}

	swapCard(index, location) {
		return this.cardManager.swapCard(index, location);
	}

	// POSITION
	move(position) {
		this.positionManager.move(position);
	}

	canPlayerMove(x, y) {
		return this.positionManager.canPlayerMove(x, y);
	}

	// MAP
	isDisabled(x, y) {
		return this.mapManager.isDisabled(x, y);
	}

	willBeDisabled(x, y) {
		return this.mapManager.willBeDisabled(x, y);
	}

	generateNewBorders() {
		this.mapManager.generateNewBorders();
	}

	// Profile
	levelUp() {
		return this.agentManager.levelUp();
	}

	boardUp() {
		return this.agentManager.boardUp();
	}
}

export default GameManager;
