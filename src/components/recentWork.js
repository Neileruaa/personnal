import React from 'react';
import awg2020img from '../images/awg2020.png'
import chronicledImg from '../images/chronicled.png'


const RecentWork = () => {
    return(
        <section className="section projects is-medium is-white has-text-centered">
            <div className="container is-narrow">
                <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Mes derniers travaux</h1>
                <h2 className="subtitle is-size-5-desktop">Voici quelques projets auxquels j'ai participé.
                    En savoir plus ?
                    <a href="aureliendrey@gmail.com">Envoyez moi un email</a>.</h2>
                <div className="project-grid">
                    <div className="columns is-multiline is-mobile">
                        <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                            <figure className="image is-3by2 wrapper">
                                <img className="project-thumb" src={awg2020img} />
                                <figcaption className="content-overlay">
                                    <h1 className="title is-size-5 is-size-4-widescreen">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend maximus lectus, quis posuere nunc pellentesque vel. Duis et risus. </h1>
                                    <a className="button is-primary is-outlined is-rounded" href="https://fr.lipsum.com/" target="_blank">
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
                                    <h1 className="title is-size-5 is-size-4-widescreen">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend maximus lectus, quis posuere nunc pellentesque vel. Duis et risus. </h1>
                                    <a className="button is-primary is-outlined is-rounded" href="https://fr.lipsum.com/" target="_blank">
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