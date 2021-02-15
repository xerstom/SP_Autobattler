/* eslint-disable no-unused-vars */
import Head from "next/head";

import Game from "../components/Game.jsx";
import Manager from "../core/GameManager.js";
import styles from "../styles/Home.module.css";

const manager = new Manager();
export default function Home() {
	manager.start();
	return (
		<Game manager={manager}/>
	);
}
