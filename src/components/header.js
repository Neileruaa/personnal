import {Link} from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"

const Header = ({siteTitle}) => {

    const [isActive, setIsActive] = useState(false);

    return (
        <section className="hero is-success is-fullheight">
            <div className="hero-head">
                <header>
                    <nav className="navbar" role="navigation" aria-label="main navigation">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="#">
                                <Link
                                    to="/"
                                >
                                    {siteTitle}
                                </Link>
                            </a>
                            <a role="button"
                               className={isActive ? "navbar-burger burger is-active" : "navbar-burger burger"}
                               aria-label="menu" aria-expanded="false"
                               data-target="navigationBar"
                               onClick={() => setIsActive(!isActive)}>
                                <span aria-hidden="true"/>
                                <span aria-hidden="true"/>
                                <span aria-hidden="true"/>
                            </a>
                        </div>
                        <div id="navigationBar" className={isActive ? "navbar-menu is-active" : "navbar-menu"}>
                            <div className="navbar-start">
                            </div>
                        </div>
                    </nav>
                </header>
            </div>

            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title">
                        Title
                    </h1>
                    <h2 className="subtitle">
                        Subtitle
                    </h2>
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
