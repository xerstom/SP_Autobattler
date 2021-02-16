import PropTypes from "prop-types";
import React from "react";

const Profile = props => (
	<div>
			Profile {props.user}
	</div>
);

Profile.propTypes = {
	user: PropTypes.string,
};

export default Profile;
