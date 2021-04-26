
/**
 * The Super class that define what a managment strategy should look like
 *
 * @export
 * @class ManagementStrategy
 */
export default class ManagementStrategy {
	/**
	 * Function that execute a turn based on the chosen strategy
	 * Function that needs to be override by children
	 *
	 * @static
	 * @param {Strategy} strategy The strategy of the agent
	 * @param {Agent} agent The agent whose turn needs to be executed
	 * @param {AgentManager} agentManager the agent manager
	 * @param {CardManager} cardManager the card manager
	 * @memberof ManagementStrategy
	 */
	// eslint-disable-next-line no-unused-vars
	static executeTurn(strategy, agent, agentManager, cardManager) {
		throw new Error("not implemented");
	}

	/**
	 * hidden function to add generic comportement to executeTurn
	 *
	 * @static
	 * @param {ManagementStrat} managementStrat the sub management strategy
	 * @param {Strategy} strategy
	 * @param {Agent} agent
	 * @param {AgentManager} agentManager
	 * @param {CardManager} cardManager
	 * @memberof ManagementStrategy
	 */
	static _executeTurn(managementStrat, strategy, agent, agentManager, cardManager) {
		managementStrat.executeTurn(strategy, agent, agentManager, cardManager);
		const [board, bench] = cardManager.optimizeBoards(agent.board, agent.bench, agent.boardSize);
		agent.setNewGamingBoard(board, bench);
	}

	/**
	 * Function to redistrivbute a probability value when the action cannot be done anymore
	 *
	 * @static
	 * @param {String} probaToChange the name of the proba to redistribute
	 * @param {Strategy} strategy the strategy where to redistribute
	 * @memberof ManagementStrategy
	 */
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
