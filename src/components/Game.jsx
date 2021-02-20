
import PropTypes from "prop-types";
import React, { useState } from "react";

import GamingBoard from "./GamingBoard/GamingBoard.jsx";
import GamingMap from "./GamingMap/GamingMap.jsx";

const Game = props => {
	const { gInterface } = props;
	const [view, setView] = useState(true);

	const changeView = () => {
		setView(!view);
	};

	return (
		<div>
			{
				view === true
					? <GamingMap gInterface={gInterface} onClickHandler={changeView}/>
					: <GamingBoard gInterface={gInterface} onClickHandler={changeView}/>
			}
		</div>
	);
};

Game.propTypes = {
	gInterface: PropTypes.object,
};

export default Game;
