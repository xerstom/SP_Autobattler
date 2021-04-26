import Strategy from "../strategies/Strategy.js";
import Agent from "./Agent.js";

/**
 * A specialised Agent, a bot
 *
 * @class Bot
 * @extends {Agent}
 * @prop {Strategy} strategy
 */
class Bot extends Agent {
	constructor(color) {
		super(color);
		// eslint-disable-next-line no-magic-numbers
		this.strategy = new Strategy(Math.random(), 0.5, 0.4);
	}
}

export default Bot;
