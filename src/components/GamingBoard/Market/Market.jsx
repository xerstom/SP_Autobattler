import { Flex, IconButton } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState } from "react";

import MarketCard from "../Cards/MarketCard.jsx";
import { BuyIcon, RerollIcon } from "../Icon.jsx";

const Market = props => {
	const { gInterface, buyCard, rerollCard } = props;

	const [marketCard, setMarketCard] = useState(gInterface.getMarketCard() );

	const rerollNewCard = () => {
		rerollCard();
		gInterface.createMarketCard();
		setMarketCard(gInterface.getMarketCard() );
	};

	const reroll = () => {
		if (gInterface.rerollCard() ) {
			rerollNewCard();
		}
	};

	const buy = () => {
		if (buyCard() ) {
			rerollNewCard();
		}
	};

	return (
		<Flex flexDirection="row" p={2} w="100%" h="100%" bgColor="gray.300" >
			<MarketCard card={marketCard}></MarketCard>
			<Flex flexDirection="column" justifyContent="space-between" p={2} h="100%">
				<IconButton icon={<RerollIcon color="white"/>} onClick={reroll}></IconButton>
				<IconButton icon={<BuyIcon color="white"/>} onClick={buy}></IconButton>

			</Flex>
		</Flex>
	);
};

Market.propTypes = {
	gInterface: PropTypes.object,
	buyCard: PropTypes.func,
	rerollCard: PropTypes.func,
};

export default Market;
