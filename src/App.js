import logo from "./logo.svg";
import "./App.css";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="center">Dashboard</h1>
        <div>
          <Posts></Posts>
        </div>
      </header>
    </div>
  );
}

export default App;
