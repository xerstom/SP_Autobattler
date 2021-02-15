import PropTypes from "prop-types";
import React from "react";

import Grid from "./Grid/Grid.jsx";

const GamingMap = props => {
	const borders = { x1: 1, x2: 5, y1: 1, y2: 9 };
	return (
		<>
		GAMING MAAAP
			<Grid columns={10} rows={10} borders={borders} ></Grid>
		</>
	);
};

GamingMap.propTypes = {
	
};
	
export default GamingMap;
