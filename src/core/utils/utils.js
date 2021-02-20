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
 * @param {Number} x1
 * @param {Number} x2
 * @returns {Number} The distance from x1 to x2
 */
export function distance(x1, x2) {
	return Math.abs( (x1 - x2) );
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
