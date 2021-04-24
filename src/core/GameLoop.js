import Manager from "./Manager.js";
import { CONFIG } from "./utils/constants.js";

const PHASE_ONE = 1; // waiting for player position
const PHASE_TWO = 2; // waiting for next turn
class GameLoop extends Manager {
	constructor(gameManager) {
		super(gameManager);
		this.currentPhase = 0;
		this.moneyPerTUrn = CONFIG.MONEY_PER_TURN;
	}

	start() {
		// management time
		this.currentPhase = 2;
	}

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

	phaseOne() {
		this.m.movePriorAgents();
	}
	
	phaseTwo(selectedBox) {
		this.m.movePlayer(selectedBox);
		this.m.moveLaterAgents();
		this.m.setLaterAgentsCache();
		this.m.generateNewBorders();
		this.management();
		this.m.battle();
		this.m.agentManager.increaseMoneyForAllAgents(this.moneyPerTUrn);
	}

	management() {
		this.m.getBots().forEach(agent => agent.strategy.executeTurn(agent, this.m.agentManager, this.m.cardManager) );
	}
}

export default GameLoop;
