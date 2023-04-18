import React from "react";
import './Contact.css'

const Contact = () => {
    return (
        <>
            <section id="Contact" className=" d-flex justify-content-center">
               
                <div className="contact mb-5">
                <h3 className="d-flex justify-content-center mb-5" style={{color:"rgb(0, 145, 255)"}}>Contact Us</h3>
                    <div className="container">
                    <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Umesh Mathulkar"/>
                                <label htmlFor="floatingInput">Full Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="textarea" className="form-control" id="floatingPassword" placeholder="Message"/>
                                <label htmlFor="floatingPassword">Message</label>
                        </div>
                        <div>
                            <button className="btn btn-success mt-5">Inquire Now</button>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Contact