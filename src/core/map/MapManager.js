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

class MapManager extends Manager {
	constructor(gameManager) {
		super(gameManager);

		this.gridSize = CONFIG.GRID_SIZE;
		
		this.borders = { x1: 0, x2: this.gridSize - 1, y1: 0, y2: this.gridSize - 1 };
		this.nextBorders = generateNextBorders(this.borders);
		
		this.movementPoints = CONFIG.MOVEMENT_POINTS;
	}

	init() {
		//
	}

	getGridSize() {
		return this.gridSize;
	}

	getBorders() {
		return this.borders;
	}

	getNextBorders() {
		return this.nextBorders;
	}

	getMovementPoints() {
		return this.movementPoints;
	}

	generateNewBorders() {
		this.borders = this.nextBorders;
		this.nextBorders = generateNextBorders(this.borders);
	}

	isOutsideBorders(x, y, borders) {
		return x < borders.x1 || x > borders.x2 || y < borders.y1 || y > borders.y2;
	}

	isDisabled(x, y) {
		return this.isOutsideBorders(x, y, this.borders);
	}

	willBeDisabled(x, y) {
		return this.isOutsideBorders(x, y, this.nextBorders);
	}

	validPositions(agents) {
		return agents.filter(a => !this.willBeDisabled(a.x, a.y) );
	}
}

export default MapManager;
