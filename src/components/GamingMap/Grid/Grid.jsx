import { Button, SimpleGrid } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useCallback, useState } from "react";

import Box from "./Box/Box.jsx";

const isDisabled = (x, y, borders) => x < borders.x1 || x > borders.x2 || y < borders.y1 || y > borders.y2;


const bgColor = (selectedBox, i, j, playerPosition, borders) => {
	if (playerPosition.x === i && playerPosition.y === j) {
		return "blue";
	}
	if (isDisabled(i, j, borders) ) {
		if (selectedBox?.x === i && selectedBox?.y === j) {
			return "red";
		}
		return "yellow";
	}
	if (selectedBox?.x === i && selectedBox?.y === j) {
		return "green";
	}
	return "gray";
};

const canMove = (x, y, playerPositon, mouvementPoints) => Math.abs(x - playerPositon.x) + Math.abs(y - playerPositon.y) <= mouvementPoints;


const Grid = props => {
	// Props
	const {
		columns, rows, borders, nextBorders, mouvementPoints,
	} = props;
	
	// UseState
	const [width, setWidth] = useState(0);
	const [playerPosition, setPlayerPosition] = useState( { x: 0, y: 0 } );
	const [selectedBox, setSelectedBox] = useState(playerPosition);

	// Events handler
	const HandleClick = (x, y) => {
		if (!canMove(x, y, playerPosition, mouvementPoints) || isDisabled(x, y, nextBorders) ) {
			return true;
		}
		setSelectedBox( { x, y } );
		return false;
	};
	const handleValidation = () => {
		if (selectedBox) {
			setPlayerPosition(selectedBox);
		}
	};

	// Grid creation
	const boxes = [];
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			boxes.push(<Box key = {`${i}${j}`} x={i} y={j} perc={100 / columns} disable={ isDisabled(i, j, borders) } color={bgColor(selectedBox, i, j, playerPosition, nextBorders)} clickedOn={HandleClick}>cc</Box>);
		}
	}

	// Place validation button
	const measuredRef = useCallback(node => {
		if (node !== null) {
			setWidth(node.getBoundingClientRect().width);
		}
	  } );

	return (
		<>
			<SimpleGrid id="grid" columns={columns} w="fit-content" ref={measuredRef} >
				{boxes}
			</SimpleGrid>
			<Button position="absolute" left={width} onClick={handleValidation}>VALIDER</Button>
		</>
	);
};
Grid.propTypes = {
	columns: PropTypes.Number,
	rows: PropTypes.Number,
	borders: {
		 x1: PropTypes.Number,
		 x2: PropTypes.Number,
		 y1: PropTypes.Number,
		 y2: PropTypes.Number,
	},
	nextBorders: {
		x1: PropTypes.Number,
		x2: PropTypes.Number,
		y1: PropTypes.Number,
		y2: PropTypes.Number,
	},
	mouvementPoints: PropTypes.Number,
};

export default Grid;
