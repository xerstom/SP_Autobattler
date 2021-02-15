import { Button, GridItem } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";



const Box = props => {
	const {
		x, y, clickedOn, isSelected, perc,
	} = props;
	return (
		<GridItem h={`${perc}vh`} w={`${perc}vh`} border="solid black 1px" borderRadius="none" >
			<Button
				borderRadius="none"
				colorScheme={isSelected ? "green" : "gray"}
				w="100%" h="100%"
				onClick={() => clickedOn(x, y)
				}>
			</Button>
		</GridItem>
	);
};

Box.propTypes = {
	
};

export default Box;
