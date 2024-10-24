import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <body>
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>This project was coded by Cheryl R. Basopo and is <a href="https://github.com/crbasopo/react-dictionary">open-sourced on Github</a> and <a href="https://boisterous-manatee-6e17af.netlify.app">hosted on Neflify</a></small>
        </footer>
      </div>
    </div>
    </body>
  );
}
