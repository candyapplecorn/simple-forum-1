import mockData from "../mock-data/mock-board-data";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.test}>
      <header className="Home-header">
        <h1>Welcome to forumsAreUs</h1>
      </header>
      <body>
        {mockData.map((item, i) => (
          <tr key={i}>
            <td>{item.title}</td>
            <br/>
            <br/>
          </tr>
        ))}
      </body>
    </div>
  );
}

export default Home;
