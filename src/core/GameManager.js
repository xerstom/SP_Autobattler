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

	// GAMELOOP
	next(selectedBox = null) {
		return this.gameLoop.next(selectedBox);
	}

	// AGENTS
	getAgent(name) {
		if (!name) {
			return this.agentManager.getPlayer();
		}
		return this.agentManager.getByName(name) || this.agentManager.getPlayer();
	}

	getPlayer() {
		return this.agentManager.getPlayer();
	}

	getAgents() {
		return this.agentManager.getAll();
	}

	getPriorAgents(agent) {
		return this.agentManager.getPrior(agent);
	}

	getLaterAgents(agent) {
		return this.agentManager.getLater(agent);
	}

	getBots() {
		return this.agentManager.getBots();
	}

	// POSITION
	getPosition(agent) {
		return this.positionManager.getPosition(agent.name);
	}

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

	samePosition(agent1, agent2) {
		return this.positionManager.samePosition(agent1, agent2);
	}

	// getters
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
		return this.cardManager.getMarketCard(this.agentManager.getPlayer().name);
	}

	// CARDS
	rerollCard(agent) {
		return this.cardManager.rerollCard(agent || this.agentManager.getPlayer() );
	}

	buyCard(agent) {
		return this.cardManager.buyCard(agent || this.agentManager.getPlayer() );
	}

	sellCard(index, location) {
		return this.cardManager.sellCard(this.agentManager.getPlayer(), index, location);
	}

	swapCard(index, location) {
		return this.cardManager.swapCard(this.agentManager.getPlayer(), index, location);
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
	levelUp(agent) {
		return this.agentManager.levelUp(agent || this.agentManager.getPlayer() );
	}

	boardUp(agent) {
		return this.agentManager.boardUp(agent || this.agentManager.getPlayer() );
	}

	// battle
	getBattleSummary() {
		return this.battleManager.summary();
	}

	battle() {
		this.battleManager.setup();
		this.battleManager.battleAll();
	}
}

export default GameManager;
