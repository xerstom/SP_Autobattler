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
 * Calculate the distance from x1 to x2
 *
 * @param {Number} x1
 * @param {Number} x2
 * @returns {Number} The distance from x1 to x2
 */
export function distance(a, b) {
	return a - b;
}

/**
 * Claculate the absolute distance from x1 to x2
 *
 * @param {Number} a
 * @param {Number} b
 * @returns {Number} The absolute distance from x1 to x2
 */
export function absDistance(a, b) {
	return Math.abs(distance(a, b) );
}

/**
 * Sleep for a number of ms.
 *
 * @export
 * @param {Number} ms
 * @returns {Promise} Resolve after the time to wait for
 */
export function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms) );
}
