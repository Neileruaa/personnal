import React from 'react';
import BritewebImg from '../images/briteweb.svg'
import GoodkingImg from '../images/goodking.svg'
import RedstampImg from '../images/redstamp.svg'
import Domain7Img from '../images/domain7.svg'
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
                        <h1 className="title is-size-3-desktop is-size-4-tablet is-size-5-mobile">I'm proud to have
                            collaborated with some awesome companies:</h1>
                    </div>
                </div>
                <div className="client-grid">
                    <div className="columns is-multiline is-mobile">
                        <div className="column is-half-mobile is-one-quarter-tablet">
                            <figure className="image is-2x1"><img className="client-logo" src={BritewebImg} />
                            </figure>
                        </div>
                        <div className="column is-half-mobile is-one-quarter-tablet">
                            <figure className="image is-2x1"><img className="client-logo" src={GoodkingImg} />
                            </figure>
                        </div>
                        <div className="column is-half-mobile is-one-quarter-tablet">
                            <figure className="image is-2x1"><img className="client-logo" src={RedstampImg} />
                            </figure>
                        </div>
                        <div className="column is-half-mobile is-one-quarter-tablet">
                            <figure className="image is-2x1"><img className="client-logo" src={Domain7Img} />
                            </figure>
                        </div>
                        <div className="column is-half-mobile is-one-quarter-tablet">
                            <figure className="image is-2x1"><img className="client-logo" src={DesignlabImg} />
                            </figure>
                        </div>
                        <div className="column is-half-mobile is-one-quarter-tablet">
                            <figure className="image is-2x1"><img className="client-logo"
                                                                  src={ChronicledImg} /></figure>
                        </div>
                        <div className="column is-half-mobile is-one-quarter-tablet">
                            <figure className="image is-2x1"><img className="client-logo" src={BldrsImg} />
                            </figure>
                        </div>
                        <div className="column is-half-mobile is-one-quarter-tablet">
                            <figure className="image is-2x1"><img className="client-logo"
                                                                  src={SerpMetricsImg}/></figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients