import { Button, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

import Stats from "./Stats.jsx";

const Card = props => {
	const { card, sell, swap, interactable } = props;
	return (
		<Flex flexDirection="column" p={2} w="100%" h="100%" mr={5} justifyContent="space-between" bgColor="rgba(255, 255, 255, .40)">
			<Stats card={card}/>
			{
				interactable
					? <Flex flexDirection="row" h="fit-content" justifyContent="space-between">
						<Button onClick={sell} p={1} fontSize={12} height="2rem">Vendre</Button>
						<Button onClick={swap} p={1} fontSize={12} height="2rem">Swap</Button>
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
