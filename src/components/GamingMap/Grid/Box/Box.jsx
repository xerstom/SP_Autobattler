import { Button, GridItem } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState } from "react";

const percentageCalc = (colors, i) => (Math.round(100 / colors.length) ) * (i + 1);
	
const colorCalc =  (colors) => {
	// console.log(colors);
	if (colors.length === 1) {
		return colors[0];
	}
	let str = `linear-gradient(${colors.length === 2 ? 45 : 90}deg`;
	// console.log(colors);
	for (let i = 0; i < colors.length - 1; i++) {
		str += `, ${colors[i]} ${percentageCalc(colors, i)}%, ${colors[i + 1]} ${percentageCalc(colors, i)}%`;
	}
	return `${str});`;
};
	
	


const Box = props => {
	const {
		x, y, clickedOn, colors, perc, disable, activeColors,
	} = props;
	const [colorBg, setColor] = useState(null);
	const handleOnClick = () => {
		if (clickedOn(x, y) ) {
			setTimeout( () => setColor(null), 400);
			setColor("red");
		}
	};
	const bgColor =  colorCalc(colors);
	let activeColor =  colorCalc(activeColors);

	
	if (!bgColor.includes("%") ) {
		activeColor = activeColor !== bgColor ? activeColor : "black";
	}
	return (
		<GridItem h={`${perc}vh`} w={`${perc}vh`} border={`solid ${activeColor} ${activeColor === "black" ? "1px" : "5px"}`} borderRadius="none"
			 _active={{
				borderColor: activeColor,
				// borderColor: "#FF0000",

			}}
			_focus={{
				borderColor: activeColor,
			// borderColor: "#FF0000",
			}}
		>
			<Button
				disabled = {disable}
				borderRadius="none"
				bg={colorBg ?? bgColor}
				w="100%" h="100%"
				_hover={{ bg: colorBg ?? bgColor }}
				_active={{}}
				 _focus={{}}
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
