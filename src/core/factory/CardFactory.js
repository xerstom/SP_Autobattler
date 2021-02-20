import GameCard from "../cards/GameCard.js";
import TemplateCard from "../cards/TemplateCard.js";
import { LEVEL_PROPORTION } from "../utils/constants.js";
import { rand } from "../utils/utils.js";

function createTemplateCard(name, level) {
	return new TemplateCard(name, level);
}

export function generateTemplateCards(x) {
	const cards = [];
	for (let j = 0; j < LEVEL_PROPORTION.length; ++j) {
		const max = Math.floor(x * LEVEL_PROPORTION[0] );
		for (let i = 0; i < max; ++i) {
			cards.push(createTemplateCard(i, j) );
		}
	}
	return cards;
}

function createGameCard(template) {
	return new GameCard(template.name, template.level, template.attack, template.life, template.adaptative, template.price);
}

export function generateGameCard(templates) {
	const max = Math.floor(templates.length * LEVEL_PROPORTION[0] );
	const index = rand(0, max - 1);
	return createGameCard(templates[index] );
}

export function generateGameCards(x, templates) {
	const cards = [];
	for (let i = 0; i < x; ++i) {
		cards.push(generateGameCard(templates) );
	}
	return cards;
}



