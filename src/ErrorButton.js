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
            <div className="modal">
              <div className="error"> 
                <p>Oops! Something went wrong.</p>
              </div>
              <button className="close" onClick={handleClose}>Close</button>
            </div>
          )}
        </>
      );
    }
  
  export default ErrorButton;