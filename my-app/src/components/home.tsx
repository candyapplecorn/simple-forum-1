import mockData from "../mock-data/mock-board-data";
import styles from "./home.module.css";

function Home() {
  return (
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
  );
}

export default Home;
