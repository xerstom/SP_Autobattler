import { Button, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState } from "react";

import Card from "../Card/Card.jsx";

const Market = props => {
	const [card, setCard] = useState(props.manager.createGameCard(0) );
	const rerollCard = () => {
		setCard(props.manager.createGameCard(0) );
	};

	const buyCard = () => {
		setCard(props.manager.createGameCard(0) );
	};

	return (
		<Flex flexDirection="row" p={2} w="100%" h="100%" bgColor="rgba(255, 255, 255, .40)">
			<Card card={card}></Card>
			<Flex flexDirection="column" justifyContent="space-between" p={2} h="100%">
				<Button onClick={rerollCard}>REROLL</Button>
				<Button onClick={buyCard}>BUY</Button>

			</Flex>
		</Flex>
	);
};

Market.propTypes = {
	manager: PropTypes.object,
	user: PropTypes.string,
};

export default Market;
