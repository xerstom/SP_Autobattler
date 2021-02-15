import { SimpleGrid } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState } from "react";

import Box from "./Box/Box.jsx";

const isDisabled = (x, y, borders) => x < borders.x1 || x > borders.x2 || y < borders.y1 || y > borders.y2;



const Grid = props => {
	const { columns, rows, borders } = props;
	// const [boxes, setBoxes] = useState( {} );
	const [selectedBox, setSelectedBox] = useState( {} );
	const clickedOn = (x, y) => {
		setSelectedBox( { x, y } );
	};
	const boxes = [];
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			boxes.push(<Box key = {`${i}${j}`} x={i} y={j} perc={100 / columns} disable={ isDisabled(i, j, borders) } isSelected={selectedBox?.x === i && selectedBox?.y === j} clickedOn={clickedOn}>cc</Box>);
		}
	}
	return (
		<SimpleGrid columns={columns} w="fit-content" >
			{boxes}
		</SimpleGrid>
	);
};
Grid.propTypes = {
	
};

export default Grid;
