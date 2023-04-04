import logo from "./logo.svg";
import "./App.css";
import Input from "./Input";
import "./Input.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>C.R.A.S.T. Hello World</p>
        <Input></Input>
      </header>
    </div>
  );
}

export default App;
