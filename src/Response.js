//import "react";
import './Response.css';
import userIcon from './img/user_icon.png';
import aiIcon from './img/ai_icon.png';
function Response({ response }) {
  return (
    <div
      className={`response__container ${
        response.type == 'user'
          ? 'response__container--user'
          : 'response__container--ai'
      }`}
    >
      <div className="response__icon">
        <img src={response.type == 'user' ? userIcon : aiIcon}></img>
      </div>
      <div className="response__content">
        <p>{response.text}</p>
      </div>
    </div>
  );
}

export default Response;
