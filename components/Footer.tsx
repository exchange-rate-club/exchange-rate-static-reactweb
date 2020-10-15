import styles from "../styles/Home.module.css";

export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      <div>{props.children}</div>
      <div>
        <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
      </div>
    </footer>
  );
}
