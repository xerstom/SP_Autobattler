import ManagementStrategy from "./ManagementStrategy.js";

export default class BoardUpStrategy extends ManagementStrategy {
	static executeTurn(strategy, agent, agentManager) {
		// eslint-disable-next-line curly
		while (agentManager.buy(agent, "boardUp") ) ;

		if (agent.isBoardSizeMax() && strategy !== -1) {
			ManagementStrategy.redistributeProba("boardUpProbability", strategy);
		}
	}
}
