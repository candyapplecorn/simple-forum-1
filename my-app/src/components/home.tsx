import mockData from "../mock-data/mock-board-data";

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Welcome to forumsAreUs</h1>
      </header>
      <body>
        {mockData.map((item, i) => (
          <tr key={i}>
            <td>{item.title}</td>
          </tr>
        ))}
      </body>
    </div>
  );
}

export default Home;
