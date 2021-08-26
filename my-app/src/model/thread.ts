import Board from "./board";
import Post from "./post";
interface Thread extends Post {
  subject: string;
  board: Board;
}
export default Thread;
