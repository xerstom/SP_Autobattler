import ManagementStrategy from "./ManagementStrategy.js";

export default class BuyStrategy extends ManagementStrategy {
	static executeTurn(strategy, agent, agentManager, cardManager) {
		// eslint-disable-next-line curly
		// eslint-disable-next-line no-empty
		while (cardManager.buyCard(agent)[0] ) {}
	}
}
