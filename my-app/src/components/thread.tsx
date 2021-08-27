import mockData from "../mock-data/mock-board-data";
import styles from "./home.module.css";
import ThreadSubject from "./thread-subject";
import ThreadComments from "./thread-comments";

function Board() {
  return (
    <div className={styles.homepage}>
      <div className={styles.test}>
        <ThreadSubject  />
        <ThreadComments />
      </div>
    </div>
  );
}

export default Board;
