import Manager from "./Manager.js";
import { CONFIG } from "./utils/constants.js";

const PHASE_ONE = 1; // waiting for player position
const PHASE_TWO = 2; // waiting for next turn

/**
 * Manager that handles the Gameloop
 *
 * @class GameLoop
 * @extends {Manager}
 * @prop {Number} currentPhase The current phase we are in
 * @prop {Number} moneyPerTurn The amount of money each player get at each turn
 * @prop {Number} gridShrinkRate The number of turn before the grid shrinks
 */
class GameLoop extends Manager {
	constructor(gameManager) {
		super(gameManager);
		this.currentPhase = 0;
		this.moneyPerTUrn = CONFIG.MONEY_PER_TURN;
		
		this.turnCount = 0;
		this.gridShrinkRate = CONFIG.GRID_SHRINK_RATE;
	}

	/**
	 * Start the Ganeloop
	 *
	 * @memberof GameLoop
	 */
	start() {
		// management time
		this.currentPhase = 2;
	}

	/**
	 * Move to the next phase
	 *
	 * @param {{x: Number, y: Number}} selectedBox The selected position the player wants to move to
	 * @returns {Number} The current phase
	 * @memberof GameLoop
	 */
	next(selectedBox) {
		if (this.currentPhase === PHASE_ONE) { // waiting for position
			if (!selectedBox || !this.m.canPlayerMove(selectedBox.x, selectedBox.y) ) {
				return -1;
			}
			this.currentPhase = PHASE_TWO;
			this.phaseTwo(selectedBox);
		} else if (this.currentPhase === PHASE_TWO) { // waiting for next turn
			this.currentPhase = PHASE_ONE;
			this.phaseOne();
		}
		return this.currentPhase;
	}

	/**
	 * Execute the phase one logic
	 *
	 * @memberof GameLoop
	 */
	phaseOne() {
		this.m.movePriorAgents();
	}
	
	/**
	 * Execute the phase two logic.
	 * Only reduce the grid size after a specific number of turns
	 *
	 * @param {{x: Number, y: Number}} selectedBox The selected position the player wants to move to
	 * @memberof GameLoop
	 */
	phaseTwo(selectedBox) {
		this.m.movePlayer(selectedBox);
		this.m.moveLaterAgents();
		this.m.setLaterAgentsCache();
		
		++this.turnCount;
		if (this.turnCount === this.gridShrinkRate) {
			this.m.generateNewBorders();
		}
		this.turnCount %= this.gridShrinkRate;

		this.management();
		this.m.battle();
		this.m.agentManager.increaseMoneyForAllAgents(this.moneyPerTUrn);
	}

	/**
	 * Calls the management phase for each bot
	 *
	 * @memberof GameLoop
	 */
	management() {
		this.m.getBots().forEach(agent => agent.strategy.executeTurn(agent, this.m.agentManager, this.m.cardManager) );
	}
}

export default GameLoop;
