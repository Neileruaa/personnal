import React from 'react';
import AcaStrasImg from '../images/logo_aca_stras.svg'
import BubImg from '../images/logo-bubendorff.png'
import FDOImg from '../images/fdo-logo.jpeg'
import OrangeImg from '../images/logo-orange.png'
import DesignlabImg from '../images/designlab.png'
import ChronicledImg from '../images/chronicled.svg'
import BldrsImg from '../images/bldrs.png'
import SerpMetricsImg from '../images/serpmetrics.svg'

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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients