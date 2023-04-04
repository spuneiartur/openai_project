import buttonIcon from "./img/buttonIcon.png";


function Input({
    //handleChange,
     handleClick}) {
    function submit(e){
        e.preventDefault();
    }

  return (  <div className="input-area">
        <form className="input-container" onSubmit={(e) => submit(e)}>
            <input type="text" placeholder="Please type your message here" id="user-input" 
            // onChange={(e)=>handleChange(e.target.value)}
            >

            </input>
            <button type="submit" onClick ={handleClick}>
               
                <img src={buttonIcon} alt="button.png" border="0"></img>
            </button>
        </form>
    </div>
    )
}

export default Input;