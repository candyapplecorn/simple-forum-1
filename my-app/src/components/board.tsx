import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Board() {
  const params = useParams();
  // @ts-ignore
  const boardTitle = params.boardTitle;

  return (
    <div>
      <Link to={"/"}>home</Link>
      <h1>Welcome to</h1>
      <h2>{boardTitle}</h2>
    </div>
  );
}

export default Board;
