/* eslint-disable no-unused-vars */
import dynamic from "next/dynamic";
import Head from "next/head";

import FrontGameInterface from "../components/FrontGameInterface.js";
import Manager from "../core/GameManager.js";
import styles from "../styles/Home.module.css";

// Problems with SSR when using random to generate positions
const Game = dynamic( () => import("../components/Game.jsx"),
	{ ssr: false } );

const gameInterface = new FrontGameInterface();

export default function Home() {
	gameInterface.start();
	return (
		<Game gInterface={gameInterface}/>
	);
}
