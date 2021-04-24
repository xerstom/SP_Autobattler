import ManagementStrategy from "./ManagementStrategy.js";

export default class LevelUpStrategy extends ManagementStrategy {
	static executeTurn(strategy, agent, agentManager) {
		while (agentManager.buy(agent, "levelUp") ) {
			strategy.choice = null;
		}

		if (agent.isLevelMax() && strategy.levelUpStrategy !== -1) {
			ManagementStrategy.redistributeProba("levelUpStrategy", strategy);
		}
	}
}
