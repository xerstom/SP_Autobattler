import FightCard from "../cards/FightCard.js";
import GameCard from "../cards/GameCard.js";
import TemplateCard from "../cards/TemplateCard.js";
import { LEVEL_INCR, LEVEL_PROPORTION } from "../utils/constants.js";
import { rand } from "../utils/utils.js";

function createTemplateCard(name, level) {
	return new TemplateCard(name, level);
}

export function generateTemplateCards(x) {
	const cards = [];
	let incr = 0;
	for (let j = 0; j < LEVEL_PROPORTION.length; ++j) {
		const nCard = Math.floor(x * LEVEL_PROPORTION[j] );
		for (let i = 0; i < nCard; ++i, ++incr) {
			cards.push(createTemplateCard(incr, j) );
		}
	}
	return cards;
}

function createGameCard(template) {
	return new GameCard(template.name, template.level, template.attack, template.life, template.adaptative, template.price);
}

export function generateGameCard(templates, level) {
	const max = Math.floor(templates.length * LEVEL_INCR[level - 1] );
	const index = rand(0, max - 1);
	return createGameCard(templates[index] );
}

export function generateGameCards(x, templates) {
	const cards = [];
	for (let i = 0; i < x; ++i) {
		cards.push(generateGameCard(templates, 1) );
	}
	return cards;
}

function createFightCard(gameCard) {
	return new FightCard(gameCard.name, gameCard.attack, gameCard.life);
}

export function generateFightCards(board) {
	const cards = [];
	for (const card of board) {
		cards.push(createFightCard(card) );
	}
	return cards;
}


