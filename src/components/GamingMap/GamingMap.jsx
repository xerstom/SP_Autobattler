import PropTypes from "prop-types";
import React from "react";

import Grid from "./Grid/Grid.jsx";

const GamingMap = props => (
	<>
		GAMING MAAAP
		<Grid columns={10} rows={10}></Grid>
	</>
);

GamingMap.propTypes = {
	
};
	
export default GamingMap;
