import React from 'react'
import BasinImg from '../images/basin.svg'
import Ylbuilder from '../images/ylbuilders.svg'
import HoustonImg from '../images/houston.svg'


const Projects = () => {
    return (
        <section className="section startups has-text-centered __spoilTop">
            <div className="container is-narrow">
                <div className="startup-grid">
                    <div className="columns is-centered level">
                        <div className="column level-item">
                            <div className="box">
                                <img className="logo" src={BasinImg} />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend maximus lectus, quis posuere nunc pellentesque vel. Duis et risus. </p>
                                <a className="link has-text-primary" href="https://usebasin.com">https://fr.lipsum.com</a>
                            </div>
                        </div>
                        <div className="column level-item">
                            <div className="box">
                                <img className="logo" src={Ylbuilder} />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend maximus lectus, quis posuere nunc pellentesque vel. Duis et risus. </p>
                                <a className="link has-text-primary" href="https://ylbuilders.com">https://fr.lipsum.com</a>
                            </div>
                        </div>
                        <div className="column level-item">
                            <div className="box">
                                <img className="logo" src={HoustonImg} />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend maximus lectus, quis posuere nunc pellentesque vel. Duis et risus. </p>
                                <a className="link has-text-primary">https://fr.lipsum.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Projects