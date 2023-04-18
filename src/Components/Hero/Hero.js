import React from "react";
import './Hero.css'

const Hero=()=>{

    const contact=()=>{
        alert("Weblar Assignment")
    }

    return(
        <>
        <section id="#Hero">
            <div className="Hero">
                <div className="container mt-5">
                    <div className="lines">
                        <h1 className="headline">Welcome to WebWizards</h1>
                        <p className="subHead">Crafting Beautiful Website for Your Business</p>
                    </div>
                    <div className="HeroCTA"><button onClick={contact} className="btn btn-primary">Get started</button></div>
                </div>

            </div>


        </section>
        </>
    )
}

export default Hero