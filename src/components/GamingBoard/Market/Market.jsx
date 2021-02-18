import { Button, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

import Card from "../Card/Card.jsx";

const Market = props => {
	const { card, rerollCard, buyCard } = props;
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
	card: PropTypes.object,
	rerollCard: PropTypes.func,
	buyCard: PropTypes.func,
};

export default Market;
