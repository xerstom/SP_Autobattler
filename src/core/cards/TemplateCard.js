import { LEVELS } from "../utils/constants.js";
import { rand } from "../utils/utils.js";

/**
 *
 * @prop {Number} level The card level (how good / how rare)
 * @prop {Number} stats The card stats point (to split up between attack / life)
 * @prop {Number} attack The card attack value
 * @prop {Number} life The card life value
 * @prop {Number} adaptative The card adaptative stats to split up between attack/life at CombatCard creation
 * @prop {Number} price The card price based of its stats points
 * @class TemplateCard
 */
class TemplateCard {
	constructor(level) {
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
