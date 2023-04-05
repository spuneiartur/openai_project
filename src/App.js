import logo from './logo.svg';
import './App.css';
import Response from './Response';
import controller from './modules/controller';

import ChatHistory from "./ChatHistory";
import "./ChatHistory.css";

function App() {
  return (
    <div className="App">
      <ChatHistory></ChatHistory>
    </div>
  );
}

export default App;
