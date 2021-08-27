import React, { useState } from "react";
import styles from "./sidemenu.module.css";
function SideMenu() {
  const [board, findBoard] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    alert(`Submitting Search ${board}`);
  };
  return (
    <div className={styles.menustuff}>
      <header>
        <form>
          <h3> Find a board </h3>
          {handleSubmit}
          <input
            type="text"
            value={board}
            onChange={(e) => findBoard(e.target.value)}
          />
          <input type="submit" value="find that board" />
          <br />
          <br />
          <button> Create Board </button>
        </form>
      </header>
    </div>
  );
}

export default SideMenu;
