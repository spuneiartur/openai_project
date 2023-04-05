import react from 'react';
import './ChatHistory.css';
import Input from './Input';
import './Input.css';
import Response from './Response';

function ChatHistory() {
  return (
    <div className="ChatHistory-body">
      <Response type={'user'}></Response>
      <Response type={'ai'}></Response>
      <Response type={'user'}></Response>
      <Response type={'ai'}></Response>
      <Response type={'user'}></Response>
      <Response type={'ai'}></Response>
      <Input />
    </div>
  );
}

export default ChatHistory;
