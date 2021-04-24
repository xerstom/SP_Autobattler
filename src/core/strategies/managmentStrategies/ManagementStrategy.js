export default class ManagementStrategy {
	// eslint-disable-next-line no-unused-vars
	static executeTurn(strategy, agent, Manager) {
		throw new Error("not implemented");
	}

	static _executeTurn(managementStrat, strategy, agent, agentManager, cardManager) {
		managementStrat.executeTurn(strategy, agent, agentManager, cardManager);
		const [board, bench] = cardManager.optimizeBoards(agent.board, agent.bench, agent.boardSize);
		agent.setNewGamingBoard(board, bench);
	}

	static redistributeProba(probaToChange, strategy) {
		let toDistribute = strategy[probaToChange];
		strategy[probaToChange] = -1;

		const whereToDistribute = ["buyProbability"];
		if (probaToChange === "boardUpProbability" && strategy.levelUpProbability !== -1) {
			whereToDistribute.push("levelUpProbability");
		} else if (strategy.boardUpProbability !== -1) {
			whereToDistribute.push("boardUpProbability");
		}

		let i = 0;

		while (toDistribute !== 0 && i === whereToDistribute.length) {
			const r = Math.random() * toDistribute;
			toDistribute -= r;
			strategy[whereToDistribute[i++]] += r;
		}
		strategy[whereToDistribute[i]] += toDistribute;
	}
}