import { Box, Button, Code, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState } from "react";

import AgentDisplayer from "./AgentDisplayer/AgentDisplayer.jsx";
import Grid from "./Grid/Grid.jsx";

const GamingMap = props => {
	const { gInterface, onClickHandler } = props;
	
	const [playerPosition, setPlayerPosition] = useState(gInterface.getPlayer().position);
	const [selectedBox, setSelectedBox] = useState(null);

	const handleValidation = () => {
		if (selectedBox) {
			gInterface.move(selectedBox);
			gInterface.generateNewBorders();
			setPlayerPosition(selectedBox);
			setSelectedBox(null);
		}
	};

	const nextBorders = { x1: 0, x2: 8, y1: 0, y2: 9 };

	const handleClick = (x, y) => {
		if (!gInterface.canPlayerMove(x, y) || gInterface.isDisabled(x, y) || gInterface.willBeDisabled(x, y) ) {
			return true;
		}
		setSelectedBox( { x, y } );
		return false;
	};

	return (
		<Flex bg="gray.200">
			<Grid columns={gInterface.getGridSize()} rows={gInterface.getGridSize()} handleClick={handleClick} gInterface={gInterface} nextBorders={nextBorders} playerPosition={playerPosition} selectedBox={selectedBox} ></Grid>
			<Flex flexDirection="column" justifyContent="space-between" w="100%">
				<Flex h="100%" alignItems="flex-start" justifyContent="space-between">
					<AgentDisplayer gInterface={gInterface}></AgentDisplayer>
					<Flex flexDirection="column" justifyContent="space-between" alignItems="flex-end" h="100%">
						<Button w="10%" onClick={onClickHandler} color="white" bg="gray.500" _hover={{ bg: "gray.600" }}>{ ">>" } </Button>
						<Button onClick={handleValidation} color="white" bg="gray.500" _hover={{ bg: "gray.600" }}>VALIDER</Button>
					</Flex>
				</Flex>
				<Box h="50vh">
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
