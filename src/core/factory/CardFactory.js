import FightCard from "../cards/FightCard.js";
import GameCard from "../cards/GameCard.js";
import TemplateCard from "../cards/TemplateCard.js";
import { displays, LEVEL_INCR, LEVEL_PROPORTION } from "../utils/constants.js";
import { rand } from "../utils/utils.js";

/**
 * Create a template card
 *
 * @param {String} name The card name
 * @param {Number} level The card level
 * @param {String} display The card desplay name
 * @returns {TemplateCard}
 */
function createTemplateCard(name, level, display) {
	return new TemplateCard(name, level, display);
}

/**
 * Generate all template cards
 *
 * @export
 * @param {Number} x The number of template cards to create
 * @returns {Array<TemplateCard>}
 */
export function generateTemplateCards(x) {
	const cards = [];
	const displaysIndexes = [...Array(x).keys()];
	let incr = 0;
	for (let j = 0; j < LEVEL_PROPORTION.length; ++j) {
		const nCard = Math.floor(x * LEVEL_PROPORTION[j] );
		for (let i = 0; i < nCard; ++i, ++incr) {
			const r = rand(0, displaysIndexes.length - 1);
			cards.push(createTemplateCard(incr, j, displays[displaysIndexes[r]] ) );
			displaysIndexes.splice(r, 1);
		}
	}
	return cards;
}

/**
 * Create a game card from a template card
 *
 * @param {TemplateCard} template
 * @returns {GameCard}
 */
function createGameCard(template) {
	return new GameCard(template.name, template.level, template.attack, template.life, template.adaptative, template.price, template.displayName, template.displayImage);
}

/**
 * Generate a game card from templates card
 *
 * @export
 * @param {Array<TemplateCard>} templates
 * @param {Number} level The maximum level of the game card created
 * @returns {GameCard}
 */
export function generateGameCard(templates, level) {
	const max = Math.floor(templates.length * LEVEL_INCR[level - 1] );
	const index = rand(0, max - 1);
	return createGameCard(templates[index] );
}

/**
 * Generate all game cards
 *
 * @export
 * @param {Number} x The number of game card to create
 * @param {Array<TemplateCard} templates
 * @returns {Array<GameCard>}
 */
export function generateGameCards(x, templates) {
	const cards = [];
	for (let i = 0; i < x; ++i) {
		cards.push(generateGameCard(templates, 1) );
	}
	return cards;
}

/**
 * Create a FightCard from a GameCard
 *
 * @param {GameCard} gameCard
 * @returns {FightCard}
 */
function createFightCard(gameCard) {
	return new FightCard(gameCard.name, gameCard.displayName, gameCard.attack, gameCard.life);
}

/**
 * Generate all fight cards from a GameCard board
 *
 * @export
 * @param {Array<GameCard>} board
 * @returns {Array<FightCard>}
 */
export function generateFightCards(board) {
	const cards = [];
	for (const card of board) {
		cards.push(createFightCard(card) );
	}
	return cards;
}


