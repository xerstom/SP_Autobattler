import PropTypes from "prop-types";
import React from "react";

const Board = props => (
	<div>
		Board {props.user}
	</div>
);

Board.propTypes = {
	user: PropTypes.string,
};
export default Board;
