import { rand } from "../utils/utils.js";

/**
 * @prop {String} name The card name
 * @prop {Number} level The card level
 * @prop {Number} baseadaptative Base adaptative stats at card creation
 * @prop {Number} adaptative Additional adaptative stats from "boosting"
 * @prop {Number} attack Attack value for this card
 * @prop {Number} life Life value for this card
 * @prop {Number} price Prive for this card
 * @class GameCard
 */
class GameCard {
	constructor(name, level, attack, life, adaptative, price) {
		this.name = name;
		this.level = level;
		this.baseadaptative = adaptative;
		this.adaptative = 0;
		const attackAdaptative = rand(0, adaptative);
		
		this.attack = attack + attackAdaptative;
		this.life = life + (adaptative - attackAdaptative);
		this.price = price;
	}
}

export default GameCard;
