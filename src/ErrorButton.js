import "./ErrorButton.css";
import { useState } from 'react';


function ErrorButton() {

    const [showModal, setShowModal] = useState(true); 
  
    const handleClose = () => {
      setShowModal(false); 
    }

    return (
        <>
          {showModal && ( 
            <div className="overlay"> 
            <div className="modal">
              <div className="error"> 
                <p>Something went wrong, just like the Assassin’s Creed series</p>
              </div>
              <button className="close" onClick={handleClose}>Close</button>
            </div>
            </div>
          )}
        </>
      );
    }
  
  export default ErrorButton;