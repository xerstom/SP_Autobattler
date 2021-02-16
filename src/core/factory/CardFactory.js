import GameCard from "../cards/GameCard.js";
import TemplateCard from "../cards/TemplateCard.js";
import { LEVEL_PROPORTION } from "../utils/constants.js";

export function generateTemplateCards(x) {
	const cards = [];
	for (let j = 0; j < LEVEL_PROPORTION.length; ++j) {
		const max = Math.floor(x * LEVEL_PROPORTION[0] );
		for (let i = 0; i < max; ++i) {
			cards.push(new TemplateCard(j) );
		}
	}
	return cards;
}

export function generateGameCard(template) {
	return new GameCard(template.attack, template.life, template.adaptative, template.price);
}
