import { SimpleGrid } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState } from "react";

import Box from "./Box/Box.jsx";

const Grid = props => {
	const { columns, rows } = props;
	// const [boxes, setBoxes] = useState( {} );
	const [selectedBox, setSelectedBox] = useState( {} );
	const clickedOn = (x, y) => {
		setSelectedBox( { x, y } );
	};
	const boxes = [];
	for (let i = 0; i < columns; i++) {
		for (let j = 0; j < rows; j++) {
			boxes.push(<Box key = {`${i}${j}`} x={i} y={j} perc={100 / columns} isSelected={selectedBox?.x === i && selectedBox?.y === j} bgColor="grey" clickedOn={clickedOn}>cc</Box>);
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
