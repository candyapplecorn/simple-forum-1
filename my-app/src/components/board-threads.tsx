import mockThreadData from "../mock-data/mock-thread-data";
import styles from "./home.module.css";
import { useParams } from "react-router-dom";
import { toUrl } from "../lib/url";
function BoardThreads() {
  const params = useParams();
  // @ts-ignore
  const boardTitle = params.boardTitle;
  console.log(boardTitle);
  return (
    <div>
      <header>
        <div className={styles.threads}>
          {mockThreadData
            .filter((thread) => toUrl(thread.board).includes(toUrl(boardTitle)))
            .map((filteredThread) => (
              <div>
                <button value={filteredThread.subject}>
                  {filteredThread.subject}
                </button>
                <br />
                <hr />
              </div>
            ))}
        </div>
      </header>
    </div>
  );
}

export default BoardThreads;
