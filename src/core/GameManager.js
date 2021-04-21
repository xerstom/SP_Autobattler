import AgentManager from "./agents/AgentManager.js";
import BattleManager from "./battles/BattleManager.js";
import CardManager from "./cards/CardManager.js";
import GameLoop from "./GameLoop.js";
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
		this.battleManager = new BattleManager(this);
		this.gameLoop = new GameLoop(this);
	}

	// lifecycle
	init() {
		this.agentManager.init();
		this.cardManager.init();
		this.mapManager.init();
		this.positionManager.init();
		this.battleManager.init();
	}

	start() {
		this.gameLoop.start();
	}

	// gameloop
	next(selectedBox = null) {
		return this.gameLoop.next(selectedBox);
	}

	// GETTERS
	getAgents() {
		return this.agentManager.getAll();
	}

	_populatePosition(agent) {
		const position = this.positionManager.getPosition(agent.name);
		return {
			name: agent.name,
			color: agent.color,
			x: position.x,
			y: position.y,
		};
	}

	getAgentsPosition() {
		return this.agentManager.getAll().map(e => this._populatePosition(e) );
	}

	getPriorAgentsPosition() {
		return this.agentManager.getPrior().map(e => this._populatePosition(e) );
	}

	getLaterAgentsPosition() {
		return this.agentManager.getLater().map(e => this._populatePosition(e) );
	}

	getPriorAgents(agent) {
		return this.agentManager.getPrior(agent);
	}

	getLaterAgents(agent) {
		return this.agentManager.getLater(agent);
	}

	getPlayer() {
		return this.agentManager.getPlayer();
	}

	getBots() {
		return this.agentManager.getBots();
	}

	getMovementPoints() {
		return this.positionManager.getMovementPoints();
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
	movePlayer(position) {
		this.positionManager.move(this.agentManager.getPlayer(), position);
	}

	movePriorAgents() {
		this.positionManager.moveBots(this.agentManager.getPrior() );
	}

	moveLaterAgents() {
		this.positionManager.moveBots(this.agentManager.getLater().slice(1) );
	}

	canPlayerMove(x, y) {
		return this.positionManager.canMove(this.agentManager.getPlayer().name, x, y);
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

	battle() {
		this.battleManager.setup();
		this.battleManager.battleAll();
	}
}

export default GameManager;
