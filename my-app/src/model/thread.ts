import Board from "./board";
interface Thread extends Post {
  subject: string;
  board: Board;
}
export default Thread;
