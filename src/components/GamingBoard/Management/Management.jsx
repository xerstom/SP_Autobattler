import { Button, Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

const Management = props => (
	<Flex flexDirection="column" p={5} w="100%" h="100%" bgColor="rgba(255, 255, 255, .40)">
		<Text>hi</Text>
		<Button>Board size</Button>
		<Button>Level up</Button>
	</Flex>
);

Management.propTypes = {
	
};

export default Management;
