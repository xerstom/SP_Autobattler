import { rand } from "../utils/utils.js";

class TemplateCard {
	constructor(min, max) {
		this.stats = rand(min, max);
		this.attack = rand(0, this.stats - 1);
		this.life = this.stats - this.attack;
		this.adaptative = rand(1, 5);
	}
}

export default TemplateCard;
