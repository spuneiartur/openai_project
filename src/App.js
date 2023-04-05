import logo from "./logo.svg";
import "./App.css";
import ChatHistory from "./ChatHistory";
import "./ChatHistory.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>C.R.A.S.T. Hello World</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          
        </a>
        
      </header>
      <ChatHistory>
          
      </ChatHistory>  
    </div>
  );
}

export default App;
