import { Flex, IconButton } from "@chakra-ui/react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React from "react";

import { SellICon, SwapIcon } from "../Icon.jsx";
import Stats from "./Stats.jsx";


const BorderedFlex = styled(Flex)`
	border: 10px solid transparent;
	border-image: url("ressources/border${(props) => props.level}.png") 54 round;

`;

const Card = props => {
	const {
		card, sell, swap, interactable,
	} = props;
	return (
		<BorderedFlex level={card.level} boxShadow="xl" flexDirection="column" p={2} width="9.4vw" h="auto" mr={3} justifyContent="space-between" bg="gray.300" borderRadius="5%" >
			<Stats card={card}/>
			{
				interactable
					&& <Flex flexDirection="row" h="10%" w="7.4vw" alignItems="flex-end" justifyContent="space-between" flexWrap="wrap">
						<IconButton aria-label="sell" icon={<SellICon w="1vw" color="white"/>} onClick={sell} height="100%" w="1vw"> </IconButton>
						<IconButton aria-label="swap" icon={<SwapIcon color="white"/>} onClick={swap} height="1.5vw" w="3vw"> </IconButton>
					</Flex>
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
