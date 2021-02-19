import { Flex, IconButton } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState } from "react";

import MarketCard from "../Cards/MarketCard.jsx";
import { BuyIcon, RerollIcon } from "../Icon.js";

const Market = props => {
	const { manager, buyCard, rerollCard } = props;

	const [marketCard, setMarketCard] = useState(manager.getMarketCard() );

	const rerollNewCard = () => {
		rerollCard();
		manager.createGameCard();
		setMarketCard(manager.getMarketCard() );
	};
	const reroll = () => {
		if (manager.rerollCard() ) {
			rerollNewCard();
		}
	};

	const buy = () => {
		if (buyCard() ) {
			rerollNewCard();
		}
	};

	return (
		<Flex flexDirection="row" p={2} w="100%" h="100%" bgColor="rgba(255, 255, 255, .40)">
			<MarketCard card={marketCard}></MarketCard>
			<Flex flexDirection="column" justifyContent="space-between" p={2} h="100%">
				<IconButton icon={<RerollIcon color="gray"/>} onClick={reroll}></IconButton>
				<IconButton icon={<BuyIcon color="gray"/>} onClick={buy}></IconButton>

			</Flex>
		</Flex>
	);
};

Market.propTypes = {
	manager: PropTypes.object,
	buyCard: PropTypes.func,
	rerollCard: PropTypes.func,
};

export default Market;
