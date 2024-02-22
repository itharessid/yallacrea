const Header = () => {
    return ( 
        <header className="header">
            <div className="header-left">
                <div className="header logo">
                <img className="img-fluid" src="src/assets/images/yallalogo.png" alt="" style={{ maxWidth: '100px' }} />
                </div>
                <div className="header-menu">
                    <i className="list"></i>
                </div>
            </div>
            <nav className="navbar">
                <ul className="nav-links">
                    <li className="nav-link">
                        i.bi-
                    </li>
                </ul>
            </nav>
            <div className="header-right"></div>
        </header>
     );
}
 
export default Header;