import { SimpleGrid } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

import Box from "./Box/Box.jsx";
import { activeColors, bgColor } from "./grid.js";

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
			<SimpleGrid id="grid" columns={columns} w="fit-content" alignSelf='baseline'>
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
