//import "react";
import './Response.css';
import userIcon from './img/user_icon.png';
import aiIcon from './img/ai_icon.png';
function Response({ type }) {
  return (
    <div
      className={`response__container ${
        type == 'user' ? 'response__container--user' : 'response__container--ai'
      }`}
    >
      <div className="response__icon">
        <img src={type == 'user' ? userIcon : aiIcon}></img>
      </div>
      <div className="response__content">
        <p>Hello world!</p>
      </div>
    </div>
  );
}

class Message {
  type = null; // user or ai
  text = null;
}

export default Response;
