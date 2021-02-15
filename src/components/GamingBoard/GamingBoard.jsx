import PropTypes from "prop-types";
import React from "react";

import Bench from "./Bench/Bench.jsx";
import Board from "./Board/Board.jsx";
import Market from "./Market/Market.jsx";

const GamingBoard = props => {
	const { manager } = props;
	return (
		<>
		GAMING BOAARD
		Agents:
			{
				manager.agents.map(e => `${e.name} `)
			}
			<Board manager={manager}/>
			<Bench manager={manager}/>
			<Market manager={manager}/>
		</>
	);
};

GamingBoard.propTypes = {
	manager: PropTypes.object,
};

export default GamingBoard;
