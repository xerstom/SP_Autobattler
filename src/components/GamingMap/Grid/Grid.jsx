import { SimpleGrid } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

import { isDisabled } from "../../../core/utils/utils.js";
import Box from "./Box/Box.jsx";



const bgColor = (selectedBox, i, j, playerPosition, borders, agents) => {
	if (playerPosition.x === i && playerPosition.y === j) {
		return "blue";
	}
	if (isDisabled(i, j, borders) ) {
		return "yellow";
	}
	if (selectedBox?.x === i && selectedBox?.y === j) {
		return "green";
	}

	return "gray";
};



const Grid = props => {
	// Props
	const {
		columns, rows, nextBorders, manager, playerPosition, selectedBox, HandleClick,
	} = props;
	
	// UseState



	// Events handler




	// Grid creation
	const boxes = [];
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			boxes.push(<Box key = {`${i}-${j}`} x={i} y={j} perc={100 / columns} disable={ isDisabled(i, j, manager.borders) } color={bgColor(selectedBox, i, j, playerPosition, nextBorders, manager.agents)
			} clickedOn={HandleClick}>cc</Box>);
		}
	}

	return (
		<>
			<SimpleGrid id="grid" columns={columns} w="fit-content" /* ref={measuredRef}*/ >
				{boxes}
			</SimpleGrid>

		</>
	);
};
Grid.propTypes = {
	columns: PropTypes.number,
	rows: PropTypes.number,
	borders: PropTypes.shape( {
		 x1: PropTypes.number,
		 x2: PropTypes.number,
		 y1: PropTypes.number,
		 y2: PropTypes.number,
	} ),
	nextBorders: PropTypes.shape( {
		x1: PropTypes.number,
		x2: PropTypes.number,
		y1: PropTypes.number,
		y2: PropTypes.number,
	} ),
	mouvementPoints: PropTypes.number,
};

export default Grid;
