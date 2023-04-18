import React from "react";
import './nav.css'

const Nav = () => {

   


    return (
        <>
            <section id="Navbar">
                <nav className="navbar sticky-top navbar-expand-lg ">
                    <div className="container-fluid">

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <a className="nav-link" href="#About">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Team">Team</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#Test">Testimonials</a>
                                </li>
                                <li className="nav-item">
                                    <a  className="nav-link" href="#Contact">Contact</a>
                                </li>






                            </ul>

                        </div>
                    </div>
                </nav>

                <div className="sNavs">
                    <ul className="sideNav">
                        <li><a href="#"><i className="fas fa-arrow-up"></i></a></li>
                        <li><a href="#About"><i className="fas fa-info-circle"></i></a></li>
                        <li><a href="#Services"><i className="fas fa-cogs"></i></a></li>
                        <li><a href="#Team"><i className="fas fa-user"></i></a></li>
                        <li><a href="#Test"><i className="fas fa-quote-left"></i></a></li>
                        <li><a href="#Contact"><i className="fas fa-envelope"></i></a></li>

                    </ul>
                </div>
            </section>

        </>
    )
}

export default Nav