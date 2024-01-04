import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Kelsey Foster and is open-source on{" "}
          <a href="https://github.com/04kelfos/react-final" target="_blank">
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
