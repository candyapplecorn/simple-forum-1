import mockData from "../mock-data/mock-board-data";
import styles from "./home.module.css";
import BoardTitle from "./board-title";
import BoardThreads from "./board-threads";

function Board() {
  return (
    <div className={styles.homepage}>
      <div className={styles.test}>
        <BoardTitle />
        <BoardThreads />
      </div>
    </div>
  );
}

export default Board;
