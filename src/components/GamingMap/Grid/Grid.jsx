import { SimpleGrid } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

import Box from "./Box/Box.jsx";

const bgColor = (i, j, gInterface, selectedBox) => {
	const colors = [];
	const agents = gInterface.getBots().filter(a => a.position.x === i && a.position.y === j);

	if (agents?.length > 0) {
		agents.forEach( (a) => colors.push(a.color) );
	}
	if (gInterface.getPlayer().position.x === i && gInterface.getPlayer().position.y === j) {
		colors.push("blue");
	}
	
	if (colors.length === 0) {
		if (gInterface.willBeDisabled(i, j) ) {
			return ["yellow"];
		}
		
		if (selectedBox?.x === i && selectedBox?.y === j) {
			return ["green"];
		}
	}
	return colors.length !== 0 ? colors : ["gray"];
};

const activeColors =  (i, j, gInterface, selectedBox) => {
	const colors = [];
	if (gInterface.willBeDisabled(i, j) ) {
		colors.push("yellow");
	}
	if (selectedBox?.x === i && selectedBox?.y === j) {
		colors.push("green");
	}
	return colors.length !== 0 ? colors : ["black"];
};

const Grid = props => {
	const {
		gInterface, columns, rows, selectedBox, handleClick,
	} = props;

	// Grid creation
	const boxes = [];
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			boxes.push(<Box key={`${i}-${j}`}
				x={i}
				y={j}
				perc={100 / columns}
				disable={ gInterface.isDisabled(i, j) }
				colors={bgColor(i, j, gInterface, selectedBox)}
				activeColors={activeColors(i, j, gInterface, selectedBox)}
				clickedOn={handleClick}>
			</Box>);
		}
	}

	return (
		<>
			<SimpleGrid id="grid" columns={columns} w="fit-content" >
				{boxes}
			</SimpleGrid>
		</>
	);
};
Grid.propTypes = {
	gInterface: PropTypes.object,
	columns: PropTypes.number,
	rows: PropTypes.number,
	selectedBox: PropTypes.shape( {
		x: PropTypes.number,
		y: PropTypes.number,
	} ),
	handleClick: PropTypes.func,
};

export default Grid;
