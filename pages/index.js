import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from 'next/link'
import _Layout from "../components/_Layout";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>index</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <_Layout headerTitle="index header" footerTitle="index footer">
        <div>index</div>
        <div>
          Learn <a href="https://nextjs.org">Next.js!</a>
        </div>

        <div>
          <Link href="/list">
            <button>this page!</button>
          </Link>
        </div>
      </_Layout>
    </div>
  );
}
