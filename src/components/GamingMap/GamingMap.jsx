import { Box, Button, Code, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState } from "react";

import AgentDisplayer from "./AgentDisplayer/AgentDisplayer.jsx";
import Grid from "./Grid/Grid.jsx";

const GamingMap = props => {
	const { gInterface, onClickHandler } = props;
	
	const [selectedBox, setSelectedBox] = useState(null);

	const handleValidation = () => {
		if (selectedBox && gInterface.canPlayerMove(selectedBox.x, selectedBox.y) ) {
			gInterface.move(selectedBox);
			gInterface.generateNewBorders();
			setSelectedBox(null);
		}
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
						<Button onClick={handleValidation} >VALIDER</Button>
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
