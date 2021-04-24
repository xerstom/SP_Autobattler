import Strategy from "../strategies/Strategy.js";
import Agent from "./Agent.js";

class Bot extends Agent {
	constructor(color) {
		super(color);
		this.strategy = new Strategy(Math.random(), 0, 0.9, 0.1);
	}
}

export default Bot;
