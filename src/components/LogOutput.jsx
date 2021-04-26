import { Code, Flex, Text } from "@chakra-ui/layout";
import PropTypes from "prop-types";
import React from "react";

import { COLORS } from "../core/utils/constants.js";


const generateOutputText = (colors, sentence) => {
	const splited = sentence.split(" ");
	return splited.map(e => (colors.find( (c) => c.toLowerCase() === e.toLowerCase() ) ? <Text key={e} fontWeight="900" display="inline" textShadow="0px 1px 0px rgba(150, 150, 150, 1)" color={e.toLowerCase()}>{`${e} `} </Text> : `${e} `) );
};
const LogOutput = props => {
	const { summary, minH, maxH } = props;
	return (
		<Flex minH={minH || "auto"} maxH={maxH || "auto"} mt="8vh" w="100%" overflow="auto" flexDirection="column" alignItems="center" justifyContent="center" >
			<Flex flexDirection="column" alignItems="flex-start" justifyContent="center">
				{
					summary.map( (e, i) => (<Code fontSize="1vw" display="" mt="0.8vh" w="fit-content" overflowWrap="break-word" variant="outline" colorScheme="blackAlpha" key={i}> {generateOutputText(COLORS, e)}</Code>) )
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
