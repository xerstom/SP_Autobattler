import { Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

import Agent from "../../GamingMap/AgentDisplayer/Agent/Agent.jsx";

const Profile = props => (
	<Agent agent={props.user}>
	</Agent>
);

Profile.propTypes = {
	user: PropTypes.object,
};

export default Profile;
