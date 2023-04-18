import React from "react";
import './Test.css'

const Test = () => {
    return (
        <>
            <section id="Test" className="d-flex justify-content-center">
                <div className="test m-4">
                    <h3 className="text-center mb-5" style={{color:"rgb(0, 145, 255)"}}>Testimonials</h3>
                    <div className="container">
                        <div>
                            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <h5>Samarth Corp.</h5>
                                        <p className="text-body-secondary"><small><em>"We are extremely satisfied with the service provided by the company. The team was professional, responsive, and delivered high-quality results in a timely manner. Highly recommended!"</em></small></p>
                                    </div>
                                    <div className="carousel-item">
                                        <h5>Willington</h5>
                                        <p className="text-body-secondary"><small><em>"I have been a loyal customer of the company for years and I have always been impressed with their level of expertise and dedication to customer satisfaction. They have consistently exceeded my expectations."</em></small></p>
                                    </div>
                                    <div className="carousel-item">
                                        <h5>WinKart</h5>
                                        <p className="text-body-secondary"><small><em>"The team at the company is top-notch! They have a deep understanding of our business needs and always come up with innovative solutions to help us achieve our goals. I couldn't be happier with their services."</em></small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Test;