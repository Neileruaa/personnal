import React from 'react';

const Testimonials = () => {
    return (
        <section className="section testimonials is-medium is-white has-text-centered has-border-top">
            <div className="container is-narrow">
                <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Testimonials</h1>
                <h2 className="subtitle is-size-5-desktop">People I've worked with have said some nice things...</h2>
                <div className="columns is-centered">
                    <div className="column is-two-thirds">
                        <div className="testimonials-slider">
                            <input id="carousel-1" type="radio" name="carousel" checked="">
                                <input id="carousel-2" type="radio" name="carousel">
                                    <input id="carousel-3" type="radio" name="carousel">
                                        <div className="carousel-slides">
                                            <div className="carousel-inner">
                                                <div className="carousel-item">
                                                    <div className="testimonial-block">
                                                        <img className="avatar" src="img/avatars/pascal.png" />
                                                        <p className="quote">“Matt was a real pleasure to work with and
                                                            we look forward to working with him again. He’s definitely
                                                            the kind of designer you can trust with a project from start
                                                            to finish.”</p>
                                                        <h1 className="title is-size-5">Pascal Tremblay</h1>
                                                        <h2 className="subtitle is-size-6">Creative Lead, Good Kind</h2>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="testimonial-block">
                                                        <img className="avatar" src="img/avatars/alvin.png" />
                                                        <p className="quote">“Matt's a clear communicator with the
                                                            tenacity and confidence to really dig in to tricky design
                                                            scenarios and the collaborative friction that's needed to
                                                            produce excellent work.”</p>
                                                        <h1 className="title is-size-5">Alvin Engler</h1>
                                                        <h2 className="subtitle is-size-6">Sr. Systems Developer,
                                                            Domain7</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-nav">
                                            <label htmlFor="carousel-1"/>
                                            <label htmlFor="carousel-2"/>
                                        </div>
                                    </input>
                                </input>
                            </input>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Testimonials