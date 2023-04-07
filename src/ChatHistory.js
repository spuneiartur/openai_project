import react, { useState } from 'react';
import './ChatHistory.css';
import Input from './Input';
import './Input.css';
import Response from './Response';
import inputHandler from './modules/views/userInputView';
import Loading from './Loading';
import ErrorButton from './ErrorButton';

function ChatHistory({
  inputHandlerSubmit,
  chatHistoryArray,
  loading,
  handleShowError,
  displayError,
  setShowError,
  errorMessage,
}) {
  return (
    <div className="ChatHistory-body">
      {chatHistoryArray.map((obj, index) => (
        <Response response={obj} key={index}></Response>
      ))}
      {loading && <Loading />}
      {displayError && (
        <ErrorButton errorMessage={errorMessage} setShowError={setShowError} />
      )}
      <Input inputHandlerSubmit={inputHandlerSubmit} />
    </div>
  );
}

export default ChatHistory;
