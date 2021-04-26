/* eslint-disable no-magic-numbers */
import {
	Box, Button, Flex,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState } from "react";

import LogOutput from "../LogOutput.jsx";
import AgentDisplayer from "./AgentDisplayer/AgentDisplayer.jsx";
import Grid from "./Grid/Grid.jsx";

const TIMEOUT_MOVEMENT = 1000;

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms) );
}

const GamingMap = props => {
	const { gInterface, onClickHandler } = props;
	
	const [selectedBox, setSelectedBox] = useState(null);
	const [isNextButtonDisabled, setNextButtonDisabled] = useState(false);
	const [agentsPosition, setAgentsPosition] = useState(gInterface.getAgentsPosition() );
	const [agents, setAgents] = useState(gInterface.getAgentsProfile() );
	const [battleSummary, setBattleSummary] = useState(gInterface.getBattleSummary() );

	// movePriorPlayers
	async function phaseOne() {
		setBattleSummary( [] );
		const l = gInterface.getPriorAgentsPosition();
		for (let i = 0; i < l; ++i) {
			setAgentsPosition(gInterface.getUpdatedAgentsPosition() );
			await sleep(TIMEOUT_MOVEMENT);
		}
	}

	// moveLaterPlayers
	// Fights
	// Managements
	async function phaseTwo() {
		const l = gInterface.getLaterAgentsPosition();
		for (let i = 0; i < l; ++i) {
			setAgentsPosition(gInterface.getUpdatedAgentsPosition() );
			await sleep(TIMEOUT_MOVEMENT);
		}
		const summary = gInterface.getBattleSummary();
		for (const sum of summary) {
			battleSummary.push(sum);
			setBattleSummary( [...battleSummary] );
			await sleep(400);
		}
		setAgents(gInterface.getAgentsProfile() );
		setAgentsPosition(gInterface.getAgentsPosition() );
	}

	/**
	 * Main frontend gameloop logic
	 */
	const handleNext = async() => {
		const phase = gInterface.next(selectedBox); // If selectedBox not valid, phase = -1

		if (phase === -1) {
			return;
		}
		
		setNextButtonDisabled(true);
		if (phase === 1) { // waiting for position
			await phaseOne(); // display enemies movement
		} else if (phase === 2) { // waiting for next turn
			setSelectedBox(null);
			await phaseTwo(); // display battles / management
		}
		setNextButtonDisabled(false);
	};

	const selectable = (x, y) => {
		if (!gInterface.isSelectable(x, y) ) {
			return false;
		}
		setSelectedBox( { x, y } );
		return true;
	};

	return (
		<Flex h="100vh" bg="gray.200">
			<Grid gInterface={gInterface}
				columns={gInterface.getGridSize()}
				rows={gInterface.getGridSize()}
				agents={agentsPosition}
				selectable={selectable}
				selectedBox={selectedBox}>
			</Grid>
			<Flex h="70vh" flexDirection="column" justifyContent="space-between" w="100%">
				<Flex h="100%" alignItems="flex-start" justifyContent="space-between">
					<AgentDisplayer agents={agents}></AgentDisplayer>
					<Flex flexDirection="column" justifyContent="space-between" alignItems="flex-end" h="100%">
						<Button w="10%" disabled={isNextButtonDisabled} onClick={onClickHandler} >{ ">>" } </Button>
						<Box w="7vw">
							<Button w="100%" disabled={isNextButtonDisabled} onClick={handleNext} fontSize="0.7vw" >Suivant</Button>
						</Box>
					</Flex>
				</Flex>
				<LogOutput minH="30vh" summary={battleSummary} />
			</Flex>

		</Flex>
	);
};

GamingMap.propTypes = {
	gInterface: PropTypes.object,
	onClickHandler: PropTypes.func,
};
	
export default GamingMap;
