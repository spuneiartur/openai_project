import logo from './logo.svg';
import './App.css';
import Response from './Response';
import controller from './modules/controller';

import ChatHistory from './ChatHistory';
import './ChatHistory.css';

function App() {
  function inputHandlerSubmit(value) {
    console.log(value);
  }

  return (
    <div className="App">
      <ChatHistory inputHandlerSubmit={inputHandlerSubmit}></ChatHistory>
    </div>
  );
}

export default App;
