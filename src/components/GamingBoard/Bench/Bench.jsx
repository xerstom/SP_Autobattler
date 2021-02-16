import PropTypes from "prop-types";
import React from "react";

const Bench = props => (
	<div>
		BENCH {props.user}
	</div>
);

Bench.propTypes = {
	user: PropTypes.string,
};

export default Bench;
