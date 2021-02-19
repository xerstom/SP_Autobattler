import { Button, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState } from "react";

import MarketCard from "../Cards/MarketCard.jsx";

const Market = props => {
	const { manager, buyCard } = props;

	const [marketCard, setMarketCard] = useState(manager.createGameCard() );

	const reroll = () => {
		setMarketCard(manager.createGameCard() );
	};

	const buy = () => {
		if (buyCard() ) {
			// TODO REROLL PRICE
			reroll();
		}
	};

	return (
		<Flex flexDirection="row" p={2} w="100%" h="100%" bgColor="rgba(255, 255, 255, .40)">
			<MarketCard card={marketCard}></MarketCard>
			<Flex flexDirection="column" justifyContent="space-between" p={2} h="100%">
				<Button onClick={reroll}>REROLL</Button>
				<Button onClick={buy}>BUY</Button>

			</Flex>
		</Flex>
	);
};

Market.propTypes = {
	manager: PropTypes.object,
	buyCard: PropTypes.func,
};

export default Market;
