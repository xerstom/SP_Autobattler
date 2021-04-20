import Strategy from "../strategies/Strategy.js";
import Agent from "./Agent.js";

class Bot extends Agent {
	constructor(color) {
		super(color);
		this.strategy = new Strategy(Math.random() );
	}
}

export default Bot;
