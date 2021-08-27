import mockData from "../mock-data/mock-board-data";
import styles from "./home.module.css";
import { Link, useRouteMatch } from "react-router-dom";
import { toUrl } from "../lib/url";
import Board from "../model/board";
import search from "../lib/search";

interface BoardListProps {
  query: string;
}

function BoardList(props: BoardListProps) {
  let match = useRouteMatch();

  const query = props.query;

  const matchingTitles: string[] = search(
    mockData.map((board) => board.title.toLowerCase()),
    query
  );

  return (
    <div>
      {mockData
        .filter((value: Board): boolean => {
          return query == "" ? true : matchingTitles.includes(value.title.toLowerCase());
        })
        .map((item, i) => (
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
