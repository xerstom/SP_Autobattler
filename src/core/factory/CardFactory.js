import TemplateCard from "../cards/TemplateCard.js";

export default function generateTemplateCards(x, min, max) {
	const cards = [];
	for (let i = 0; i < x; ++i) {
		cards.push(new TemplateCard(min, max) );
	}
	return cards;
}
