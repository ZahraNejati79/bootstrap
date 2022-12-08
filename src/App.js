import "./App.css";
import useFetch from "./Hook/useFetch";

function App() {
  const { error, loading, data } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <div className="App">
      <div>salam</div>
      {error && <div>{error}</div>}
      {loading && <div>loading</div>}
      {data && (
        <div>
          {data.map((data) => {
            return <div key={data.id}>{data.name}</div>;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
