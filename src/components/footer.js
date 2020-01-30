import React from "react";
import GatsbyImg from '../images/gatsby.svg'
import LogoImg from '../images/Shape-white.svg'

const Footer = () => {
    return (
        <footer className="section is-primary is-small has-text-centered">
            <div className="container is-narrow">
                <a className="logo" href="/">
                    <img src={LogoImg} alt="Matt Farley | Designer, Front-end Developer &amp; Mentor" height="48"/>
                </a>
                <div className="columns is-centered">
                    <div className="column is-one-third">
                        <h1 className="title is-size-4-touch">
                            Living, learning, &amp; leveling up one day at a
                            time.
                        </h1>
                    </div>
                </div>
                <div className="social-icons">
                    <p className="field">
                        <a className="button is-medium" href="https://www.linkedin.com/in/aur%C3%A9lien-drey-bb9a4a134/" target="_blank">
                            <span className="icon is-small footer__button__icon__contact">
                                <svg className="svg-inline--fa fa-linkedin-in fa-w-14 fa-fw"
                                   aria-hidden="true" focusable="false" data-prefix="fab"
                                   data-icon="linkedin-in" role="img"
                                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                   data-fa-i2svg="">
                                    <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                            {/*<i class="fab fa-linkedin-in fa-fw"></i> */}
                            </span>
                        </a>
                        <a className="button is-medium" href="mailto:matt@pendeavor.com" target="_blank">
                            <span className="icon is-small footer__button__icon__contact">
                                <svg className="svg-inline--fa fa-envelope fa-w-16 fa-fw"
                                    aria-hidden="true" focusable="false" data-prefix="far"
                                    data-icon="envelope" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                    data-fa-i2svg="">
                                    <path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"/></svg>
                         {/*<i class="far fa-envelope fa-fw"></i> */}
                            </span>
                        </a>
                    </p>
                </div>
                <div className="copyright">
                    Handcrafted by me
                    <span className="icon has-white-text">
                        <svg
                            className="svg-inline--fa fa-copyright fa-w-16" aria-hidden="true" focusable="false"
                            data-prefix="far" data-icon="copyright" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512" data-fa-i2svg="">
                            <path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 448c-110.532 0-200-89.451-200-200 0-110.531 89.451-200 200-200 110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200zm107.351-101.064c-9.614 9.712-45.53 41.396-104.065 41.396-82.43 0-140.484-61.425-140.484-141.567 0-79.152 60.275-139.401 139.762-139.401 55.531 0 88.738 26.62 97.593 34.779a11.965 11.965 0 0 1 1.936 15.322l-18.155 28.113c-3.841 5.95-11.966 7.282-17.499 2.921-8.595-6.776-31.814-22.538-61.708-22.538-48.303 0-77.916 35.33-77.916 80.082 0 41.589 26.888 83.692 78.277 83.692 32.657 0 56.843-19.039 65.726-27.225 5.27-4.857 13.596-4.039 17.82 1.738l19.865 27.17a11.947 11.947 0 0 1-1.152 15.518z"/>
                        </svg>
                     {/*<i class="far fa-copyright"></i> */}
                    </span> twentynineteen
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