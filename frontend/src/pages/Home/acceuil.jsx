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
        </div>
    );
}

export default Acceuil;
