import React from 'react'
import RhombusImg from '../images/rhombus.gif'
import YoutubeLogo from '../images/youtube__logo.png'
import TwitterLogo from '../images/twitter_logo.png'


const Projects = ({onClickHandler}) => {
    return (
        <section className="section startups has-text-centered __spoilTop">
            <div className="container is-narrow">
                <div className="startup-grid">
                    <div className="columns is-flex is-centered">
                        <div className="column is-vcentered">
                            <div className="box __startup_box">
                                <img className="logo" src={RhombusImg}/>
                                <p>Mon site du tutorial ! Mais il est encore en construction. Promis je finis au plus
                                    vite !</p>
                                {/*<a className="link has-text-primary"*/}
                                {/*   href="#">Vous cliquerez ici !</a>*/}
                            </div>
                        </div>
                        <div className="column is-vcentered">
                            <div className="box __startup_box">
                                <img className="logo" src={YoutubeLogo}/>
                                <p>Ma chaîne Youtube.
                                    Je fais des tutoriels vidéos pour les débutants voulant commencer le développement.
                                    N'hésite pas à y jeter un oeil.</p>
                                <a className="link has-text-primary"
                                   href="https://www.youtube.com/channel/UCLx6FDKoMklfmRaAQYoTUIg?view_as=subscriber">Voir ma chaîne youtube</a>
                            </div>
                        </div>
                        <div className="column is-vcentered">
                            <div className="box __startup_box">
                                <img className="logo" src={TwitterLogo}/>
                                <p>Ma page twitter où je relais les articles de veilles que je trouve passionnants !  </p>
                                <a className="link has-text-primary" href="https://twitter.com/AurelienDrey">Voir mon profil</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Projects