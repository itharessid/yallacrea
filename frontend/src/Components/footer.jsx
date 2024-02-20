import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

// Dans votre composant JSX
<FontAwesomeIcon icon={faTiktok} />


function Footer() {
  return (
    <div>
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

export default Footer;
