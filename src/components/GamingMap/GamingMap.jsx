import { Box, Button, Code, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState } from "react";

import Grid from "./Grid/Grid.jsx";

const GamingMap = props => {
	const { onClickHandler, manager } = props;
	
	const [playerPosition, setPlayerPosition] = useState(manager.player.position);
	const [selectedBox, setSelectedBox] = useState(playerPosition);

	const handleValidation = () => {
		if (selectedBox) {
			manager.move(selectedBox);
			setPlayerPosition(selectedBox);
		}
	};

	const nextBorders = { x1: 0, x2: 8, y1: 0, y2: 9 };

	const HandleClick = (x, y) => {
		if (!manager.canPlayerMove(x, y) || manager.isDisabled(x, y) ) {
			return true;
		}
		setSelectedBox( { x, y } );
		return false;
	};
	return (
		<Flex>
			<Grid columns={10} rows={10} HandleClick={HandleClick} manager={manager} nextBorders={nextBorders} playerPosition={playerPosition} selectedBox={selectedBox} ></Grid>
			<Flex flexDirection="column" justifyContent="space-between" w="100%">
				<Flex h="100%" alignItems="flex-start" justifyContent="space-between">
					<Button onClick={handleValidation}>VALIDER</Button>
					<Button w="10%" onClick={onClickHandler}>{ ">>" }</Button>
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
