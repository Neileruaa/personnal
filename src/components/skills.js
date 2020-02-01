import React from 'react';
import DesignerImg from '../images/designer.svg'
import MentorImg from '../images/mentor.svg'
import FrontendImg from '../images/frontend.svg'

const Skills = () => {
    return(
        <section className="section skills has-text-centered __spoilTop">
            <div className="container is-narrow">
                <div className="box">
                    <div className="content">
                        <div className="columns is-centered">
                            <div className="column">
                                <figure className="image">
                                    <img className="is-skill-icon __skill-icon" src={DesignerImg} />
                                </figure>
                                <h1 className="title is-size-4 is-spaced">Frond-end</h1>
                                <p>
                                    <i>Une bonne interface est comme une bonne blague.
                                    S'il faut l'expliquer, c'est qu'elle n'est pas si bonne.
                                    </i>
                                </p>
                                <p className="list-title has-text-primary has-text-weight-normal">Mes technologies favorites</p>
                                <p>Application en temps réels, application native, Moteur de rendu</p>
                                <p className="list-title has-text-primary has-text-weight-normal">Design Tools:</p>
                                <ul>
                                    <li>React</li>
                                    <li>React Native</li>
                                    <li>VueJs</li>
                                    <li>Twig</li>
                                    <li>Sass</li>
                                    <li>Bootstrap</li>
                                    <li>Bulma</li>
                                    <li>FontAwesome</li>
                                </ul>
                            </div>
                            <div className="column">
                                <figure className="image">
                                    <img className="is-skill-icon __skill-icon" src={FrontendImg} />
                                </figure>
                                <h1 className="title is-size-4 is-spaced">Back-end</h1>
                                <p>J'aime coder en partant de zéro, et donner vie à ces idées dans le navigateur.</p>
                                <p className="list-title has-text-primary has-text-weight-normal">Langages que je maitrise :</p>
                                <p>Php, Symfony, Javascript, NodeJs, SQL, Python, Java.</p>
                                <p className="list-title has-text-primary has-text-weight-normal">Dev Tools:</p>
                                <ul>
                                    <li>Php</li>
                                    <li>Symfony</li>
                                    <li>Javascript</li>
                                    <li>NodeJs</li>
                                    <li>MySQl</li>
                                    <li>MongoDb</li>
                                    <li>Python</li>
                                    <li>Java</li>
                                    <li>Git &amp; Github</li>
                                    <li>Linux</li>
                                </ul>
                            </div>
                            <div className="column">
                                <figure className="image">
                                    <img className="is-skill-icon __skill-icon" src={MentorImg} />
                                </figure>
                                <h1 className="title is-size-4 is-spaced">Gestion</h1>
                                <p>I genuinely care about people, and love helping fellow designers work on their
                                    craft.</p>
                                <p className="list-title has-text-primary has-text-weight-normal">Experiences I draw
                                    from:</p>
                                <p>UX/UI, Product design, Freelancing</p>
                                <p className="list-title has-text-primary has-text-weight-normal">Mentor Stats:</p>
                                <ul>
                                    <li>4 years experience</li>
                                    <li>26 short courses</li>
                                    <li>37 bootcamps</li>
                                    <li>125+ students</li>
                                    <li>1,200+ mentor sessions</li>
                                    <li>60+ group critiques</li>
                                    <li>10,000+ comments</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Skills