import { LEVELS } from "../utils/constants.js";
import { rand } from "../utils/utils.js";

/**
 *
 * @prop {String} name The card name
 * @prop {String} displayName The card display name
 * @prop {String} displayImage The card display image
 * @prop {Number} stats The card stats point (to split up between attack / life)
 * @prop {Number} level The card level (how good / how rare)
 * @prop {Number} attack The card attack value
 * @prop {Number} life The card life value
 * @prop {Number} adaptative The card adaptative stats to split up between attack/life at GameCard creation
 * @prop {Number} price The card price based of its stats points
 * @class TemplateCard
 */
class TemplateCard {
	/**
	 * Creates an instance of TemplateCard.
	 * @param {String} name The card name
	 * @param {Number} level The card level
	 * @param {String} display The card display name
	 * @memberof TemplateCard
	 */
	constructor(name, level, display) {
		this.displayName = display?.name ?? "name";
		this.displayImage = display?.img ?? "archere.jpg";
		this.name = String(name);
		const l = LEVELS[level];
		this.level = level + 1;
		this.stats = rand(l.minStat, l.maxStat);

		this.attack = rand(0, this.stats - 1);
		this.life = this.stats - this.attack;
		this.adaptative = rand(l.minAdaptative, l.maxAdaptative);
		
		this.price = this.stats;
	}
}

export default TemplateCard;
