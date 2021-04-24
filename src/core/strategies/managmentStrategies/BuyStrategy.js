import ManagementStrategy from "./ManagementStrategy.js";

export default class BuyStrategy extends ManagementStrategy {
	static executeTurn(strategy, agent, agentManager, cardManager) {
		while (cardManager.buyCard(agent)[0] ) {
			strategy.choice = null;
		}
	}
}
