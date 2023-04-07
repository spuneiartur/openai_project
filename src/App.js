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
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    controller.initApplication(setDataLength);
  }, []);

  const handleShowError = () => {
    setShowError(true);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      setShowError(false);
    }
  };

  function inputHandlerSubmit(value) {
    try {
      controller.getResponseFromUser(
        value,
        setDataLength,
        setShowError,
        setErrorMessage
      );
    } catch (err) {
      controller.initApplication(
        setDataLength,
        err.message + '. Paste a word to restart game 😁',
        setShowError
      );
      setShowError(true);
      setErrorMessage(err.message);
    }
  }

  return (
    <div className="App" onKeyDown={handleKeyDown}>
      <Header />
      <ChatHistory
        inputHandlerSubmit={inputHandlerSubmit}
        chatHistoryArray={controller.chatHistoryArray}
        loading={controller.loading}
        handleShowError={handleShowError}
        displayError={displayError}
        setShowError={setShowError}
        errorMessage={errorMessage}
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
