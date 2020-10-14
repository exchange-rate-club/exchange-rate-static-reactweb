import styles from "../styles/Home.module.css";

export default function Header(props) {
  return (
    <header className={styles.header}>
      <div>{props.children}</div>
    </header>
  );
}
