import React from 'react'

function Headers() {
  return (
    <div>
      <header id="site-header" className="fixed-top">
        <div className="container">
            <nav className="navbar navbar-expand-lg stroke">
                <h1>
                    <a className="navbar-brand" href="index.html">
                    <img className="img-fluid" src="src/assets/images/yallalogo.png" alt="" style={{ maxWidth: '100px' }} />
                    </a>
                </h1>
      
                <button className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
                    data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                    <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-lg-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="index.html">Acceuil <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about.html">Apropos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="courses.html">Formation</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">Créateur</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                        
                        <div className="search-right">
                            <a href="#search" className="btn button-style" title="search">SeConnecter</a>
                            
                            <div id="search" className="pop-overlay">
                                <div className="popup">
                                    <h4 className="search-pop-text-w3 text-white text-center mb-4">Search Here Your
                                        Online Course
                                    </h4>
                                    <form action="#error" method="GET" className="search-box">
                                        <div className="input-search"> <span className="fa fa-search mr-2"
                                                aria-hidden="true"></span><input type="search"
                                                placeholder="Enter Keyword" name="search" required="required"
                                                autofocus=""/>
                                        </div>
                                        <button type="submit" className="btn button-style">Search</button>
                                    </form>
                                </div>
                                <a className="close" href="#close">×</a>
                            </div>
                          
                        </div>
                       
                    </ul>
                </div>
                
                <div className="cont-ser-position">
                    <nav className="navigation">
                        <div className="theme-switch-wrapper">
                            <label className="theme-switch" for="checkbox">
                                <input type="checkbox" id="checkbox"/>
                                <div className="mode-container">
                                    <i className="gg-sun"></i>
                                    <i className="gg-moon"></i>
                                </div>
                            </label>
                        </div>
                    </nav>
                </div>
                
            </nav>
        </div>
    </header>
    </div>
  )
}

export default Headers
