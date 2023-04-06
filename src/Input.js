import buttonIcon from './img/buttonIcon.png';


function Input({ inputHandlerSubmit }) {
  return (
    <div className="input-area">
      <form
        className="input-container"
        onSubmit={e => {
          e.preventDefault();
          const value = document.querySelector('#user-input').value;
          document.querySelector('#user-input').value = '';
          inputHandlerSubmit(value);
        }}
      >
        <input
          type="text"
          placeholder="Please type your message here"
          id="user-input"
          // onChange={(e)=>handleChange(e.target.value)}
        ></input>
        <button type="submit">
          <img src={buttonIcon} alt="button.png" border="0"></img>
        </button>
      </form>

    </div>
  );
}

export default Input;
