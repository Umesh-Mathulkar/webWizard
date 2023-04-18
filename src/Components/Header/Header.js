import React from "react";
import './Header.css'
import logo from '../images/web.png'

const Header = () => {

    const contact=()=>{
        alert("Weblar Assignment")
    }

    return (
        <>

            <section id="header">
                <div className="header row">
                    <div className="col-lg-4 col-4 text-center"><h4 className="tagline">Unleash Yourself</h4></div>
                    <div className="logo col-lg-4 col-4 text-center">
                    <img src={logo} alt="webWizard" height={'70px'}/>
                    
                    </div>

                    <div className="CTA  col-lg-4 col-4 text-center">
                        <button onClick={contact} className="btn btn-primary">Learn More</button>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Header