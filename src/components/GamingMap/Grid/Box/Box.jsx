import { Button, GridItem } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState } from "react";



const Box = props => {
	const {
		x, y, clickedOn, color, perc, disable,
	} = props;
	const [colorBg, setColor] = useState(null);
	const handleOnClick = (x, y) => {
		if (clickedOn(x, y) ) {
			setColor("red");
			setTimeout( () => setColor(null), 400);
		}
	};
	return (
		<GridItem h={`${perc}vh`} w={`${perc}vh`} border="solid black 1px" borderRadius="none" >
			<Button
				disabled = {disable}
				borderRadius="none"
				bg={colorBg ?? color}
				w="100%" h="100%"
				onClick={() => handleOnClick(x, y)}
			>
			</Button>
		</GridItem>
	);
};

Box.propTypes = {
	x: PropTypes.number,
	y: PropTypes.number,
	clickedOn: PropTypes.func,
	color: PropTypes.string,
	perc: PropTypes.number,
	disable: PropTypes.bool,
};

export default Box;
