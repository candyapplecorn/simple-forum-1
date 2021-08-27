import mockData from "../mock-data/mock-board-data";
function BoardThreads() {
/*need to create mock data for threads
 */
  return (
    <div>
      <header>
        <div>
          {mockData.map((item, i) => (
            <tr key={i}>
              <h1>{item.title}</h1>
              <br />
              <hr  />
            </tr>
          ))}
        </div>
      </header>
    </div>
  );
}

export default BoardThreads;