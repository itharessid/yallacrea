import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';
import './acceuil.css';

function Acceuil() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const app = new Application(canvas);
        app.load('https://prod.spline.design/fipyVGWAu8ENhdRi/scene.splinecode');
    }, []);

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
            <section id="home" className="w3l-banner py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 banner-left pt-md-0 pt-5">
                            <h3 className="mb-sm-5 mb-2 title">Yalla <br/>Digital <span className="type-js"><span
                                        className="text-js">Academy</span></span></h3>
                            <p className="smaller-text">Vous avez perturbé dans votre route, alors donnez vie à votre créativité. Yalla, rejoignez-nous dès maintenant pour débuter votre parcours créatif.</p>
                            <div className="mt-md-6 mt-5 mb-lg-0 mb-10">
                                <a className="btn button-style" href="About.jsx">Get Started<i className="fa fa-angle-double-right"
                                        aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 banner-right mt-md-0 mt-4">
                            <canvas ref={canvasRef}></canvas> {/* Placeholder for the Spline */}
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="w3l-teams-32-main py-5">
        <div className="teams-32 py-md-4">
            <div className="container">
                <div className="title-main text-center mx-auto mb-4">
                    <h3 className="title-big">Nous Experts</h3>
                    <p className="sub-title mt-2">Cum doctus civibus efficiantur in imperdiet deterruisset. Cras efficitur,
                        metus
                        gravida suscipit cursus, dui diam pre lorem id
                        lectus.</p>
                </div>
                <div className="row main-contteam-32 mt-sm-5 pt-lg-2">
                    <div className="col-lg-3 col-6 team-main-19">
                        <div className="column-19">
                            <a href="#team"><img className="img-fluid" src="assets/images/team1.jpg" alt=" "/></a>
                        </div>
                        <div className="right-team-9">
                            <h6><a href="#team" className="title-team-32">Chris Tina</a></h6>
                            <p className="sm-text-32">Web Designer</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 team-main-19">
                        <div className="column-19">
                            <a href="#team"><img className="img-fluid" src="assets/images/team2.jpg" alt=" "/></a>
                        </div>
                        <div className="right-team-9">
                            <h6><a href="#team" className="title-team-32">Diego Mota</a></h6>
                            <p className="sm-text-32">CSS, HTML</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 team-main-19">
                        <div className="column-19">
                            <a href="#team"><img className="img-fluid" src="assets/images/team3.jpg" alt=" "/></a>
                        </div>
                        <div className="right-team-9">
                            <h6><a href="#team" className="title-team-32">Anton Bone</a></h6>
                            <p className="sm-text-32">UI/UX Designer</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 team-main-19">
                        <div className="column-19">
                            <a href="#team"><img class="img-fluid" src="assets/images/team4.jpg" alt=" "/></a>
                        </div>
                        <div className="right-team-9">
                            <h6><a href="#team" class="title-team-32">Neoye Achi</a></h6>
                            <p className="sm-text-32">Web Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer className="w3l-footer-22 position-relative mt-5 pt-5">
        <div className="footer-sub">
          <div className="container">
            <div className="text-txt">
              <div className="row sub-columns align-items-center">
                {/* Première colonne */}
                <div className="col-lg-4 col-md-6 col-sm-12 sub-one-left">
                  <img
                    src="src/assets/images/yallalogo.png"
                    className="footer-image img-fluid"
                    alt="Footer Image"
                    style={{ maxWidth: '200px' }}
                  />
                  <p>Dans notre école dynamique et novatrice, nous visons à développer les compétences 
                    clés pour créer des contenus exceptionnels, riches en inspiration</p>
                  <div className="columns-2">
                    <ul className="social">
                      <li><a href="#facebook"><span className="fa fa-facebook" aria-hidden="true"></span></a></li>
                      <li><a href="#linkedin"><span className="fa fa-linkedin" aria-hidden="true"></span></a></li>
                      <li><a href="#tiktok"><span className="fa fa-tiktok" aria-hidden="true"></span></a></li>
                      <li><a href="#instagram"><span className="fa fa-instagram" aria-hidden="true"></span></a></li>
                    </ul>
                  </div>
                </div>

                {/* Deuxième colonne */}
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="row">
                    {/* Sous-colonne pour "Quick links" */}
                    <div className="col-lg-6 col-md-6 col-sm-6 sub-two-right">
                      <h6>Quick links</h6>
                      <ul>
                        <li><a href="index.html"><span className="fa fa-angle-double-right mr-2"></span>Acceuil</a></li>
                        <li><a href="about.html"><span className="fa fa-angle-double-right mr-2"></span>Apropos</a></li>
                        <li><a href="courses.html"><span className="fa fa-angle-double-right mr-2"></span>Createur</a></li>
                        <li><a href="contact.html"><span className="fa fa-angle-double-right mr-2"></span>Contact</a></li>
                      </ul>
                    </div>

                    {/* Sous-colonne pour "Contact" */}
                    <div className="col-lg-6 col-md-6 col-sm-6 sub-one-left">
                      <h6>Contact</h6>
                      <div className="column2">
                        <div className="href1"><span className="fa fa-envelope-o" aria-hidden="true"></span><a href="mailto:info@example.com">Yalladigitalacademy@gmail.com</a></div>
                        <div className="href2"><span className="fa fa-phone" aria-hidden="true"></span><a href="tel:+216 56 340 161">+216 56 340 161</a></div>
                        <p className="contact-para"><span className="fa fa-map-marker" aria-hidden="true"></span>ZI Chotrana II 2083 Cité El Ghazala</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-footer text-center">
          <div className="container">
            <div className="columns">
              <p>@2020 Online Study. All rights reserved. Design by <a href="https://w3layouts.com/" target="_blank"> W3Layouts</a></p>
            </div>
          </div>
        </div>
      </footer>
        </div>
    );
}

export default Acceuil;
