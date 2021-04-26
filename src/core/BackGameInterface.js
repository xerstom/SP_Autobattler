import GameManager from "./GameManager.js";


/**
 * @typedef {{
 * name: String,
 * color: String,
 * x: Number,
 * y: Number,
 * }} AgentPosition
 *
 * @typedef {{
 * name: String,
 * color: String,
 * life: Number,
 * level: Number,
 * boardSize: Number,
 * money: Number,
 * boardUpPrice: Number,
 * levelUpPrice: Number,
 * }} AgentProfile
 *
 * @typedef {{
 * name: String,
 * bench: Array<GameCard>,
 * board: Array<GameCard>,
 * }} AgentBoard
 */

/**
 * Handles the communication with the frontend
 *
 * @class GameManager
 * @prop {GameManager} _gameManager
 */
class BackGameInterface {
	constructor() {
		this._gameManager = new GameManager();
		this._gameManager.init();
	}

	/**
	 * Get the gameManager
	 *
	 * @readonly
	 * @returns {GameManager}
	 * @memberof BackGameInterface
	 */
	get gm() {
		return this._gameManager;
	}

	/**
	 * Start the App
	 *
	 * @memberof BackGameInterface
	 */
	start() {
		this.gm.start();
	}

	// GAMELOOP
	/**
	 * Move to the next step
	 *
	 * @param {{x: Number, y: Number}} selectedBox
	 * @returns {String} The current phase
	 * @memberof BackGameInterface
	 */
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

	/**
	 * Get all agents position
	 *
	 * @returns {Array<AgentPosition>}
	 * @memberof BackGameInterface
	 */
	getAgentsPosition() {
		return this.gm.getAliveAgents().map(e => this._formatPosition(e) );
	}

	/**
	 * Get all agents position prior to the player
	 *
	 * @returns {Array<AgentPosition>}
	 * @memberof BackGameInterface
	 */
	getPriorAgentsPosition() {
		return this.gm.getPriorAgents().map(e => this._formatPosition(e) );
	}

	/**
	 * Get all agents position later to the player
	 *
	 * @returns {Array<AgentPosition>}
	 * @memberof BackGameInterface
	 */
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

	/**
	 * Get all agents profiles
	 *
	 * @returns {Array<AgentProfile>}
	 * @memberof BackGameInterface
	 */
	getAgents() {
		return this.gm.getAgents().map(e => this._formatAgent(e) );
	}

	/**
	* Get an agent profile
	*
	* @param {String} name
	* @returns {AgentProfile}
	* @memberof BackGameInterface
	*/
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

	/**
	 * Get the board for an agent
	 *
	 * @param {String} name
	 * @returns {AgentBoard}
	 * @memberof BackGameInterface
	 */
	getBoard(name) {
		return this._formatBoard(this.gm.getAgent(name) );
	}

	// GETTERS
	/**
	 * Get the grid size
	 *
	 * @returns {Number}
	 * @memberof BackGameInterface
	 */
	getGridSize() {
		return this.gm.getGridSize();
	}

	/**
	 * Get the market card
	 *
	 * @returns {GameCard}
	 * @memberof BackGameInterface
	 */
	getMarketCard() {
		return this.gm.getMarketCard();
	}

	// PLAYER INTERACTION

	/**
	 * Whether the player can move at the specific position
	 *
	 * @param {Number} x
	 * @param {Number} y
	 * @returns {Boolean}
	 * @memberof BackGameInterface
	 */
	canPlayerMove(x, y) {
		return this.gm.canPlayerMove(x, y);
	}

	/**
	 * Increase the player level if possible
	 *
	 * @returns {Boolean}
	 * @memberof BackGameInterface
	 */
	levelUp() {
		return this.gm.levelUp();
	}

	/**
	 * Increase the the player board size if possible
	 *
	 * @returns {Boolean}
	 * @memberof BackGameInterface
	 */
	boardUp() {
		return this.gm.boardUp();
	}

	/**
	 * Reroll the player market card if possible
	 *
	 * @returns {Boolean}
	 * @memberof BackGameInterface
	 */
	rerollCard() {
		return this.gm.rerollCard();
	}

	/**
	 * Buy the player market card if possible
	 *
	 * @returns {Array<[Boolean, String]>} Whether it worked and where the card was added
	 * @memberof BackGameInterface
	 */
	buyCard() {
		return this.gm.buyCard();
	}

	/**
	 * Sell one player card
	 *
	 * @param {Number} index
	 * @param {String} location
	 * @returns {Boolean}
	 * @memberof BackGameInterface
	 */
	sellCard(index, location) {
		return this.gm.sellCard(index, location);
	}

	/**
	 * Swap one player card from one location to the other
	 *
	 * @param {Number} index
	 * @param {String} location
	 * @returns {Boolean}
	 * @memberof BackGameInterface
	 */
	swapCard(index, location) {
		return this.gm.swapCard(index, location);
	}

	// MAP
	/**
	 * Whether the location is disabled
	 *
	 * @param {Number} x
	 * @param {Number} y
	 * @returns {Boolean}
	 * @memberof BackGameInterface
	 */
	isDisabled(x, y) {
		return this.gm.isDisabled(x, y);
	}

	/**
	 * Whether the location will be disabled the next turn
	 *
	 * @param {Number} x
	 * @param {Number} y
	 * @returns {Boolean}
	 * @memberof BackGameInterface
	 */
	willBeDisabled(x, y) {
		return this.gm.willBeDisabled(x, y);
	}

	// BATTLE
	/**
	 * Get the battle summary
	 *
	 * @returns {Array<State>}
	 * @memberof BackGameInterface
	 */
	getBattleSummary() {
		return this.gm.getBattleSummary();
	}
}

export default BackGameInterface;
