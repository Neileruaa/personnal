import React from 'react'
import BasinImg from '../images/basin.svg'
import Ylbuilder from '../images/ylbuilders.svg'
import HoustonImg from '../images/houston.svg'


const Projects = ({onClickHandler}) => {
    return (
        <section className="section startups has-text-centered __spoilTop">
            <div className="container is-narrow">
                <div className="startup-grid">
                    <div className="columns is-centered level">
                        <div className="column level-item">
                            <div className="box">
                                <img className="logo" src={BasinImg}/>
                                <p>Mon site du tutorial ! Mais il est encore en construction. Promis je finis au plus
                                    vite !</p>
                                <a className="link has-text-primary"
                                   href="https://usebasin.com">https://fr.lipsum.com</a>
                            </div>
                        </div>
                        <div className="column level-item">
                            <div className="box">
                                <img className="logo" src={Ylbuilder}/>
                                <p>Ma chaîne Youtube.
                                    Je fais des tutoriels vidéos pour les débutants voulant commencer le développement.
                                    N'hésite pas à y jeter un oeil.</p>
                                <a className="link has-text-primary"
                                   href="https://ylbuilders.com">https://fr.lipsum.com</a>
                            </div>
                        </div>
                        <div className="column level-item">
                            <div className="box">
                                <img className="logo" src={HoustonImg}/>
                                <p>Ma page twitter où je relais les articles de veilles que je trouve passionnants !  </p>
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