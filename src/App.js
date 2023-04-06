
import Header from "./Header";
import "./Header.css"
import logo from './logo.svg';
import './App.css';
import Response from './Response';
import controller from './modules/controller';
import ChatHistory from "./ChatHistory";
import "./ChatHistory.css";


function App() {
  const myInput = 'mere bune';
  const previous = ['pere', 'mere', 'repede'];
  const letters = myInput.slice(-2);
  try{
    controller.validateInput(myInput,previous,letters);
    console.log('Corect!');
  }catch(err){
    console.error(err.message);
  }




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
