import { Flex, IconButton } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

import MarketCard from "../Cards/MarketCard.jsx";
import { BuyIcon, RerollIcon } from "../Icon.jsx";

const Market = props => {
	const { buyCard, rerollCard, marketCard } = props;

	return (
		<Flex flexDirection="row" p={2} w="100%" h="100%" bgColor="gray.300" justifyContent="center" >
			<MarketCard card={marketCard}></MarketCard>
			<Flex flexDirection="column" justifyContent="space-between" p={2} h="100%">
				<IconButton icon={<RerollIcon color="white"/>} onClick={rerollCard}></IconButton>
				<IconButton icon={<BuyIcon color="white"/>} onClick={buyCard}></IconButton>

			</Flex>
		</Flex>
	);
};

Market.propTypes = {
	buyCard: PropTypes.func,
	rerollCard: PropTypes.func,
	marketCard: PropTypes.object,
};

export default Market;
