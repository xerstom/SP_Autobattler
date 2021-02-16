import { Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

const Profile = props => (
	<Flex flexDirection="column" p={5} w="100%" h="100%" bgColor="rgba(255, 255, 255, .40)">
		<Text>Profile: {props.user.name}</Text>
		<Text>HP: {props.user.life}</Text>
		<Text>Money: {props.user.money}</Text>
	</Flex>

);

Profile.propTypes = {
	manager: PropTypes.object,
	user: PropTypes.object,
};

export default Profile;
