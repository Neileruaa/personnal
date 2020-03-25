import React from "react";

const CallToAction = ({onClickHandler}) => {
    return (
        <section className="section call-to-action is-primary has-text-centered __spoilTop">
            <div className="container is-narrow">
                <div className="box">
                    <div className="columns level">
                        <div className="column level-item">
                            <h1 className="title">Commencer un projet</h1>
                        </div>
                        <div className="column level-item">
                            <p>Une idée de projet ? On pourrait se rencontrer. Je paie le café !</p>
                        </div>
                        <div className="column level-item">
                            <a onClick={(e) => {
                                e.preventDefault();
                                onClickHandler();

                            }} className="button is-primary is-outlined is-rounded is-medium" href="aureliendrey@gmail.com">
                                Envoyez moi un email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default CallToAction