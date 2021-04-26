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
	/**
	 * Get agent position
	 *
	 * @param {Agent} agent the agent
	 * @return {Position} the position of the given agent
	 * @memberof GameManager
	 */
	getPosition(agent) {
		return this.positionManager.getPosition(agent.name);
	}

	/**
	 * Move the position of the player
	 *
	 * @param {Position} position
	 * @memberof GameManager
	 */
	movePlayer(position) {
		this.positionManager.move(this.agentManager.getPlayer(), position);
	}

	/**
	 * Move all the agents before the player
	 *
	 * @memberof GameManager
	 */
	movePriorAgents() {
		this.positionManager.moveBots(this.agentManager.getPrior(this.agentManager.getPlayer() ) );
	}

	/**
	 * Move all the agents after the player
	 *
	 * @memberof GameManager
	 */
	moveLaterAgents() {
		this.positionManager.moveBots(this.agentManager.getLater(this.agentManager.getPlayer() ).slice(1) );
	}

	/**
	 * returns if the player can move
	 *
	 * @param {*} x coordinate
	 * @param {*} y coordinate
	 * @return {Boolean} if the player can move
	 * @memberof GameManager
	 */
	canPlayerMove(x, y) {
		return this.positionManager.canMove(this.agentManager.getPlayer().name, x, y);
	}

	/**
	 * Return if the two agents are on the same position
	 *
	 * @param {*} agent1 first agent
	 * @param {*} agent2 second agent
	 * @return {Boolean} if the two agents are on the same position
	 * @memberof GameManager
	 */
	samePosition(agent1, agent2) {
		return this.positionManager.samePosition(agent1, agent2);
	}

	// getters
	/**
	 * returns the maximum movement points of the agents
	 *
	 * @return {Number} maximum movement points of the agents
	 * @memberof GameManager
	 */
	getMovementPoints() {
		return this.positionManager.getMovementPoints();
	}

	/**
	 * returns the next borders of the grid
	 *
	 * @return {Border} the next borders of the gird
	 * @memberof GameManager
	 */
	getNextBorders() {
		return this.mapManager.getNextBorders();
	}

	/**
	 * returns the grid size
	 *
	 * @return {Number} size of the grid
	 * @memberof GameManager
	 */
	getGridSize() {
		return this.mapManager.getGridSize();
	}

	/**
	 * returns the card in the market
	 *
	 * @return {Card} the cord in the market
	 * @memberof GameManager
	 */
	getMarketCard() {
		return this.cardManager.getMarketCard(this.agentManager.getPlayer().name);
	}

	// CARDS
	/**
	 * rerolls the card in the market
	 *
	 * @param {Agent} agent the agent whose cards needs to be rerolled
	 * @return {void}
	 * @memberof GameManager
	 */
	rerollCard(agent) {
		return this.cardManager.rerollCard(agent || this.agentManager.getPlayer() );
	}

	/**
	 * buys the market card for the given agent
	 *
	 * @param {Agent} agent
	 * @return {Array<[Boolean, String]>}
	 * @memberof GameManager
	 */
	buyCard(agent) {
		return this.cardManager.buyCard(agent || this.agentManager.getPlayer() );
	}

	/**
	 * Sells the card of the player
	 *
	 * @param {Number} index the index of the card to sell
	 * @param {String} location where the card to delete is
	 * @return {Boolean} if the card was deleted
	 * @memberof GameManager
	 */
	sellCard(index, location) {
		return this.cardManager.sellCard(this.agentManager.getPlayer(), index, location);
	}

	/**
	 * Swaps a card to bench or board
	 *
	 * @param {Number} index the index of the card to sell
	 * @param {String} location where the card to delete is
	 * @return {Boolean} if the card was succesfully swapped
	 * @memberof GameManager
	 */
	swapCard(index, location) {
		return this.cardManager.swapCard(this.agentManager.getPlayer(), index, location);
	}

	// MAP

	/**
	 * Returns if the position is disabled
	 *
	 * @param {*} x coordinate
	 * @param {*} y coordinate
	 * @return {Boolean} if the position is disabled
	 * @memberof GameManager
	 */
	isDisabled(x, y) {
		return this.mapManager.isDisabled(x, y);
	}

	/**
	 * Returns if the position will be disabled
	 *
	 * @param {*} x coordinate
	 * @param {*} y coordinate
	 * @return {Boolean} if the position will be disabled
	 * @memberof GameManager
	 */
	willBeDisabled(x, y) {
		return this.mapManager.willBeDisabled(x, y);
	}

	/**
	 * generates new borders
	 *
	 * @memberof GameManager
	 */
	generateNewBorders() {
		this.mapManager.generateNewBorders();
	}

	// Profile
	/**
	 * level up an agent if he has enought money
	 *
	 * @param {Agent} agent the agent to level up
	 * @return {Boolean} if the agent was leveled up
	 * @memberof GameManager
	 */
	levelUp(agent) {
		return this.agentManager.levelUp(agent || this.agentManager.getPlayer() );
	}

	/**
	 * increased the board size of an agent if he has enought money
	 *
	 * @param {Agent} agent the agent to level up
	 * @return {Boolean} if the agent increased his board size
	 * @memberof GameManager
	 */
	boardUp(agent) {
		return this.agentManager.boardUp(agent || this.agentManager.getPlayer() );
	}

	// battle
	/**
	 * Returns the summary of the battles
	 *
	 * @return {State[]}
	 * @memberof GameManager
	 */
	getBattleSummary() {
		return this.battleManager.summary();
	}

	/**
	 * launch fighting step
	 *
	 * @memberof GameManager
	 */
	battle() {
		this.battleManager.setup();
		this.battleManager.battleAll();
	}
}

export default GameManager;
