import React from 'react';
import awg2020img from '../images/awg2020.png'
import chronicledImg from '../images/chronicled.png'


const RecentWork = () => {
    return(
        <section className="section projects is-medium is-white has-text-centered">
            <div className="container is-narrow">
                <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">My Recent Work</h1>
                <h2 className="subtitle is-size-5-desktop">Here are a few recent design projects. Want to see more? <a
                    href="aureliendrey@gmail.com">Email me</a>.</h2>
                <div className="project-grid">
                    <div className="columns is-multiline is-mobile">
                        <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                            <figure className="image is-3by2 wrapper">
                                <img className="project-thumb" src={awg2020img} />
                                <figcaption className="content-overlay">
                                    <h1 className="title is-size-5 is-size-4-widescreen">Uniting First Nations culture
                                        and community through winter sports competition.</h1>
                                    <a className="button is-primary is-outlined is-rounded" href="http://awg2020.org/" target="_blank">
                                        <span>Visit Website</span>
                                        <span className="icon">
                                            {/*<i class="fas fa-angle-right"></i>*/}
                                        </span>
                                    </a>
                                </figcaption>
                                <div className="overlay"/>
                            </figure>
                        </div>
                        <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                            <figure className="image is-3by2">
                                <img className="project-thumb" src={chronicledImg} />
                                <figcaption>
                                    <h1 className="title is-size-5 is-size-4-widescreen">Blockchain pioneers bringing
                                        transparency, trust, and security to supply.</h1>
                                    <a className="button is-primary is-outlined is-rounded" href="https://www.chronicled.org/" target="_blank">
                                        <span>Visit Website</span>
                                        <span className="icon">
                                            {/*<i class="fas fa-angle-right"></i>*/}
                                        </span>
                                    </a>
                                </figcaption>
                                <div className="overlay"/>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default RecentWork