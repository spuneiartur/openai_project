import react, { useState } from 'react';
import './ChatHistory.css';
import Input from './Input';
import './Input.css';
import Response from './Response';
import inputHandler from './modules/views/userInputView';
import Loading from './Loading';
function ChatHistory({ inputHandlerSubmit, chatHistoryArray, loading }) {
  return (
    <div className="ChatHistory-body">
      {chatHistoryArray.map((obj, index) => (
        <Response response={obj} key={index}></Response>
      ))}
      {loading && <Loading />}
      <Input inputHandlerSubmit={inputHandlerSubmit} />
    </div>
  );
}

export default ChatHistory;
