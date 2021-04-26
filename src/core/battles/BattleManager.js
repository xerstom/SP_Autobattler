import { generateFightCards } from "../factory/CardFactory.js";
import Manager from "../Manager.js";
import { CONFIG } from "../utils/constants.js";
import { rand } from "../utils/utils.js";

/**
 * @typedef {{
 * 	agent1: String,
 * 	agent2: String,
 * 	summary: String,
 * 	detailedCombat: Array<String>
 * }} State
 * @typedef {{
 * 	name: String,
 * 	board: Array<FightCard>,
 * }} PartialAgent
 */

/**
 * Manager that handles all battles and fight
 *
 * @class BattleManager
 * @extends {Manager}
 * @prop {Boolean} ready
 * @prop {Array<State>} states
 * @prop {Array<Array<[Agent, Agent]>>} battles All tuple of agents/fight
 * @prop {Array<String>} fighters All agents name that will fight this turn
 * @prop {Number} damagePerCard The amount of damage a card will do to the agent at the end of the fight
 * @prop {Number} moneyPerFight The amount of money to split between the agents after a fight
 */
class BattleManager extends Manager {
	constructor(gameManager) {
		super(gameManager);
		this.ready = false;
		this.states = [];
		this.battles = [];
		this.fighters = [];
		this.damagePerCard = CONFIG.DAMAGE_PER_CARD;
		this.moneyPerFight = CONFIG.MONEY_PER_COMBAT;
	}

	/**
	 * The base money everybody gets after a fight
	 *
	 * @readonly
	 * @returns {Number}
	 * @memberof BattleManager
	 */
	get battleSalary() {
		return Math.round(this.moneyPerFight / 4);
	}

	/**
	 * The money to split between the 2 fighters at the end of a fight
	 *
	 * @readonly
	 * @returns {Number}
	 * @memberof BattleManager
	 */
	get moneyToSplit() {
		return Math.round(this.moneyPerFight / 2);
	}

	/**
	 * The money for an agent depending of the percentage of the total left card he has
	 *
	 * @param {PartialAgent} agent
	 * @param {Number} totalCards
	 * @returns {Number}
	 * @memberof BattleManager
	 */
	getMoneyBattle(agent, totalCards) {
		if (totalCards === 0) {
			return Math.round(this.moneyToSplit / 2);
		}
		return Math.round(this.moneyToSplit * (agent.board.length / totalCards) );
	}

	init() {
		//
	}

	/**
	 * Reset the battle manager
	 *
	 * @memberof BattleManager
	 */
	reset() {
		this.ready = false;
		this.states = [];
		this.battles = [];
		this.fighters = [];
	}

	/**
	 * Get all states of this turn battles
	 *
	 * @returns {Array<State>}
	 * @memberof BattleManager
	 */
	summary() {
		return this.states;
	}

	/**
	 * Setup battles for the upcoming turn based of player positions
	 *
	 * @memberof BattleManager
	 */
	setup() {
		this.reset();
		const all = this.m.getAliveAgents();
		for (const agent of all) {
			// who will fight with the current agent
			// includes the current agent + all that matches its position
			const fighting = all
				.filter(e => this.m.samePosition(e, agent) && !this.fighters.includes(e.name) );

			// add to current fighters
			fighting.forEach(e => this.fighters.push(e.name) );
			
			// everyone fight two by two (every combination)
			for (let i = 0; i < fighting.length; ++i) {
				for (let j = i + 1; j < fighting.length; ++j) {
					// delay fights
					this.battles.push( [fighting[i], fighting[j]] );
				}
			}
		}
		this.ready = true;
	}

	/**
	 * Battles all agents one to another
	 *
	 * @returns
	 * @memberof BattleManager
	 */
	battleAll() {
		if (!this.ready) {
			return;
		}

		for (const battle of this.battles) {
			const agent1 = this.prepareBattle(battle[0] );
			const agent2 = this.prepareBattle(battle[1] );
			const combatDetails = this.battle(agent1, agent2);
			
			const totalCards = agent1.board.length + agent2.board.length;
			battle[0].increaseMoney(this.getMoneyBattle(agent1, totalCards) );
			battle[1].increaseMoney(this.getMoneyBattle(agent2, totalCards) );
			
			battle[0].decreaseLife(agent2.board.length * this.damagePerCard);
			battle[1].decreaseLife(agent1.board.length * this.damagePerCard);

			battle[0].increaseMoney(this.battleSalary);
			battle[1].increaseMoney(this.battleSalary);

			const summary = agent1.board.length >= agent2.board.length
				? `${agent1.name} a inflige ${agent1.board.length * this.damagePerCard} degats a ${agent2.name} et ${agent2.name} a inflige ${agent2.board.length * this.damagePerCard} degats a ${agent1.name} !`
				: `${agent2.name} a inflige ${agent2.board.length * this.damagePerCard} degats a ${agent1.name} et ${agent1.name} a inflige ${agent1.board.length * this.damagePerCard} degats a ${agent2.name} !`;
			
			this.states.push( {
				agent1: agent1.name,
				agent2: agent2.name,
				summary,
				detailedCombat: combatDetails,
			} );
		}
	}

