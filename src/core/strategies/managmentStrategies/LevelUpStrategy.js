import ManagementStrategy from "./ManagementStrategy.js";

export default class LevelUpStrategy extends ManagementStrategy {
	static executeTurn(strategy, agent, agentManager) {
		// eslint-disable-next-line curly
		while (agentManager.buy(agent, "levelUp") ) ;

		if (agent.isLevelMax() && strategy !== -1) {
			ManagementStrategy.redistributeProba("levelUpStrategy", strategy);
		}
	}
}
