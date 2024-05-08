import "./App.css";
import List from "./components/List/List";
import data from "./data/data";

function App() {
  return (
    <div className="App">
      <List data={data} />
    </div>
  );
}

export default App;
