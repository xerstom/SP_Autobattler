/**
 * Base Manager class
 *
 * @class Manager
 */
class Manager {
	/**
	 * Creates an instance of Manager.
	 * @param {GameManager} gameManager
	 * @memberof Manager
	 */
	constructor(gameManager) {
		this._manager = gameManager;
	}

	/**
	 * The gamemanager
	 *
	 * @readonly
	 * @return {GameManager}
	 * @memberof Manager
	 */
	get manager() {
		return this._manager;
	}

	/**
	 * The gamemanager
	 *
	 * @readonly
	 * @return {GameManager}
	 * @memberof Manager
	 */
	get m() {
		return this._manager;
	}

	init() {
		throw new Error("Not Implemented.");
	}
}

export default Manager;
