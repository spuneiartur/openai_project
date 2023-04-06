
import react from 'react';
import './ChatHistory.css';
import Input from './Input';
import './Input.css';
import Response from './Response';
import inputHandler from './modules/views/userInputView';

function ChatHistory({ inputHandlerSubmit }) {
  return (
    <div className="ChatHistory-body">
      <Response type={'user'}></Response>
      <Response type={'ai'}></Response>
      <Response type={'user'}></Response>
      <Response type={'ai'}></Response>
      <Response type={'user'}></Response>
      <Response type={'ai'}></Response>
      <Input inputHandlerSubmit={inputHandlerSubmit} />
    </div>
  );
}

export default ChatHistory;

