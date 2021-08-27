import mockData from "../mock-data/mock-board-data";
import styles from "./home.module.css";
import SideMenu from "./side-menu";

function Home() {
  let menu = <SideMenu />;
  return (
    <div className={styles.homepage}>
      <div className={styles.test}>
        <header className={styles.header}>
          <h1>Welcome to forumsAreUs</h1>
        </header>
        <body className={styles.tester}>
          {mockData.map((item, i) => (
            <tr key={i}>
              <button className={styles.board}>{item.title}</button>
              <br />
              <br />
            </tr>
          ))}
        </body>
      </div>
      <div className={styles.frontmenu}>
        <body><SideMenu /></body>
      </div>
    </div>
  );
}

export default Home;
