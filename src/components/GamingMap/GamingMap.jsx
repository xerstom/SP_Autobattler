import { Box, Button, Code, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState } from "react";

import AgentDisplayer from "./AgentDisplayer/AgentDisplayer.jsx";
import Grid from "./Grid/Grid.jsx";

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms) );
}

const GamingMap = props => {
	const { gInterface, onClickHandler } = props;
	
	const [selectedBox, setSelectedBox] = useState(null);
	const [isNextButtonDisabled, setNextButtonDisabled] = useState(false);
	const [agents, setAgents] = useState(gInterface.getAgents() );

	// movePriorPlayers
	async function phaseOne() {
		const l = gInterface.getPriorAgents();
		for (let i = 0; i < l; ++i) {
			await sleep(1000);
			setAgents(gInterface.getUpdatedAgents() );
		}
	}

	// moveLaterPlayers
	// Fights
	// Managements
	async function phaseTwo() {
		const l = gInterface.getLaterAgents();
		for (let i = 0; i < l; ++i) {
			await sleep(1000);
			setAgents(gInterface.getUpdatedAgents() );
		}
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
			await phaseTwo(); // display battles / management
			setSelectedBox(null);
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
		<Flex bg="gray.200">
			<Grid gInterface={gInterface}
				columns={gInterface.getGridSize()}
				rows={gInterface.getGridSize()}
				agents={agents}
				selectable={selectable}
				selectedBox={selectedBox}>
			</Grid>
			<Flex h="70vh" flexDirection="column" justifyContent="space-between" w="100%">
				<Flex h="100%" alignItems="flex-start" justifyContent="space-between">
					<AgentDisplayer agents={agents}></AgentDisplayer>
					<Flex flexDirection="column" justifyContent="space-between" alignItems="flex-end" h="100%">
						<Button w="10%" onClick={onClickHandler} >{ ">>" } </Button>
						<Box w="7vw">
							<Button w="100%" disabled={isNextButtonDisabled} onClick={handleNext} fontSize="0.7vw" >Suivant</Button>
						</Box>
					</Flex>
				</Flex>
				<Box h="30vh">
					<Code h="100%" w="100%">La partie input</Code>
				</Box>
			</Flex>

		</Flex>
	);
};

GamingMap.propTypes = {
	gInterface: PropTypes.object,
	onClickHandler: PropTypes.func,
};
	
export default GamingMap;
