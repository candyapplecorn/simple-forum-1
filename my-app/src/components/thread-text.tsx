import mockThreadData from "../mock-data/mock-thread-data";
import Thread from "../model/thread";

interface ThreadTextProps {
  text: string;
}
function ThreadText(props: ThreadTextProps) {
  /*need to figure out how to conditionally pull an item
 from the map. would need to pass the string from either
 the pressed button on main page, the entered subject from
 the search, or the created thread.
 */
  const text: string = props.text;

  return (
    <div>
      <header>
        <div>{text}</div>
      </header>
    </div>
  );
}

export default ThreadText;
