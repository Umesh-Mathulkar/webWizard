import React,{useEffect} from "react";
import './Team.css'

import ceo from '../images/ceo.jpg';
import um from '../images/um.jpg';
import seo from '../images/seo.jpg';

const Team = () => {
  


    return (
        <>
            <section id="Team">
                <div className="team">
                    <h2 className="text-center" style={{color:"rgb(0, 145, 255)"}}>Our Team</h2>
                    <div className="container">
                        <div className="card-group">
                            <div className="card ceo" id="ceo">
                                <img src={ceo} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Nikhil R.</h5>
                                    <p className="card-text">CEO</p>
                                    <p className="card-text"><small className="text-body-secondary">John Doe is the Chief Executive Officer of our company. He brings extensive experience in business management and strategic planning</small></p>
                                </div>
                            </div>
                            <div className="card um" id="um">
                                <img src={um} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Umesh Mathulkar</h5>
                                    <p className="card-text">Web Developer</p>
                                    <p className="card-text"><small className="text-body-secondary">Umesh Mathulkar is our Web Developer. He is skilled in various web technologies and responsible for developing and maintaining web applications.</small></p>
                                </div>
                            </div>
                            <div className="card seo" id="seo">
                                <img src={seo} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Nikita P</h5>
                                    <p className="card-text">SEO Expert</p>
                                    <p className="card-text"><small className="text-body-secondary">Nikita P. is our SEO Expert. She has extensive experience in search engine optimization and is responsible for optimizing our company's website and online presence for search engines.</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team;