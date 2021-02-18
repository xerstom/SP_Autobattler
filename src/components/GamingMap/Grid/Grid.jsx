import { SimpleGrid } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

import Box from "./Box/Box.jsx";



const bgColor = (selectedBox, i, j, manager) => {
	const agent = manager.agents.find(a => a.position.x === i && a.position.y === j);
	if (agent) {
		return agent.color;
	}
	if (manager.player.position.x === i && manager.player.position.y === j) {
		return "blue";
	}
	if (manager.willBeDisabled(i, j) ) {
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
		columns, rows, manager, selectedBox, HandleClick,
	} = props;
	
	// UseState



	// Events handler




	// Grid creation
	const boxes = [];
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			boxes.push(<Box key = {`${i}-${j}`} x={i} y={j} perc={100 / columns} disable={ manager.isDisabled(i, j, manager.borders) } color={bgColor(selectedBox, i, j, manager)
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
	manager: PropTypes.object,
	selectedBox: PropTypes.shape( {
		x: PropTypes.number,
		y: PropTypes.number,
	} ),
	HandleClick: PropTypes.func,
};

export default Grid;
