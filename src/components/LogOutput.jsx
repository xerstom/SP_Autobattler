import { Code, Flex } from "@chakra-ui/layout";
import PropTypes from "prop-types";
import React from "react";

const LogOutput = props => {
	const { summary, minH, maxH } = props;
	return (
		<Flex minH={minH || "auto"} maxH={maxH || "auto"} w="100%" overflow="auto" flexDirection="column" alignItems="center" justifyContent="center" >
			<Flex flexDirection="column" alignItems="flex-start" justifyContent="center">
				{
					summary.map( (e, i) => (<Code mt="0.8vh" w="fit-content" overflowWrap="break-word" variant="outline" colorScheme="blackAlpha" key={i}>{e}</Code>) )
				}
			</Flex>
		</Flex>
	);
};

LogOutput.propTypes = {
	summary: PropTypes.array,
	minH: PropTypes.string,
	maxH: PropTypes.string,
};

export default LogOutput;
