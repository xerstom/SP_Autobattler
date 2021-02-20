class Manager {
	constructor(gameManager) {
		this._manager = gameManager;
	}

	get manager() {
		return this._manager;
	}

	get m() {
		return this._manager;
	}

	init() {
		throw new Error("Not Implemented.");
	}
}

export default Manager;
