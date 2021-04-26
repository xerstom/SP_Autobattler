/**
 * Card used in battles. Specifically instantiated and destroyed in battles to keep track of current card life and attack
 *
 * @class FightCard
 * @prop {String} name The card name
 * @prop {String} displayName The card display name
 * @prop {Number} attack The card attack
 * @prop {Number} life The card life
 */
class FightCard {
	/**
	 * Creates an instance of FightCard.
	 * @param {String} name
	 * @param {String} displayName
	 * @param {Number} attack
	 * @param {Number} life
	 * @memberof FightCard
	 */
	constructor(name, displayName, attack, life) {
		this.name = name;
		this.displayName = displayName;
		this.attack = attack;
		this.life = life;
	}
}

export default FightCard;
