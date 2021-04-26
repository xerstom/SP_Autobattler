import ManagementStrategy from "./ManagementStrategy.js";

/**
 * The class that defines a Level up management strategy
 *
 * @export
 * @class LevelUpStrategy
 * @extends {ManagementStrategy}
 */
export default class LevelUpStrategy extends ManagementStrategy {
	/**
	 * Function that execute the most level ups possible with the agent's money
	 *
	 * @static
	 * @param {Strategy} strategy The strategy of the agent
	 * @param {Agent} agent The agent whose turn needs to be executed
	 * @param {AgentManager} agentManager the agent manager
	 * @memberof ManagementStrategy
	 */
	static executeTurn(strategy, agent, agentManager) {
		while (agentManager.buy(agent, "levelUp") ) {
			strategy.choice = null;
		}

		if (agent.isLevelMax() && strategy.levelUpStrategy !== -1) {
			ManagementStrategy.redistributeProba("levelUpStrategy", strategy);
		}
	}
}
