import {Link} from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import LogoImg from '../images/bear_ad_aureliendrey_logo_2.svg'
import AvatarImg from '../images/undraw_developer.svg'
import HeroImg from '../images/hero.svg'
import TextTyper from "./textTyping";

const Header = ({siteTitle}) => {

    const [isActive, setIsActive] = useState(false);

    return (
        <section className="hero is-transparent is-fullheight has-text-centered">
            <div className="hero-head">
                <div className="has-text-left">
                    <img src={LogoImg} alt="Logo en svg" className="__logo"/>
                </div>
                {/*<header>*/}
                {/*    <nav className="navbar is-fixed-top-touch" role="navigation" aria-label="main navigation">*/}
                {/*        <div className="container">*/}
                {/*            <div className="navbar-brand">*/}
                {/*                <Link*/}
                {/*                    to="/"*/}
                {/*                    className="navbar-item"*/}
                {/*                >*/}
                {/*                    <img src={LogoImg} alt="Logo en svg" height="48" style={{maxHeight: '3rem',}}/>*/}
                {/*                </Link>*/}
                {/*                /!*<a role="button"*!/*/}
                {/*                /!*   className={isActive ? "navbar-burger burger is-active" : "navbar-burger burger"}*!/*/}
                {/*                /!*   aria-label="menu" aria-expanded="false"*!/*/}
                {/*                /!*   data-target="navigationBar"*!/*/}
                {/*                /!*   onClick={() => setIsActive(!isActive)}>*!/*/}
                {/*                /!*    <span aria-hidden="true"/>*!/*/}
                {/*                /!*    <span aria-hidden="true"/>*!/*/}
                {/*                /!*    <span aria-hidden="true"/>*!/*/}
                {/*                /!*</a>*!/*/}
                {/*            </div>*/}
                {/*            /!*<div id="navigationBar" className={isActive ? "navbar-menu is-active" : "navbar-menu"}>*!/*/}
                {/*            /!*    <div className="navbar-start"/>*!/*/}
                {/*            /!*    <div className="navbar-end">*!/*/}
                {/*            /!*        <div className="navbar-item">*!/*/}
                {/*            /!*            Mentorship*!/*/}
                {/*            /!*        </div>*!/*/}
                {/*            /!*        <div className="navbar-item">*!/*/}
                {/*            /!*            <a className="button is-primary is-outlined is-rounded">*!/*/}
                {/*            /!*                Say Hello*!/*/}
                {/*            /!*            </a>*!/*/}
                {/*            /!*        </div>*!/*/}
                {/*            /!*    </div>*!/*/}
                {/*            /!*</div>*!/*/}
                {/*        </div>*/}
                {/*    </nav>*/}
                {/*</header>*/}
            </div>

            <div className="hero-body">
                <div className="container has-text-centered __topHeader">
                    <div className="columns">
                        <div className="column">
                            <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
                                Développeur passionné
                            </h1>
                            <h2 className="subtitle is-size-4-desktop">
                                Je crée et je code des applications, et ...
                                <TextTyper/>
                            </h2>
                            <img src={AvatarImg} className="avatar"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-foot">
                <div className="container">
                    <img src={HeroImg} alt="" className="is-bottom is-centered"/>
                </div>
            </div>
        </section>
    )
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: `Aurélien DREY Default`,
};

export default Header
