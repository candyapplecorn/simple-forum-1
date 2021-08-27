import Reply from "../model/reply";
import Post from "../model/post";

const mockReplyData: Reply[] = [
  {
    parent: "I like pie",
    createdAt: "8/12/2021",
    content: "Pie is just delicious",
    id: "1",
  },
  {
    parent: "I like pie",
    createdAt: "8/12/2021",
    content: "Pie is sweet",
    id: "1",
  },
  {
    parent: "I like pizza",
    createdAt: "7/23/2021",
    content:
      "If you french fry when youre supposed to pizza. You're gonna have a bad time",
    id: "2",
  },
  {
    parent: "I like pizza",
    createdAt: "7/23/2021",
    content: "pizza. fench fry.",
    id: "2",
  },
  {
    parent: "Weights are heavy",
    createdAt: "8/25/2021",
    content: "Lifting weights is just exhausting and I hate it.",
    id: "3",
  },
  {
    parent: "Weights are heavy",
    createdAt: "8/25/2021",
    content: "I like to life weights.",
    id: "3",
  },
  {
    parent: "Muscles are muscular",
    createdAt: "8/25/2021",
    content: "If your muscles get muscled then you're muscular",
    id: "4",
  },
  {
    parent: "Muscles are muscular",
    createdAt: "8/25/2021",
    content: "Muscles are dumb",
    id: "4",
  },
  {
    parent: "Movies are loud",
    createdAt: "8/13/2021",
    content: "can't they be quieter?",
    id: "5",
  },
  {
    parent: "Movies are loud",
    createdAt: "8/13/2021",
    content: "movies aren't loud enough",
    id: "5",
  },
  {
    parent: "Robert de niro",
    createdAt: "7/27/2021",
    content: "is an actor",
    id: "6",
  },
  {
    parent: "Robert de niro",
    createdAt: "7/27/2021",
    content: "as far back as I can remember I always wanted to be a gangster",
    id: "6",
  },
  {
    parent: "why taxes?",
    createdAt: "7/11/2021",
    content: "I don't want to pay them.",
    id: "7",
  },
  {
    parent: "why taxes?",
    createdAt: "7/11/2021",
    content: "I don't mind paying them",
    id: "7",
  },
  {
    parent: "who does my taxes?",
    createdAt: "8/15/2021",
    content: "can't I just do them?",
    id: "8",
  },
  {
    parent: "who does my taxes?",
    createdAt: "8/15/2021",
    content: "can't I just do them?",
    id: "8",
  },
  {
    parent: "do hollywoo stars know things?",
    createdAt: "8/19/2021",
    content: "well do they?",
    id: "9",
  },
  {
    parent: "do hollywoo stars know things?",
    createdAt: "8/19/2021",
    content: "they might",
    id: "9",
  },
  {
    parent: "pie is awful",
    createdAt: "8/13/2021",
    content: "That pie person is a liar and cake is the way to go",
    id: "10",
  },
  {
    parent: "pie is awful",
    createdAt: "8/13/2021",
    content: "what did you say about pie?",
    id: "10",
  },
];

export default mockReplyData;
