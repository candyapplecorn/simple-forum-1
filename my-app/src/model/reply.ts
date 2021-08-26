import Thread from "./thread";
import Post from "./post";
interface Reply extends Post {
  parent: Thread;
}

export default Reply;
