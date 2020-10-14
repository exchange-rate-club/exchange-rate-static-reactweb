import styles from "../styles/Home.module.css";
import Header from "./Header";
import Footer from "./Footer";

export default function _Layout(props) {
  const { headerTitle, footerTitle } = props;
  return (
    <React.Fragment>
      <Header>{headerTitle}</Header>
      <main className={styles.main}>{props.children}</main>
      <Footer>{footerTitle}</Footer>
    </React.Fragment>
  );
}
