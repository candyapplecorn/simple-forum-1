import styles from "./home.module.css";
import ThreadSubject from "./thread-subject";
import ThreadComments from "./thread-comments";
import ThreadText from "./thread-text";
import Thread from "../model/thread";
import { Link, useParams } from "react-router-dom";
import mockThreadData from "../mock-data/mock-thread-data";
import { toUrl } from "../lib/url";

interface ThreadProps {
  thread: Thread;
}

function ThreadView(props: ThreadProps) {
  const params = useParams();
  // @ts-ignore
  const threadTitle = params.threadTitle;

  const currentThread: Thread = mockThreadData
    .filter((thread: Thread): boolean => {
      return toUrl(thread.subject) === toUrl(threadTitle);
    })
    .pop()!;

  return (
    <div className={styles.homepage}>
      <div className={styles.test}>
        <Link to={"/"}>home</Link>
        <ThreadSubject subject={currentThread.subject} />
        <ThreadText text={currentThread.content} />
        <ThreadComments subject={currentThread.subject}/>
      </div>
    </div>
  );
}

export default ThreadView;
