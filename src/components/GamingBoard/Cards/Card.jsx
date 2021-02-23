import { Flex, IconButton } from "@chakra-ui/react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React from "react";

import { SellICon, SwapIcon } from "../Icon.jsx";
import Stats from "./Stats.jsx";



const Card = props => {
	const {
		card, sell, swap, interactable,
	} = props;
	const BorderedFlex = styled(Flex)`
		border: 10px solid transparent;
		border-image: url("ressources/border${card.level}.png") 54 round;

	`;
	return (
		<BorderedFlex boxShadow="xl" flexDirection="column" p={2} width="9.4vw" h="auto" mr={3} justifyContent="space-between" bg="gray.300" borderRadius="5%" >
			<Stats card={card}/>
			{
				interactable
					? <Flex flexDirection="row" h="10%" alignItems="flex-end" justifyContent="space-between">
						<IconButton maxHeight="100%" aria-label="sell" icon={<SellICon color="white"/>} onClick={sell} p={1} height="2rem"> </IconButton>
						<IconButton maxHeight="100%" aria-label="swap" icon={<SwapIcon color="white"/>} onClick={swap} p={1} height="2rem"> </IconButton>
					</Flex>
					: ""
			}
		</BorderedFlex>
	);
};

Card.propTypes = {
	card: PropTypes.object,
	interactable: PropTypes.bool,
	sell: PropTypes.func,
	swap: PropTypes.func,
};

export default Card;
