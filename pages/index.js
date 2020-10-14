import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>index</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div>index title</div>
      </header>

      <main className={styles.main}>
        <div>index</div>
        <div>
          Learn <a href="https://nextjs.org">Next.js!</a>
        </div>

        <div>
          <Link href="/list">
            <button>this page!</button>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <div>index footer</div>
      </footer>
    </div>
  );
}
