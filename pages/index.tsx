import type { NextPage } from "next";
import Head from "next/head";

// stylesheet
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>WalletConnect - Web3Modal</title>
        <meta name="description" content="Wallet Connect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
