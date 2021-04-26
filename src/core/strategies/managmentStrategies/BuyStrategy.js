import ManagementStrategy from "./ManagementStrategy.js";

/**
 * The class that defines a buy management strategy
 *
 * @export
 * @class BuyStrategy
 * @extends {ManagementStrategy}
 */
export default class BuyStrategy extends ManagementStrategy {
	/**
	 * Function that buys the most cards with the agent's money
	 *
	 * @static
	 * @param {Strategy} strategy The strategy of the agent
	 * @param {Agent} agent The agent whose turn needs to be executed
	 * @param {AgentManager} agentManager the agent manager
	 * @param {CardManager} cardManager The card manager
	 * @memberof ManagementStrategy
	 */
	static executeTurn(strategy, agent, agentManager, cardManager) {
		while (cardManager.buyCard(agent)[0] ) {
			strategy.choice = null;
		}
	}
}
