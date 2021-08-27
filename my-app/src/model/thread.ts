import Board from "./board";
import Post from "./post";
interface Thread extends Post {
  subject: string;
  board: string;
}
export default Thread;
