import Manager from "./Manager.js";

const PHASE_ONE = 1; // waiting for player position
const PHASE_TWO = 2; // waiting for next turn
class GameLoop extends Manager {
	constructor(gameManager) {
		super(gameManager);
		this.currentPhase = 0;
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
		console.log("PHASE 1");
		this.m.movePriorAgents();
		// move everyone
		
		// move user
		// management bots
		// fight
		// this.manager;
	}
	
	phaseTwo(selectedBox) {
		console.log("PHASE 2");
		this.m.move(selectedBox);
		this.m.moveLaterAgents();
		this.m.generateNewBorders();
		this.m.battle();
		// this.m.management();
	}
}

export default GameLoop;
