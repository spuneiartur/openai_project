import logo from "./logo.svg";
import "./App.css";
import Input from "./Input";
import "./Input.css";
import ChatHistory from "./ChatHistory";
import "./ChatHistory.css";

function App() {
  return (
    <div className="App">
      <ChatHistory></ChatHistory>
      <Input></Input>
    </div>
  );
}

export default App;
