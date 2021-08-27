import mockData from "../mock-data/mock-board-data";
import { Link, useParams } from "react-router-dom";

interface ThreadSubjectProps {
  subject: string;
}

function ThreadSubject(props: ThreadSubjectProps) {
  /*need to figure out how to conditionally pull an item
 from the map. would need to pass the string from either
 the pressed button on main page, the entered subject from
 the search, or the created thread.
 */
  return (
    <div>
      <header>
        <div><h1>{props.subject}</h1></div>
      </header>
    </div>
  );
}

export default ThreadSubject;
