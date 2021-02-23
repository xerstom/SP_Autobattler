import { generateFightCards } from "../factory/CardFactory.js";
import Manager from "../Manager.js";
import { rand } from "../utils/utils.js";

class BattleManager extends Manager {
	constructor(gameManager) {
		super(gameManager);
		this.ready = false;
		this.state = [];

		this.battles = [];
		this.fighters = [];
	}

	init() {
		//
	}

	reset() {
		this.ready = false;
		this.state = [];
		this.battles = [];
		this.fighters = [];
	}

	setup() {
		this.reset();
		const all = this.m.getAgents();
		for (const agent of all) {
			// who will fight with the current agent
			// includes the current agent + all that matches its position
			const fighting = all
				.filter(e => e.position.x === agent.position.x
					&& e.position.y === agent.position.y
					&& !this.fighters.includes(e.name) );

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
		console.log(this.battles);
		this.ready = true;
	}

	battleAll() {
		if (!this.ready) {
			return;
		}

		for (const battle of this.battles) {
			const agent1 = this.prepareBattle(battle[0] );
			const agent2 = this.prepareBattle(battle[1] );
			const combatDetails = this.battle(agent1, agent2);
			
			const diff = agent1.board.length - agent2.board.length;
			const summary = diff > 0
				? `${agent1.name} a inflige ${diff} degats a ${agent2.name}!`
				: `${agent2.name} a inflige ${-diff} degats a ${agent1.name}!`;
			
			console.log(agent1, agent2);
			console.log(summary);
			console.log(combatDetails);
			// TODO: actually remove life
			// TODO: what if user is actually dead
			this.state.push( {
				agent1: agent1.name,
				agent2: agent2.name,
				summary,
				detailedCombat: combatDetails,
			} );
		}
	}

	prepareBattle(agent) {
		return { name: agent.name, board: generateFightCards(agent.board) };
	}

	/**
	 *
	 *
	 * @param {Array<FightCard>} agent1 Board for Agent1
	 * @param {Array<FightCard>} agent2 Board for Agent2
	 * @return {Array<String>}
	 * @memberof CombatManager
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
				console.log("src agent1", det, agent1Buf, agent2Buf);
			} else {
				// source = agent2
				// target = agent1
				[
					agent2Buf,
					agent1Buf,
					det,
				] = this.fight(agent2Name, agent1Name, agent2Board, agent1Board, agent2Cur, rand(0, agent1Board.length - 1), agent1Cur);
				console.log("src agent2", det, agent2Buf, agent1Buf);
			}
			agent1Cur += agent1Buf;
			agent2Cur += agent2Buf;
			console.log("curs", agent1Cur, agent2Cur);
			battleDetails.push(det);
		}

		return battleDetails;
	}

	fight(sourceName, targetName, sourceBoard, targetBoard, sourceIndex, targetIndex, targetCur) {
		let sourceInd = 0;
		let targetInd = 0;
		targetBoard[targetIndex].life -= sourceBoard[sourceIndex].attack;
		sourceBoard[sourceIndex].life -= targetBoard[targetIndex].attack;

		let fightDetails = `${sourceName}'s ${sourceBoard[sourceIndex].name} attack ${targetName} ${targetBoard[targetIndex].name}. `;
		
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
