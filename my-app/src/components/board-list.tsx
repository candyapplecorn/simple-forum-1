import mockData from "../mock-data/mock-board-data";
import styles from "./home.module.css";
import { Link, useRouteMatch } from "react-router-dom";
import { toUrl } from "../lib/url";

function BoardList() {
  let match = useRouteMatch();

  return (
    <div>
      {mockData.map((item, i) => (
        <Link to={`${match.url}/${toUrl(item.title)}`}>
          <tr key={i}>
            <button className={styles.board} value={item.title}>
              {item.title}
            </button>
            <br />
            <hr className={styles.hr1} />
          </tr>
        </Link>
      ))}
    </div>
  );
}

export default BoardList;
