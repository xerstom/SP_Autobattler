import PropTypes from "prop-types";
import React from "react";

import Bench from "./Bench/Bench.jsx";
import Board from "./Board/Board.jsx";
import Market from "./Market/Market.jsx";

const GamingBoard = props => (
	<>
		GAMING BOAARD
		<Board/>
		<Bench/>
		<Market/>
	</>
);

GamingBoard.propTypes = {
	
};

export default GamingBoard;
