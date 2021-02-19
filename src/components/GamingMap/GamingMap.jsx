import { Box, Button, Code, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState } from "react";

import AgentDisplayer from "./AgentDisplayer/AgentDisplayer.jsx";
import Grid from "./Grid/Grid.jsx";

const GamingMap = props => {
	const { onClickHandler, manager } = props;
	
	const [playerPosition, setPlayerPosition] = useState(manager.player.position);
	const [selectedBox, setSelectedBox] = useState(null);

	const handleValidation = () => {
		if (selectedBox) {
			manager.move(selectedBox);
			setPlayerPosition(selectedBox);
			setSelectedBox(null);
		}
	};

	const nextBorders = { x1: 0, x2: 8, y1: 0, y2: 9 };

	const HandleClick = (x, y) => {
		if (!manager.canPlayerMove(x, y) || manager.isDisabled(x, y) || manager.willBeDisabled(x, y) ) {
			return true;
		}
		setSelectedBox( { x, y } );
		return false;
	};
	return (
		<Flex bg="gray.200">
			<Grid columns={10} rows={10} HandleClick={HandleClick} manager={manager} nextBorders={nextBorders} playerPosition={playerPosition} selectedBox={selectedBox} ></Grid>
			<Flex flexDirection="column" justifyContent="space-between" w="100%">
				<Flex h="100%" alignItems="flex-start" justifyContent="space-between">
					<AgentDisplayer manager={manager}></AgentDisplayer>
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
	onClickHandler: PropTypes.func,
	borders: PropTypes.shape( {
		x1: PropTypes.number,
		x2: PropTypes.number,
		y1: PropTypes.number,
		y2: PropTypes.number,
	} ),
	manager: PropTypes.object,
};
	
export default GamingMap;
