import { Button, Flex, Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";


const Management = props => {
	const { levelUp, boardUp, user } = props;
	return (
		<Flex flexDirection="column" p={5} w="100%" h="100%" justifyContent="flex-end" alignItems="flex-end" >
			<Flex flexDirection="row" justifyContent="space-between" alignItems="center" w="12vw" >
				<Button w="100%" m={3} fontSize="1vw" onClick={boardUp}>Board size</Button>
				<Heading as="h3" fontSize="1.5vw"> { user.boardSize === 7 ? "MAX" : user.boardUpPrice}</Heading>
			</Flex>
			<Flex flexDirection="row" justifyContent="space-between" alignItems="center" w="12vw">
				<Button w="100%" fontSize="1vw" m={3} onClick={levelUp}>Level up</Button>
				<Heading as="h3" fontSize="1.5vw" > {user.level === 3 ? "MAX" : user.levelUpPrice}</Heading>
			</Flex>
		</Flex>
	);
};

Management.propTypes = {
	levelUp: PropTypes.func,
	boardUp: PropTypes.func,
	user: PropTypes.object,
};

export default Management;
