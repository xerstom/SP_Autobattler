import ManagementStrategy from "./ManagementStrategy.js";

export default class BoardUpStrategy extends ManagementStrategy {
	static executeTurn(strategy, agent, agentManager) {
		while (agentManager.buy(agent, "boardUp") ) {
			strategy.choice = null;
		}

		if (agent.isBoardSizeMax() && strategy.boardUpProbability !== -1) {
			ManagementStrategy.redistributeProba("boardUpProbability", strategy);
		}
	}
}
