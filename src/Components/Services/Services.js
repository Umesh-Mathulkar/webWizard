import React from "react";
import './Services.css'

const Services = () => {




    return (
        <>
            <section id="Services">
           
                <div className="services">
                <h2 className="text-center p-3" style={{color:"rgb(0, 145, 255)"}}>Services</h2>
                    <div className="container pt-5 pb-5">
                        <div className="card-group">
                            <div className="card">
                                <div className="icon"><i className="fa fa-laptop"></i></div>
                                <div className="card-body icon">
                                    <h5 className="card-title">Web development</h5>
                                    <p className="card-text">We specialize in creating custom websites that are visually appealing, user-friendly, and optimized for performance. Our web development services include front-end and back-end development, content management systems (CMS), e-commerce solutions, and more.</p>
                                    
                                </div>
                            </div>
                            <div className="card">
                                <div className="icon"><i className="fas fa-mobile-alt"></i></div>
                                <div className="card-body icon">
                                    <h5 className="card-title">Mobile App development</h5>
                                    <p className="card-text">We design and develop mobile apps that are engaging, functional, and compatible with various platforms including iOS and Android. Our mobile app development services cover native app development, hybrid app development, and app testing and optimization.</p>
                                    
                                </div>
                            </div>
                            <div className="card">
                            <div className="icon"><i className="fa fa-search"></i></div>
                                <div className="card-body icon">
                                    <h5 className="card-title">SEO</h5>
                                    <p className="card-text">We help businesses improve their online visibility and increase organic traffic through effective search engine optimization strategies. Our SEO services include keyword research, on-page and off-page optimization, content optimization, and performance tracking.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;