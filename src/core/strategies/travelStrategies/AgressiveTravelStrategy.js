import TravelStrategy from "./TravelStrategy.js";



export default class AgressiveTravelStrategy extends TravelStrategy {
	static getPositionToCenter(curPos, mapManager) {
		const center = { x: mapManager.getGridSize() / 2, y: mapManager.getGridSize() };
		let xMove = curPos.x < center.x ? curPos.x + (mapManager.getMovementPoints() / 2) : curPos.x - (mapManager.getMovementPoints() / 2);
		this.readjustPosition(curPos.x, center.x, xMove);

		// Mp left to move
		let mpLeft = mapManager.getMovementPoints() - xMove;

		let yMove = curPos.y < center.y ? curPos.y + mpLeft : curPos.x - mpLeft;

		this.readjustPosition(curPos.y, center.y, yMove);

		mpLeft = mpLeft - yMove >= 0 ?? 0;

		// While we have mp to use
		while (mpLeft > 0) {
			// if we are not at the x center
			if (xMove + curPos.x !== center.x) {
				xMove > 0 ? xMove++ : xMove--;
				mpLeft--;
			} else if (yMove + curPos.y !== center.y) { // if we are not at the x center
				yMove > 0 ? yMove++ : yMove--;
				mpLeft--;
			} else { // We are at the exact center
				break;
			}
		}

		return { x: curPos.x + xMove, y: curPos.y + yMove };
	}

	static reAdjustPosition(pos, center, Move) {
		if (pos < center) {
			// If we are left from the center
			if (Move > center) { // If we went beyond center
				Move = center - pos;
			}
		} else if (Move < center) { // If we are right from the center
			// If we went beyond center
			Move = pos - center;
		}
	}
	
	static generatePos(agent, mapManager, positionManager) {
		const inRange = positionManager.getAgentsInRange(agent, mapManager, positionManager);
		const inRangeAndValid = mapManager.validPositions(inRange);

		if (inRangeAndValid.lenght > 0) {
			if (inRangeAndValid.lenght > 1) {
				const listOfHps = inRangeAndValid.map(a => a.life);
				const minIndex = inRangeAndValid.indexOf(Math.min(...listOfHps) );
				return inRangeAndValid[minIndex.position];
			}
			return inRange[0].position;
		}
		return this.getPositionToCenter(agent.pos, mapManager);
	}
}
