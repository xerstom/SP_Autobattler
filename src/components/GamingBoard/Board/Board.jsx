import { Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

import Card from "../Card/Card.jsx";

const Board = props => (
	<Flex flexDirection="row" p={2} w="100%" h="100%" bgColor="rgba(255, 255, 255, .40)">
		{
			props.user.board.map( (e, i) => <Card key={i} card={e}/>)
		}
	</Flex>
);

Board.propTypes = {
	user: PropTypes.object,
};
export default Board;
