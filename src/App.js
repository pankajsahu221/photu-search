import "./App.css";
import Gallery from "./components/Gallery";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div className="App">
      <h1>Welcome to the PhotuSearch</h1>
      <SearchBox />
      <Gallery />
    </div>
  );
}

export default App;
