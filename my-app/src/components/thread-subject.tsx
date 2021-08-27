import mockData from "../mock-data/mock-board-data";
function ThreadSubject() {
  /*need to figure out how to conditionally pull an item
 from the map. would need to pass the string from either
 the pressed button on main page, the entered subject from
 the search, or the created thread.
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

export default ThreadSubject;
