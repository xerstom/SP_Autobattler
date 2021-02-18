/* eslint-disable no-unused-vars */
import dynamic from "next/dynamic";
import Head from "next/head";

import Manager from "../core/GameManager.js";
import styles from "../styles/Home.module.css";

// Problems with SSR when using random to generate positions
const Game = dynamic( () => import("../components/Game.jsx"),
	{ ssr: false } );

const manager = new Manager();
export default function Home() {
	manager.start();
	return (
		<Game manager={manager}/>
	);
}
