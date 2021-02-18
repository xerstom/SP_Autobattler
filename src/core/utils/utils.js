export function rand(min, max) {
	return Math.floor( (Math.random() * (max - min + 1) ) + min);
}

export function isDisabled(x, y, borders) {
	return x < borders.x1 || x > borders.x2 || y < borders.y1 || y > borders.y2;
}

export function canMove(x, y, playerPositon, mouvementPoints) {
	return Math.abs(x - playerPositon.x) + Math.abs(y - playerPositon.y) <= mouvementPoints;
}
