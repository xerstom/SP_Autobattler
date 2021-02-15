import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState } from "react";

import GamingBoard from "./GamingBoard/GamingBoard.jsx";
import GamingMap from "./GamingMap/GamingMap.jsx";



const Game = props => {
	const { manager } = props;
	const [view, setView] = useState(true);

	const changeView = () => {
		setView(!view);
	};

	return (
		<div>
			{
				view === true
					? <GamingMap manager={manager}/>
					: <GamingBoard manager={manager}/>
			}
			<Button onClick={changeView}>{ view ? ">>" : "<<" }</Button>
		</div>
	);
};

Game.propTypes = {
	manager: PropTypes.object,
};

export default Game;
