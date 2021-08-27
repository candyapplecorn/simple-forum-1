import mockReplyData from "../mock-data/mock-reply-data";
import styles from "./home.module.css";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { toUrl } from "../lib/url";
import Reply from "../model/reply";
interface ThreadListProps {
  query: string;
}
interface ThreadCommentsProps {
  subject: string;
}


function ThreadComments(props: ThreadCommentsProps) {
  let match = useRouteMatch();
  const params = useParams();
  // @ts-ignore
  const boardTitle = params.boardTitle;
  console.log(boardTitle);

  const replys: Reply[] = mockReplyData.filter(
  (reply: Reply) => {
        return toUrl(reply.parent) === toUrl(props.subject);
      });

  return (
    <div>
      <header>
        <div className={styles.threads}>
        {replys.map((reply: Reply) => {
            return (<p>{reply.content}</p>)
        })}
        </div>
      </header>
    </div>
    )
}

export default ThreadComments;
