import Thread from "../model/thread";
import Post from "../model/post";

const mockThreadData: Thread[] = [
  {
    subject: "I like pie",
    board: "Foods N Things",
    createdAt: "8/12/2021",
    content: "Pie is just delicious",
    id: "1",
  },
  {
    subject: "I like pizza",
    board: "Foods N Things",
    createdAt: "7/23/2021",
    content:
      "If you french fry when youre supposed to pizza. You're gonna have a bad time",
    id: "2",
  },
  {
    subject: "Weights are heavy",
    board: "I'm  A Muscle Person",
    createdAt: "8/25/2021",
    content: "Lifting weights is just exhausting and I hate it.",
    id: "3",
  },
  {
    subject: "Muscles are muscular",
    board: "I'm  A Muscle Person",
    createdAt: "8/25/2021",
    content: "If your muscles get muscled then you're muscular",
    id: "4",
  },
  {
    subject: "Movies are loud",
    board: "What in the world is going on with movies",
    createdAt: "7/29/2021",
    content: "can't they be quieter?",
    id: "5",
  },
  {
    subject: "Robert de niro",
    board: "What in the world is going on with movies",
    createdAt: "7/27/2021",
    content: "is an actor",
    id: "6",
  },
  {
    subject: "why taxes?",
    board: "Taxes are hard",
    createdAt: "7/11/2021",
    content: "I don't want to pay them.",
    id: "7",
  },
  {
    subject: "who does my taxes?",
    board: "Taxes are hard",
    createdAt: "8/15/2021",
    content: "can't I just do them?",
    id: "8",
  },
  {
    subject: "do hollywoo stars know things?",
    board: "Hollywoo stars. Do they know things? What do they know? Let's find out.",
    createdAt: "8/19/2021",
    content: "well do they?",
    id: "9",
  },
  {
    subject: "pie is awful",
    board: "Foods N Things",
    createdAt: "8/13/2021",
    content: "That pie person is a lier and cake is the way to go",
    id: "10",
  },
];

export default mockThreadData;
