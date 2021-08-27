import React, { useState } from "react";
import styles from "./sidemenu.module.css";

interface SideMenuProps {
  setQuery: (query: string) => void;
}

function SideMenu(props: SideMenuProps) {
  return (
    <div className={styles.menustuff}>
      <header>
        <form>
          <h3>Search Boards</h3>
          <input type="text" onChange={(e) => props.setQuery(e.target.value)} />
        </form>
      </header>
    </div>
  );
}

export default SideMenu;
