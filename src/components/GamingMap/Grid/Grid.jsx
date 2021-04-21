import { SimpleGrid } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

import Box from "./Box/Box.jsx";
import { activeColors, bgColor } from "./grid.js";

const Grid = props => {
	const {
		gInterface, columns, rows, selectedBox, selectable, agents,
	} = props;

	// Grid creation
	const boxes = [];
	
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			boxes.push(<Box key={`${j}-${i}`}
				x={j}
				y={i}
				// eslint-disable-next-line no-magic-numbers
				perc={50 / columns}
				disable={ gInterface.isDisabled(j, i) }
				colors={bgColor(j, i, agents, gInterface, selectedBox)}
				activeColors={activeColors(j, i, gInterface, selectedBox)}
				selectable={selectable}>
			</Box>);
		}
	}
	
	return (
		<>
			<SimpleGrid id="grid" columns={columns} w="50vw" alignSelf='baseline'>
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
	selectable: PropTypes.func,
	agents: PropTypes.array,
};

export default Grid;
