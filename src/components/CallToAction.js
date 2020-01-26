import React from "react";

const CallToAction = () => {
    return (
        <section className="section call-to-action is-primary has-text-centered __spoilTop">
            <div className="container is-narrow">
                <div className="box">
                    <div className="columns level">
                        <div className="column level-item">
                            <h1 className="title">Start a project</h1>
                        </div>
                        <div className="column level-item">
                            <p>Interested in working together? We should queue up a chat. I’ll buy the coffee.</p>
                        </div>
                        <div className="column level-item"><a
                            className="button is-primary is-outlined is-rounded is-medium" href="/project-planner">Let's
                            do this</a></div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default CallToAction