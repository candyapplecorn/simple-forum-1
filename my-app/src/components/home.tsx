import styles from "./home.module.css";
import SideMenu from "./side-menu";
import Title from "./title";
import BoardList from "./board-list";

function Home() {
  return (
    <div className={styles.homepage}>
      <div className={styles.test}>
        <Title />
        <BoardList />
      </div>
      <div className={styles.frontmenu}>
        <SideMenu />
      </div>
    </div>
  );
}

export default Home;
