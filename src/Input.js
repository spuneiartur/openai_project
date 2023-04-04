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
                <i className="click"></i>
                <img src="button.png" alt="buttonpng" border="0"></img>
            </button>
        </form>
    </div>
    )
}

export default Input;