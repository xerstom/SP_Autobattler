import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

const Market = props => (
	<div>
		Market {props.user}
		<Button>REROLL</Button>
	</div>
);

Market.propTypes = {
	user: PropTypes.string,
};

export default Market;
