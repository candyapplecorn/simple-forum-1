import Thread from "./thread";
interface Reply extends Post {
  parent: Thread;
}

export default Reply;
