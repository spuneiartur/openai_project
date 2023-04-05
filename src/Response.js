//import "react";
import './Response.css';
import userIcon from './img/user_icon.png';
import aiIcon from './img/ai_icon.png';
function Response(message) {
  return (
    <div className="response__container">
      <div className="response__icon">
        <img src={'user' == 'user' ? userIcon : aiIcon}></img>
      </div>
      <div className="response__content">
        <p>Message</p>
      </div>
    </div>
  );
}

class Message {
  type = null; // user or ai
  text = null;
}

export default Response;
