import mockData from "../mock-data/mock-board-data";
function ThreadText() {
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
              <p>{item.title}</p>
              <br />
              <hr />
            </tr>
          ))}
        </div>
      </header>
    </div>
  );
}

export default ThreadText;
