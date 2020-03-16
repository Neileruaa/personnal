import React from 'react';
import Img2le from '../images/logo2le.png'
import AcaStrasImg from '../images/logo_aca_stras.svg'
import BubImg from '../images/logo-bubendorff.png'
import FDOImg from '../images/fdo-logo.jpeg'
import OrangeImg from '../images/logo-orange.png'
import LeLaboImg from '../images/lelabo.jpeg'
import MMAImg from '../images/mma.jpeg'

const Clients = () => {
    return (
        <section className="section clients is-medium is-white has-text-centered has-border-top">
            <div className="container is-narrow">
                <div className="columns is-centered">
                    <div className="column is-half">
                        <h1 className="title is-size-3-desktop is-size-4-tablet is-size-5-mobile">
                            Je suis fier d'avoir pu collaborer avec ces super entreprises :
                        </h1>
                    </div>
                </div>
                <div className="client-grid">
                    <div className="columns is-multiline is-mobile">
                        <div className="column is-half-mobile is-one-quarter-tablet">
                            <figure className="image "><img className="client-logo" src={Img2le} />
                            </figure>
                        </div>
                        <div className="column is-half-mobile is-one-quarter-tablet">
                            <figure className="image "><img className="client-logo" src={AcaStrasImg} />
                            </figure>
                        </div>
                        <div className="column is-half-mobile is-one-quarter-tablet">
                            <figure className="image "><img className="client-logo" src={BubImg} />
                            </figure>
                        </div>
                        <div className="column is-half-mobile is-one-quarter-tablet">
                            <figure className="image "><img className="client-logo" src={FDOImg} />
                            </figure>
                        </div>
                        <div className="column is-half-mobile is-one-quarter-tablet">
                            <figure className="image "><img className="client-logo" src={OrangeImg} />
                            </figure>
                        </div>
                        <div className="column is-half-mobile is-one-quarter-tablet">
                            <figure className="image "><img className="client-logo" src={LeLaboImg} />
                            </figure>
                        </div>
                        <div className="column is-half-mobile is-one-quarter-tablet">
                        <figure className="image "><img className="client-logo" src={MMAImg} />
                        </figure>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients