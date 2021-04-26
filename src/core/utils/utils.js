/**
 * Randomise an integer between a min and a max.
 *
 * @param {Number} min The minimum
 * @param {Number} max The maximum
 * @returns {Number} The randomised number
 */
export function rand(min, max) {
	return Math.floor( (Math.random() * (max - min + 1) ) + min);
}

/**
 *
 *
 * @param {Number} a coordinate
 * @param {Number} b coordinate
 * @returns {Number} The distance from a to b
 */
export function distance(a, b) {
	return a - b;
}

/**
 * @param {Number} a coordinate
 * @param {Number} b coordinate
 *@returns {Number} The absolute distance from x1 to x2
 */
export function absDistance(a, b) {
	return Math.abs(distance(a, b) );
}

/**
 * Sleep for a number of ms.
 * @param {Number} ms
 * @returns {Promise} Resolve after the time to wait for
 */
export function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms) );
}
