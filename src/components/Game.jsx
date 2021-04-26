
import { useDisclosure } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState } from "react";

import GamingBoard from "./GamingBoard/GamingBoard.jsx";
import GamingMap from "./GamingMap/GamingMap.jsx";
import ModalComponent from "./ModalComponent.jsx";

const Game = props => {
	const { gInterface } = props;
	const [view, setView] = useState(true);
	const [gameState, setGameState] = useState("");
	const { isOpen, onOpen, onClose } = useDisclosure();
	
	const changeView = () => {
		setView(!view);
	};
	const openModal = gs => {
		setGameState(gs);
		onOpen();
	};

	return (
		<div>
			{
				view === true
					? <GamingMap openModal={openModal} gameState={gameState} gInterface={gInterface} onClickHandler={changeView}/>
					: <GamingBoard gInterface={gInterface} onClickHandler={changeView}/>
			}
			<ModalComponent gameState={gameState} isOpen={isOpen} onClose={onClose} ></ModalComponent>
		</div>
		
	);
};

Game.propTypes = {
	gInterface: PropTypes.object,
};

export default Game;
