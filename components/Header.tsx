import styles from "../styles/Home.module.css";

export default function Header(props: { children: React.ReactElement }) {
  return (
    <header className={styles.header}>
      <div>{props.children}</div>
    </header>
  );
}
