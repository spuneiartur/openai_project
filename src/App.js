import ErrorButton from './ErrorButton';
import Header from './Header';
import './App.css';
import Response from './Response';
import controller from './modules/controller';
import ChatHistory from './ChatHistory';
import './ChatHistory.css';
import { useState } from 'react';
//useState accepta doua componente, una initiala si un setter


function App() {
  //  const myInput = 'mere';
  //  const previous = ['pere', 'mere', 'repede'];
  //  const letters = myInput.slice(-2);
  // try {
  //   controller.validateInput(myInput, previous, letters);
  //   console.log('Corect!');
  // } catch (err) {
  //   console.error(err.message);
  // }


  // const myInput = 'masina';
  // controller.settingOpenAI_API();
  // try {
  //   const prompt = `Te rog sa raspunzi cu un singur cuvant care sa inceapa cu literele: ${myInput.slice(-2)}`;
  //   controller.getResponse(prompt);
     
  // } catch (error) {
  //   console.error(error);
  // }

  const myInput = "fasdfsa";
  const letters = myInput.slice(-2);
  const greseala = "XXX";
  controller.settingOpenAI_API();
  try {
    const prompt = `
      Ne vom juca un joc cu reguli foarte stricte. Sa le urmaresti si le recitesti la fiecare mesaj.
      Te rog sa nu pui punct la final de propozitie niciodata.
      Nu ai voie sa trimiti mai mult de un cuvant pe mesaj.
      Verifica dex online pentru cuvinte.
      Daca cuvantul ${myInput} exista in dex online, spune-mi un cuvant simplu care sa inceapa cu literele ${letters}.
      Daca ${myInput} nu exista in dex online, spune-mi ${greseala}
    `
    controller.getResponse(prompt);
  } catch(error) {
    console.errore(error);
  } 




    function inputHandlerSubmit(value) {
    console.log(value);
  }

  return (
    <div className="App">
      <Header />
      <ErrorButton />
      <ChatHistory inputHandlerSubmit={inputHandlerSubmit}></ChatHistory>
    </div>
  );
}

export default App;
