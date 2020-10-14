import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function List() {
  return (
    <div className={styles.container}>
      <Head>
        <title>list</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div>list title</div>
      </header>

      <main className={styles.main}>
        <div>list</div>
        <div>
          <Link href="/">
            <button>this page!</button>
          </Link>
          <a href="/">
            <button>a链接this page!</button>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <div>list footer</div>
      </footer>
    </div>
  );
}
