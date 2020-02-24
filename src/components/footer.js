import React from "react";
import GatsbyImg from '../images/gatsby.svg'
import LogoImg from '../images/bear_ad_aureliendrey_logo_2.svg'
import LinkedinLogo from '../images/linkedin-brands.svg'
import EnvelopLogo from '../images/envelope-solid.svg'

const Footer = () => {
    const year = new Date();
    return (
        <footer className="section is-primary is-small has-text-centered">
            <div className="container is-narrow">
                <a className="" href="/">
                    <img src={LogoImg} alt="Matt Farley | Designer, Front-end Developer &amp; Mentor" height="48" className="__logo_footer"/>
                </a>
                <div className="columns is-centered">
                    <div className="column is-one-third">
                        <h1 className="title is-size-4-touch">
                            "N'essaie pas de tout faire. Fais une chose bien."
                        </h1>
                    </div>
                </div>
                <div className="social-icons">
                    <p className="field">
                        <a className="button is-medium" href="https://www.linkedin.com/in/aur%C3%A9lien-drey-bb9a4a134/" target="_blank">
                            <span className="icon is-small footer__button__icon__contact">
                                <img src={LinkedinLogo} alt="Linkedin logo"/>
                            {/*<i class="fab fa-linkedin-in fa-fw"></i> */}
                            </span>

                        </a>
                        <a className="button is-medium" href="mailto:aureliendrey@gmail.com" target="_blank">
                            <span className="icon is-small footer__button__icon__contact">
                                <img src={EnvelopLogo} alt="Envelop logo"/>
                            </span>
                        </a>
                    </p>
                </div>
                <div className="copyright">
                    Réalisé par Aurélien DREY &copy; {year.getFullYear()}
                </div>
                <div className="made-by-bulma">
                    <a href="https://bulma.io">
                        {/*TODO: mettre l'image en local */}
                        <img src="https://bulma.io/images/made-with-bulma--semiblack.png" alt="Made with Bulma" width="128" height="24" />
                    </a>
                </div>
                <div className="made-by-gatsby">
                    <a href="https://www.gatsbyjs.org">
                        {/*TODO: mettre l'image en local */}
                        <img src={GatsbyImg} alt="Made with gatsby" width="128" height="24" />
                    </a>
                </div>
            </div>
        </footer>
)
};

export default Footer