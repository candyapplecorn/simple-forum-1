import mockData from "../mock-data/mock-board-data";
import { useParams } from "react-router-dom";
function BoardTitle() {
  const params = useParams();
  // @ts-ignore
  const boardTitle = params.boardTitle;

  return (
    <div>
      <header>
        <div>
          <h1>{boardTitle}</h1>
          <br />
          <hr />
        </div>
      </header>
    </div>
  );
}

export default BoardTitle;
