import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import _Layout from "../components/_Layout";

export default function List() {
  return (
    <div className={styles.container}>
      <Head>
        <title>list</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <_Layout headerTitle="list header" footerTitle="list footer">
        <div>list</div>
        <div>
          <Link href="/">
            <button>this page!</button>
          </Link>
          <a href="/">
            <button>a链接this page!</button>
          </a>
        </div>
      </_Layout>
    </div>
  );
}
