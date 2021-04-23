import BackGameInterface from "../core/BackGameInterface.js";

// phase 1 => waiting for position
// phase 2 => waiting for next turn
class FrontGameInterface {
	constructor() {
		this._backGameInterface = new BackGameInterface();
		
		this.currentPhase = 2; // waiting for next turn
		this.agentsPosition = [];
		this.updatedAgentsPosition = [];
	}

	get bgi() {
		return this._backGameInterface;
	}

	// gameloop
	start() {
		this.bgi.start();
		this.agentsPosition = this.bgi.getAgentsPosition();
	}

	next(selectedBox = null) {
		if (this.currentPhase === 1 && !selectedBox) { // phase = 1 => waiting for position => need selected position
			return -1;
		}
		this.agentsPosition = this.bgi.getAgentsPosition();

		const phase = this.bgi.next(selectedBox);
		this.currentPhase = phase;
		return phase;
	}
	
	// position
	getPriorAgentsPosition() {
		this.updatedAgentsPosition = this.bgi.getPriorAgentsPosition();
		return this.updatedAgentsPosition.length;
	}

	getLaterAgentsPosition() {
		this.updatedAgentsPosition = this.bgi.getLaterAgentsPosition();
		return this.updatedAgentsPosition.length;
	}
	
	getAgentsPosition() {
		return [...this.agentsPosition];
	}

	getUpdatedAgentsPosition() {
		if (this.updatedAgentsPosition.length > 0) {
			const uAgent = this.updatedAgentsPosition.shift();
			const index = this.agentsPosition.findIndex(a => a.name === uAgent.name);
			this.agentsPosition.splice(index, 1, uAgent);
		}
		// return le cache
		return this.getAgentsPosition();
	}

	// PROFILE
	getAgentsProfile() {
		return [...this.bgi.getAgents()];
	}

	getProfile(agent) {
		return { ...this.bgi.getAgent(agent) };
	}

	getBoard(agent) {
		return [...this.bgi.getBoard(agent).board];
	}

	getBench(agent) {
		return [...this.bgi.getBoard(agent).bench];
	}

	getMarketCard() {
		return { ...this.bgi.getMarketCard() };
	}
	
	// PLAYER INTERACTIONS
	move(position) {
		this.bgi.move(position);
	}

	boardUp() {
		return this.bgi.boardUp();
	}

	levelUp() {
		return this.bgi.levelUp();
	}
	
	buyCard() {
		return this.bgi.buyCard();
	}

	sellCard(index, location) {
		return this.bgi.sellCard(index, location);
	}

	swapCard(index, location) {
		return this.bgi.swapCard(index, location);
	}
	
	rerollCard() {
		return this.bgi.rerollCard();
	}

	// MAP
	getGridSize() {
		return this.bgi.getGridSize();
	}

	isSelectable(x, y) {
		return this.bgi.canPlayerMove(x, y) && !this.isDisabled(x, y) && !this.willBeDisabled(x, y);
	}

	isDisabled(x, y) {
		return this.bgi.isDisabled(x, y);
	}

	willBeDisabled(x, y) {
		return this.bgi.willBeDisabled(x, y);
	}

	// battle
	getBattleSummary() {
		return this.bgi.getBattleSummary().map(e => e.summary);
	}

	getLastCombat(agent) {
		const sum = this.bgi.getBattleSummary();
		const filtered = sum.filter(e => e.agent1 === agent || e.agent2 === agent);
		return filtered.length > 0 ? filtered.pop() : null;
	}
}

export default FrontGameInterface;
