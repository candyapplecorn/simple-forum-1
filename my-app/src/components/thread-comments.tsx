import mockData from "../mock-data/mock-board-data";
function ThreadComments() {
/*need to create mock data for comments
 */
  return (
    <div>
      <header>
        <div>
          {mockData.map((item, i) => (
            <tr key={i}>
              <h1>{item.title}</h1>
              <br />
              <hr />
            </tr>
          ))}
        </div>
      </header>
    </div>
  );
}

export default ThreadComments;