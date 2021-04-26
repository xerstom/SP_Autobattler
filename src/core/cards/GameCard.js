import { rand } from "../utils/utils.js";

/**
 * @prop {String} name The card name
 * @prop {String} displayName The card display
 * @prop {String} displayImage The card display image
 * @prop {Number} level The card level
 * @prop {Number} baseadaptative Base adaptative stats at card creation
 * @prop {Number} adaptative Additional adaptative stats from "boosting"
 * @prop {Number} attack Attack value for this card
 * @prop {Number} life Life value for this card
 * @prop {Number} price Prive for this card
 * @class GameCard
 */
class GameCard {
	/**
	 * Creates an instance of GameCard.
	 * @param {String} name
	 * @param {Number} level
	 * @param {NUmber} attack
	 * @param {Number} life
	 * @param {Number} adaptative
	 * @param {Number} price
	 * @param {String} displayName
	 * @param {String} displayImage
	 * @memberof GameCard
	 */
	constructor(name, level, attack, life, adaptative, price, displayName, displayImage) {
		this.displayName = displayName;
		this.displayImage = displayImage;
		this.name = name;
		this.level = level;
		this.baseadaptative = adaptative;
		this.adaptative = 0;
		const attackAdaptative = rand(0, adaptative);
		
		this.attack = attack + attackAdaptative;
		this.life = life + (adaptative - attackAdaptative);
		this.price = price;
	}

	/**
	 * The total stats for the card
	 *
	 * @readonly
	 * @returns {Number}
	 * @memberof GameCard
	 */
	 get stats() {
		return this.life + this.attack;
	}

	/**
	 * Buff the card stats by randomly splitting between attack and life a number given in parameters
	 *
	 * @param {Number} value
	 * @memberof GameCard
	 */
	buff(value) {
		this.adaptative += value;
		const attack = rand(0, value);
		this.attack += attack;
		const life = value - attack;
		this.life += life;
	}
}

export default GameCard;
