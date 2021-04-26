import ManagementStrategy from "./ManagementStrategy.js";

/**
 * The class that defines a board up management strategy
 *
 * @export
 * @class BuyStrategy
 * @extends {ManagementStrategy}
 */
export default class BoardUpStrategy extends ManagementStrategy {
	/**
	 * Function that execute the most board ups possible with the agent's money
	 *
	 * @static
	 * @param {Strategy} strategy The strategy of the agent
	 * @param {Agent} agent The agent whose turn needs to be executed
	 * @param {AgentManager} agentManager the agent manager
	 * @memberof ManagementStrategy
	 */
	static executeTurn(strategy, agent, agentManager) {
		while (agentManager.buy(agent, "boardUp") ) {
			strategy.choice = null;
		}

		if (agent.isBoardSizeMax() && strategy.boardUpProbability !== -1) {
			ManagementStrategy.redistributeProba("boardUpProbability", strategy);
		}
	}
}
