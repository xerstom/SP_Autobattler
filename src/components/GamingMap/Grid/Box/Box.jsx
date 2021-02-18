import { Button, GridItem } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState } from "react";



const Box = props => {
	const {
		x, y, clickedOn, color, perc, disable,
	} = props;
	const [colorBg, setColor] = useState(null);
	const handleOnClick = () => {
		if (clickedOn(x, y) ) {
			setTimeout( () => setColor(null), 400);
			setColor("red");
		}
	};

	return (
		<GridItem h={`${perc}vh`} w={`${perc}vh`} border="solid black 1px" borderRadius="none" >
			<Button
				disabled = {disable}
				borderRadius="none"
				bg={colorBg ?? color}
				w="100%" h="100%"
				_hover={{ bg: colorBg ?? color }}
				_active={{
					borderColor: "grey",
				  }}
				  _focus={{
					color: "grey",
				  }}
				onClick={handleOnClick}
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
