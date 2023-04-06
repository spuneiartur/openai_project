import ErrorButton from './ErrorButton';
import Header from './Header';
import React from 'react';
import { useState } from 'react';
import './App.css';
import Response from './Response';
import controller from './modules/controller';
import ChatHistory from './ChatHistory';
import './ChatHistory.css';

function App() {
  const [dataLength, setDataLength] = useState(0);
  controller.initApplication();

  // const myInput = 'mere bune';
  // const previous = ['pere', 'mere', 'repede'];
  // const letters = myInput.slice(-2);
  // try {
  //   controller.validateInput(myInput, previous, letters);
  //   console.log('Corect!');
  // } catch (err) {
  //   console.error(err.message);
  // }

  function inputHandlerSubmit(value) {
    controller.getResponseFromUser(value, setDataLength);
  }

  return (
    <div className="App">
      <Header />
      <ErrorButton />
      <ChatHistory
        inputHandlerSubmit={inputHandlerSubmit}
        chatHistoryArray={controller.chatHistoryArray}
        loading={controller.loading}
      ></ChatHistory>
    </div>
  );
}

export default App;
