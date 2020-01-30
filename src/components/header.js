import {Link} from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import LogoImg from '../images/Shape.svg'
import AvatarImg from '../images/mf-avatar.svg'
import HeroImg from '../images/hero.svg'

const Header = ({siteTitle}) => {

    const [isActive, setIsActive] = useState(false);

    return (
        <section className="hero is-transparent is-fullheight has-text-centered">
            <div className="hero-head">
                <header>
                    <nav className="navbar" role="navigation" aria-label="main navigation">
                        <div className="container">
                            <div className="navbar-brand">
                                <Link
                                    to="/"
                                    className="navbar-item"
                                >
                                    <img src={LogoImg} alt="Logo en svg" height="48" style={{maxHeight: '3rem',}}/>
                                </Link>
                                {/*<a role="button"*/}
                                {/*   className={isActive ? "navbar-burger burger is-active" : "navbar-burger burger"}*/}
                                {/*   aria-label="menu" aria-expanded="false"*/}
                                {/*   data-target="navigationBar"*/}
                                {/*   onClick={() => setIsActive(!isActive)}>*/}
                                {/*    <span aria-hidden="true"/>*/}
                                {/*    <span aria-hidden="true"/>*/}
                                {/*    <span aria-hidden="true"/>*/}
                                {/*</a>*/}
                            </div>
                            {/*<div id="navigationBar" className={isActive ? "navbar-menu is-active" : "navbar-menu"}>*/}
                            {/*    <div className="navbar-start"/>*/}
                            {/*    <div className="navbar-end">*/}
                            {/*        <div className="navbar-item">*/}
                            {/*            Mentorship*/}
                            {/*        </div>*/}
                            {/*        <div className="navbar-item">*/}
                            {/*            <a className="button is-primary is-outlined is-rounded">*/}
                            {/*                Say Hello*/}
                            {/*            </a>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </nav>
                </header>
            </div>

            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="columns">
                        <div className="column">
                            <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
                                Designer, Front-end Developer & Mentor
                            </h1>
                            <h2 className="subtitle is-size-4-desktop">
                                I design and code beautifully simple things, and I love what I do.
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
