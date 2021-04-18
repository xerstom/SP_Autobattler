import Manager from "./Manager.js";

class GameLoop extends Manager {
	run() {
	}

	phaseOne() {
		this.m.movePriorPlayer();
		// move everyone

		// move user
		// management bots
		// fight
		// this.manager;
	}

	phaseTwo() {
		this.m.moveLaterPlayer();
		this.m.battle();
		this.m.management();
	}
}

export default GameLoop;

// TODO

// ajouter le bouton
// double while
