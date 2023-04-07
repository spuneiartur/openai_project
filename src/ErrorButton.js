import './ErrorButton.css';
import { useState } from 'react';

function ErrorButton({
  errorMessage = 'Something went wrong, just like the Assassin’s Creed series',
  setShowError,
}) {
  //const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowError(false);
  };

  return (
    <>
      {
        <div className="overlay">
          <div className="modal">
            <div className="error">
              <p>{errorMessage}</p>
            </div>
            <button className="close" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      }
    </>
  );
}

export default ErrorButton;
