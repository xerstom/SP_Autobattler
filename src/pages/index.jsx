/* eslint-disable */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from '../components/GamingArea/Card/Card'
import Grid from '../components/Grid/Grid'

export default function Home() {
    // return ( <Card name = "Zeus"nickname = "The Supreme God"path = "Zeus.png"attack = "10" life = "100" > </Card>
	return (<Grid columns={10} rows={10}></Grid>);
}
