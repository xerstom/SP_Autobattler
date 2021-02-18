import React from "react";

import Style from "./Card.module.css";

const Card = (props) => (
	<div className={Style.card}>
		<h4>{props.nickname}</h4>
		<h4 className="italic">{props.name}</h4>
		<img
			src={`/ressources/Card/${props.path}`}
			alt="Avatar"
			style={{ width: "100%" }}
		/>
		<div className={Style.container}>
			<div>Attack: {props.attack}</div>
			<div>Life: {props.life}</div>
		</div>
	</div>
);

export default Card;
