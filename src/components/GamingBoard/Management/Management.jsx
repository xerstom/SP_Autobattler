import { Button, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

const Management = props => {
	const { levelUp, boardUp } = props;
	return (
		<Flex flexDirection="column" p={5} w="100%" h="100%" bgColor="rgba(255, 255, 255, .40)">
			<Button onClick={boardUp}>Board size</Button>
			<Button onClick={levelUp}>Level up</Button>
		</Flex>
	);
};

Management.propTypes = {
	levelUp: PropTypes.func,
	boardUp: PropTypes.func,
};

export default Management;
