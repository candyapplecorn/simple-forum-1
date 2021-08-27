import styles from "./home.module.css";
import SideMenu from "./side-menu";
import Title from "./title";
import BoardList from "./board-list";
import { useState } from 'react';

function Home() {
  const boards = []
    const [query, setQuery] = useState("")

  return (
    <div className={styles.homepage}>
      <div className={styles.test}>
        <Title />
        <BoardList query={query} />
      </div>
      <div className={styles.frontmenu}>
        <SideMenu setQuery={setQuery} />
      </div>
    </div>
  );
}

export default Home;
