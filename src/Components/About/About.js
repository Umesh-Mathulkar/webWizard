import React from "react";
import './About.css'
import logo from '../images/web.png'

const About = () => {
    return (
        <>
            <section id="About">
                <div className="about">
                    <h2 className="text-center mb-4 " style={{color:"rgb(0, 145, 255)"}}>About Us</h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 text-center mb-2">
                                <img src={logo} />
                            </div>
                            <div className="col-lg-8">
                                <p>Welcome to WebWizards, a leading web development company that specializes in creating exceptional websites for businesses and organizations. Our team of experienced web developers is dedicated to delivering high-quality web solutions that meet our clients' unique needs and objectives.</p>
                                <h4>Our Mission</h4>
                                <p>At WebWizards, our mission is to empower businesses with effective web solutions that drive growth and success. We strive to create innovative, user-friendly websites that not only meet our clients' business goals but also deliver a seamless and enjoyable experience for their customers.</p>
                                <h4>Our Values</h4>
                                <ul>
                                    <li>
                                        Excellence: We are committed to delivering exceptional quality in everything we do.
                                    </li>
                                    <li>
                                        Innovation: We constantly seek new and creative ways to solve problems and improve our services.
                                    </li>
                                    <li>
                                        Collaboration: We believe in working closely with our clients to understand their needs and achieve mutual success.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default About


