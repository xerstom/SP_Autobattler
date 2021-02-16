import { rand } from "../utils/utils.js";

/**
 * @prop {Number} baseAdptative Base adaptative stats at card creation
 * @prop {Number} adaptative Additional adaptative stats from "boosting"
 * @prop {Number} attack Attack value for this card
 * @prop {Number} life Life value for this card
 * @prop {Number} price Prive for this card
 * @class GameCard
 */
class GameCard {
	constructor(attack, life, adptative, price) {
		this.baseAdptative = adptative;
		this.adptative = 0;
		const attackAdaptative = rand(0, adptative);
		
		this.attack = attack + attackAdaptative;
		this.life = life + (adptative - attackAdaptative);
		this.price = price;
	}
}

export default GameCard;
