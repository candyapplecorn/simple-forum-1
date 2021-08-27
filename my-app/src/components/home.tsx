import mockData from "../mock-data/mock-board-data";
import styles from "./home.module.css";
import SideMenu from "./side-menu";
import Title from "./title";
import BoardList from "./board-list";

function Home() {
  return (
    <div className={styles.homepage}>
      <div className={styles.test}>
        <Title />
        <div className={styles.tester}>
         <BoardList />
        </div>
      </div>
      <div className={styles.frontmenu}>
        <body><SideMenu /></body>
      </div>
    </div>
  );
}

export default Home;
