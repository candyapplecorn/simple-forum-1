import mockData from "../mock-data/mock-board-data";
import styles from "./home.module.css";
function BoardThreads() {

/*need to create mock data for threads
 */
  return (
    <div>
      <header>
        <div className ={styles.threads}>
          {mockData.map((item, i) => (
            <tr key={i}>
              <button value={item.title}>{item.title}</button>
              <br />
              <hr  />
            </tr>
          ))}
        </div>
      </header>
    </div>
  );
}

export default BoardThreads;