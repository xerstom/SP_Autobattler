import { Box, Button, Code, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

import Grid from "./Grid/Grid.jsx";

const GamingMap = props => {
	const borders = { x1: 0, x2: 9, y1: 0, y2: 9 };
	const nextBorders = { x1: 0, x2: 8, y1: 0, y2: 9 };
	return (
		<Flex>
			<Grid columns={10} rows={10} borders={borders} nextBorders={nextBorders} mouvementPoints={5} ></Grid>
			<Flex flexDirection="column" justifyContent="space-between" w="100%">

				<Flex h="100%" alignItems="flex-end" justifyContent="flex-end">
					<Button w="10%" onClick={props.onClickHandler}>{ ">>" }</Button>
				</Flex>
				<Box h="50vh">
					<Code h="100%" w="100%">La partie input</Code>
				</Box>
			</Flex>

		</Flex>
	);
};

GamingMap.propTypes = {
	
};
	
export default GamingMap;
