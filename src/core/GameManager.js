import AgentManager from "./agents/AgentManager.js";
import BattleManager from "./battles/BattleManager.js";
import CardManager from "./cards/CardManager.js";
import GameLoop from "./GameLoop.js";
import MapManager from "./map/MapManager.js";
import PositionManager from "./positions/PositionManager.js";

/**
 *
 *
 * @prop {AgentManger} agentManager the agent manager
 * @prop {PositionManager} positionManager the position manager
 * @prop {CardManager} cardManager the card manager
 * @prop {MapManager} mapManager the map manager
 * @prop {BattleManager} battleManager the battle manager
 * @prop {GameLoop} gameLoop the game loop
 * @class GameManager
 */
class GameManager {
	/**
	 * Constructor of game manager that instanciates all the sub managers
	 * @memberof GameManager
	 */
	constructor() {
		this.agentManager = new AgentManager(this);
		this.positionManager = new PositionManager(this);
		this.cardManager = new CardManager(this);
		this.mapManager = new MapManager(this);
		this.battleManager = new BattleManager(this);
		this.gameLoop = new GameLoop(this);

		this.laterAgentsCache = [];
	}

	// lifecycle
	/**
	 *  Calls all the sub managers init
	 *
	 * @memberof GameManager
	 */
	init() {
		this.agentManager.init();
		this.cardManager.init();
		this.mapManager.init();
		this.positionManager.init();
		this.battleManager.init();
	}

	// GAMELOOP
	
	/**
	 * Starts the game loop
	 *
	 * @memberof GameManager
	 */
	start() {
		this.gameLoop.start();
	}

	/**
	 * Starts the next phase
	 *
	 * @param {Position} [selectedBox=null]
	 * @return {Number} the current phase
	 * @memberof GameManager
	 */
	next(selectedBox = null) {
		return this.gameLoop.next(selectedBox);
	}

	// AGENTS

	/**
	 * Get an agent by his name
	 *
	 * @param {String} name the name of the agent or null
	 * @return {Agent} the found agent or the player if name is null
	 * @memberof GameManager
	 */
	getAgent(name) {
		if (!name) {
			return this.agentManager.getPlayer();
		}
		return this.agentManager.getByName(name) || this.agentManager.getPlayer();
	}

	/**
	 * get the player
	 *
	 * @return {Player}
	 * @memberof GameManager
	 */
	getPlayer() {
		return this.agentManager.getPlayer();
	}

	/**
	 * returns all the agents
	 *
	 * @return {Agent[]} all the agents
	 * @memberof GameManager
	 */
	getAgents() {
		return this.agentManager.getAll();
	}

	/**
	 * returns all the agents playing before the given agent
	 *
	 * @param {Agent} agent the given agent
	 * @return {Agent[]} the prior agents
	 * @memberof GameManager
	 */
	getPriorAgents(agent) {
		return this.agentManager.getPrior(agent || this.agentManager.getPlayer() );
	}

	/**
	 * returns the later agents cache
	 *
	 * @return {Agent[]} the cached later agents
	 * @memberof GameManager
	 */
	getLaterAgentsCache() {
		return this.laterAgentsCache;
	}

	/**
	 * Sets the later agent cache based on a given agent
	 *
	 * @param {Agent} agent the given agent
	 * @memberof GameManager
	 */
	setLaterAgentsCache(agent) {
		this.laterAgentsCache = this.agentManager.getLater(agent || this.agentManager.getPlayer() );
	}

	/**
	 * get all the agents playing after the given agent
	 *
	 * @param {Agent} agent the given agent
	 * @return {Agent[]} the later agent
	 * @memberof GameManager
	 */
	getLaterAgents(agent) {
		return this.agentManager.getLater(agent || this.agentManager.getPlayer() );
	}

	/**
	 * returns the list of bots
	 *
	 * @return {Bot[]} the list of boots
	 * @memberof GameManager
	 */
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
		this.positionManager.moveBots(this.agentManager.getPrior(this.agentManager.getPlayer() ) );
	}

	moveLaterAgents() {
		this.positionManager.moveBots(this.agentManager.getLater(this.agentManager.getPlayer() ).slice(1) );
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
