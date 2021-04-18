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

	// const handlePositionValidation = () => {
	// 	setNextButtonDisabled(true);
	// 	if (selectedBox && gInterface.canPlayerMove(selectedBox.x, selectedBox.y) ) {
	// 		gInterface.move(selectedBox);
	// 		gInterface.generateNewBorders();
	// 		setSelectedBox(null);
	// 	}
	// };

	// movePriorPlayers
	async function phaseOne() {
		for (let i = 0; i < gInterface.getPriorAgentsNumber; ++i) {
			await sleep(1000);
			selectedBox(null);
		}
	}

	// moveLaterPlayers
	// Fights
	// Managements
	async function phaseTwo() {
		for (let i = 0; i < gInterface.getLaterAgentsNumber; ++i) {
			await sleep(1000);
			selectedBox(null);
		}
	}

	const handleNextTurn = async() => {
		const phase = gInterface.next(selectedBox); // If selectedBox not valid, phase = -1

		if (phase === -1) {
			return;
		}
		
		setNextButtonDisabled(true);
		if (phase === 1) {
			await phaseOne();
		} else if (phase === 2) {
			await phaseTwo();
			setSelectedBox(null);
		}
		setNextButtonDisabled(false);
	};

	


	const handleClick = (x, y) => {
		if (!gInterface.canPlayerMove(x, y) || gInterface.isDisabled(x, y) || gInterface.willBeDisabled(x, y) ) {
			return true;
		}
		setSelectedBox( { x, y } );
		return false;
	};

	return (
		<Flex bg="gray.200">
			<Grid gInterface={gInterface}
				columns={gInterface.getGridSize()}
				rows={gInterface.getGridSize()}
				handleClick={handleClick}
				selectedBox={selectedBox}>
			</Grid>
			<Flex h="70vh" flexDirection="column" justifyContent="space-between" w="100%">
				<Flex h="100%" alignItems="flex-start" justifyContent="space-between">
					<AgentDisplayer gInterface={gInterface}></AgentDisplayer>
					<Flex flexDirection="column" justifyContent="space-between" alignItems="flex-end" h="100%">
						<Button w="10%" onClick={onClickHandler} >{ ">>" } </Button>
						<Box w="7vw">
							{/* <Button w="100%" onClick={handlePositionValidation} fontSize="0.7vw" mb="3%" >TOUR SUIVANT</Button> */}
							<Button w="100%" disabled={isNextButtonDisabled} onClick={handleNextTurn} fontSize="0.7vw" >Suivant</Button>
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
