import { Button, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

const Management = props => {
	const { levelUp, boardUp } = props;
	return (
		<Flex flexDirection="column" p={5} w="100%" h="100%" justifyContent="flex-end" alignItems="flex-end" >
			<Button w="100%" m={3} onClick={boardUp}>Board size</Button>
			<Button w="100%" m={3} onClick={levelUp}>Level up</Button>
		</Flex>
	);
};

Management.propTypes = {
	levelUp: PropTypes.func,
	boardUp: PropTypes.func,
};

export default Management;
