import Thread from "./thread";
import Post from "./post";

interface Reply extends Post {
  parent: string;
}

export default Reply;
