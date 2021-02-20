import { Flex, IconButton } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

import { SellICon, SwapIcon } from "../Icon.jsx";
import Stats from "./Stats.jsx";

const Card = props => {
	const { card, sell, swap, interactable } = props;
	return (
		<Flex flexDirection="column" p={2} w="100%" h="100%" mr={5} justifyContent="space-between" bgColor="rgba(255, 255, 255, .40)">
			<Stats card={card}/>
			{
				interactable
					? <Flex flexDirection="row" h="fit-content" justifyContent="space-between">
						<IconButton aria-label="sell" icon={<SellICon color="gray"/>} onClick={sell} p={1} height="2rem"> </IconButton>
						<IconButton aria-label="swap" icon={<SwapIcon color="gray"/>} onClick={swap} p={1} height="2rem"> </IconButton>
					</Flex>
					: ""
			}
		</Flex>
	);
};

Card.propTypes = {
	card: PropTypes.object,
	interactable: PropTypes.bool,
	sell: PropTypes.func,
	swap: PropTypes.func,
};

export default Card;
