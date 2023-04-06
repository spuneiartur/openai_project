import ErrorButton from './ErrorButton';
import Header from './Header';
import './App.css';
import Response from './Response';
import controller from './modules/controller';
import ChatHistory from './ChatHistory';
import './ChatHistory.css';
import React, { useState } from 'react';

function inputHandlerSubmit(value) {
  controller.getResponseMessage(value, 'user');
  //setDataLength(controller.chatHistoryArray.length);
}

function App() {
  //const [dataLength, setDataLength] = useState(0);
  //controller.initApplication();

  const [displayError, setShowError] = useState(false);

  const handleShowError = () => {
    setShowError(true);
  }
  // const myInput = 'mere bune';
  // const previous = ['pere', 'mere', 'repede'];
  // const letters = myInput.slice(-2);
  // try {
  //   controller.validateInput(myInput, previous, letters);
  //   console.log('Corect!');
  // } catch (err) {
  //   console.error(err.message);
  // }

  return (
    <div className="App">
       <header className="App-header" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <button onClick={handleShowError}>Show Error</button>
      {displayError && <ErrorButton />}
      </header>
      <Header />
      
      <ErrorButton />
      <ChatHistory
      
        inputHandlerSubmit={inputHandlerSubmit}
        chatHistoryArray={controller.chatHistoryArray}
      ></ChatHistory>
       
    </div>
    
  );
  
}
export default App;