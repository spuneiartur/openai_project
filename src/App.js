import ErrorButton from './ErrorButton';
import Header from './Header';
import './App.css';
import Response from './Response';
import controller from './modules/controller';
import ChatHistory from './ChatHistory';
import './ChatHistory.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [dataLength, setDataLength] = useState(0);
  const [displayError, setShowError] = useState(false);

  useEffect(() => {
    controller.initApplication(setDataLength);
  }, []);

  const handleShowError = () => {
    setShowError(true);
  };

  function inputHandlerSubmit(value) {
    try {
      controller.getResponseFromUser(value, setDataLength);
    } catch (err) {
      controller.initApplication(
        setDataLength,
        err.message + '. Paste a word to restart game 😁'
      );
      console.error(err.message);
    }
  }

  return (
    <div className="App">
      <Header />
      {/* <button onClick={handleShowError}>Show Error</button>
        {displayError && <ErrorButton />}
        <ErrorButton /> */}
      <ChatHistory
        inputHandlerSubmit={inputHandlerSubmit}
        chatHistoryArray={controller.chatHistoryArray}
        loading={controller.loading}
      ></ChatHistory>
    </div>
  );
}
export default App;

// const myInput = "fasdfsa";
//   const letters = myInput.slice(-2);
//   const greseala = "XXX";
//   controller.settingOpenAI_API();
//   try {
//     const prompt = `
//       Ne vom juca un joc cu reguli foarte stricte. Sa le urmaresti si le recitesti la fiecare mesaj.
//       Te rog sa nu pui punct la final de propozitie niciodata.
//       Nu ai voie sa trimiti mai mult de un cuvant pe mesaj.
//       Verifica dex online pentru cuvinte.
//       Daca cuvantul ${myInput} exista in dex online, spune-mi un cuvant simplu care sa inceapa cu literele ${letters}.
//       Daca ${myInput} nu exista in dex online, spune-mi ${greseala}
//     `
//     controller.getResponse(prompt);
//   } catch(error) {
//     console.errore(error);
//   }
