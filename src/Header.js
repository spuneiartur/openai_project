import logoCrast from "./img/logo-no-background.png";
function Header() {
    return (
        <div className="header">
            <div className ="header__logo--container">
                <img src={logoCrast} alt="logo-no-backgroud.png" border="0"></img>
            </div>
            {/* <h1>C.R.A.S.T. zone</h1>
            <p>Let's play some FAZAN!</p> */}
        </div>
    )
}

export default Header;
