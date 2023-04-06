import './Header.css';
import logoCrast from './img/logo-no-background.png';
function Header() {
  return (
    <div className="header">
      <div className="header__logo--container">
        <img src={logoCrast} alt="logo-no-backgroud.png" border="0"></img>
      </div>
      <div className="header__writing--container">
        <h1>Let's play some FAZAN!</h1>
      </div>
    </div>
  );
}

export default Header;
