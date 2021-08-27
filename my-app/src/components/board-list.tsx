import mockData from "../mock-data/mock-board-data";
import styles from "./home.module.css";


function BoardList() {
  return (


        <div>
          {mockData.map((item, i) => (
            <tr key={i}>
              <button className={styles.board}>{item.title}</button>
              <br />
              <hr className={styles.hr1}/>
            </tr>
          ))}
        </div>

  );
}

export default BoardList;