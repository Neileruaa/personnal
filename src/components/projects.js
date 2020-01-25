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
                                <p>Simple form backend for designers and developers. Easy to setup. No coding
                                    required.</p>
                                <a className="link has-text-primary" href="https://usebasin.com">www.usebasin.com</a>
                            </div>
                        </div>
                        <div className="column level-item">
                            <div className="box">
                                <img className="logo" src={Ylbuilder} />
                                <p>Beautifully simple websites for independent distributors of Young Living Essential
                                    Oils.</p>
                                <a className="link has-text-primary" href="https://ylbuilders.com">www.ylbuilders.com</a>
                            </div>
                        </div>
                        <div className="column level-item">
                            <div className="box">
                                <img className="logo" src={HoustonImg} />
                                <p>Simple feedback and engagement tools for teams that want to build and ship winning
                                    products.</p>
                                <a className="link has-text-primary">Relaunching
                                Q4 2019 </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Projects