import Manager from "../Manager.js";
import { CONFIG } from "../utils/constants.js";
import { rand } from "../utils/utils.js";

function generateNextBorders(border) {
	const nextBorders = { ...border };
	const xOry = rand(0, 1);
	const oneOrTwo = rand(1, 2);
	
	const toChange = `${xOry === 0 ? "x" : "y"}${oneOrTwo}`;

	oneOrTwo === 1 ? nextBorders[toChange]++ : nextBorders[toChange]--;
	return nextBorders;
}

/**
 * @typedef {{x1: Number,x2:Number, y1: Number,y2: Number}} Position
 */

/**
 * Manager that handles the map
 *
 * @class MapManager
 * @prop {Number} gridSize the size of the grid
 * @prop {Border} borders the curent borders
 * @prop {Border} nextBorders the next borders
 * @extends {Manager}
 */
class MapManager extends Manager {
	/**
	 * Constructor for the MapManager class
	 * @param {GameManager} gameManager the game manager
	 * @memberof MapManager
	 */
	constructor(gameManager) {
		super(gameManager);

		this.gridSize = CONFIG.GRID_SIZE;
		
		this.borders = { x1: 0, x2: this.gridSize - 1, y1: 0, y2: this.gridSize - 1 };
		this.nextBorders = generateNextBorders(this.borders);
	}


	init() {
		//
	}

	/**
	 * Returns the size of the grid
	 *
	 * @return {Number}  the size of the grid
	 * @memberof MapManager
	 */
	getGridSize() {
		return this.gridSize;
	}

	/**
	 * Returns the borders
	 *
	 * @return {Border} borders the curent borders
	 * @memberof MapManager
	 */
	getBorders() {
		return this.borders;
	}

	/**
	 *Returns the next borders
	 *
	 * @return {Border} nextBorders the next borders
	 * @memberof MapManager
	 */
	getNextBorders() {
		return this.nextBorders;
	}

	/**
	 * Function that change the border to the next and generate a new next border
	 *
	 * @memberof MapManager
	 */
	generateNewBorders() {
		this.borders = this.nextBorders;
		this.nextBorders = generateNextBorders(this.borders);
	}

	/**
	 * Return a boolean to tell if the coordinates are outside of a border
	 *
	 * @param {*} x x coordinate
	 * @param {*} y y coordinate
	 * @param {*} borders the border
	 * @return {Boolean} tells if the coordinates are outside of a border
	 * @memberof MapManager
	 */
	isOutsideBorders(x, y, borders) {
		return x < borders.x1 || x > borders.x2 || y < borders.y1 || y > borders.y2;
	}

	/**
	 * Returns a boolean to tell if the coordinates is outside the current border
	 *
	 * @param {*} x x coordinate
	 * @param {*} y y coordinate
	 * @return {Boolean} tells if the coordinates are outside of the current border
	 * @memberof MapManager
	 */
	isDisabled(x, y) {
		return this.isOutsideBorders(x, y, this.borders);
	}

	/**
	 * Returns a boolean to tell if the coordinates is outside the next border
	 *
	 * @param {*} x x coordinate
	 * @param {*} y y coordinate
	 * @return {Boolean} tells if the coordinates are outside of the next border
	 * @memberof MapManager
	 */
	willBeDisabled(x, y) {
		return this.isOutsideBorders(x, y, this.nextBorders);
	}

	/**
	 * Returns the list of agents that will be valid next turn
	 *
	 * @param {Agent[]} agents the array of agents to check
	 * @return {Agent[]} the filtered agents
	 * @memberof MapManager
	 */
	validPositions(agents) {
		return agents.filter(a => !this.willBeDisabled(a.x, a.y) );
	}
}

export default MapManager;