	/**
	 * Create a partial agent with fight cards of the original agent
	 *
	 * @param {Agent} agent
	 * @returns {PartialAgent}
	 * @memberof BattleManager
	 */
	prepareBattle(agent) {
		return { name: agent.name, board: generateFightCards(agent.board) };
	}

	/**
	 * Handles one battle between 2 agents
	 *
	 * @param {PartialAgent} agent1
	 * @param {PartialAgent} agent2
	 * @return {Array<String>} The details of this battle
	 * @memberof BattleManager
	 */
	battle( { name: agent1Name, board: agent1Board }, { name: agent2Name, board: agent2Board } ) {
		let agent1Cur = 0;
		let agent2Cur = 0;

		let agent1Buf,
			agent2Buf,
			det;

		const battleDetails = [];
		
		while (agent1Board.length > 0
			&& agent2Board.length > 0
			&& (agent1Cur < agent1Board.length || agent2Cur < agent2Board.length) ) {
			let r;
			if (agent1Cur === agent1Board.length) {
				r = 1;
			} else if (agent2Cur === agent2Board.length) {
				r = 0;
			} else {
				r = rand(0, 1);
			}
			
			if (r === 0) {
				// source = agent1
				// target = agent2
				[
					agent1Buf,
					agent2Buf,
					det,
				] = this.fight(agent1Name, agent2Name, agent1Board, agent2Board, agent1Cur, rand(0, agent2Board.length - 1), agent2Cur);
			} else {
				// source = agent2
				// target = agent1
				[
					agent2Buf,
					agent1Buf,
					det,
				] = this.fight(agent2Name, agent1Name, agent2Board, agent1Board, agent2Cur, rand(0, agent1Board.length - 1), agent1Cur);
			}
			agent1Cur += agent1Buf;
			agent2Cur += agent2Buf;

			battleDetails.push(det);
		}

		return battleDetails;
	}

	/**
	 * Handles a fight between 2 cards
	 *
	 * @param {String} sourceName The name of the attacker agent
	 * @param {String} targetName The name of the defender agent
	 * @param {Array<FightCard>} sourceBoard The board of the attacker Agent
	 * @param {Array<FightCard>} targetBoard The board of the defender Agent
	 * @param {Number} sourceIndex
	 * @param {Number} targetIndex
	 * @param {Number} targetCur
	 * @returns {Array<[Number, Number, Array<String>]>}
	 * @memberof BattleManager
	 */
	fight(sourceName, targetName, sourceBoard, targetBoard, sourceIndex, targetIndex, targetCur) {
		let sourceInd = 0;
		let targetInd = 0;
		targetBoard[targetIndex].life -= sourceBoard[sourceIndex].attack;
		sourceBoard[sourceIndex].life -= targetBoard[targetIndex].attack;

		let fightDetails = `${sourceName}'s ${sourceBoard[sourceIndex].displayName} attack ${targetName}'s ${targetBoard[targetIndex].displayName}. `;
		
		const isTargetDead = targetBoard[targetIndex].life <= 0;
		const isSourceDead = sourceBoard[sourceIndex].life <= 0;
		
		if (isTargetDead) {
			targetBoard.splice(targetIndex, 1);
			targetIndex < targetCur && --targetInd;

			if (isSourceDead) {
				fightDetails += "They both killed each other.";
			} else {
				fightDetails += "The former killed the latter.";
			}
		}
		if (isSourceDead) {
			sourceBoard.splice(sourceIndex, 1);
			if (!isTargetDead) {
				fightDetails += "The latter killed the former.";
			}
		} else {
			sourceInd++;
		}
		return [
			sourceInd,
			targetInd,
			fightDetails,
		];
	}
}

export default BattleManager;
