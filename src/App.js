import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This project is coded by{" "}
            <a
              href="https://peppy-pika-fa046e.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lacey Chaney
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/LaceyTN/react-weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
