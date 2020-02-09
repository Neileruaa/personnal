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
                                <h1 className="title is-size-4 is-spaced">Autres</h1>
                                <p>Dans mon parcours j'ai pu apprendre et découvrir d'autres compétences !</p>
                                <p className="list-title has-text-primary has-text-weight-normal">Expériences que je tire
                                    de :</p>
                                <p>Management, gestion, économie, veille technologique, mathématiques</p>
                                <p className="list-title has-text-primary has-text-weight-normal">Ce que j'ai découvert</p>
                                <ul>
                                    <li>Théorie des organisations</li>
                                    <li>Management agile</li>
                                    <li>Veille technologique active</li>
                                    <li>Intelligence artificielle</li>
                                    <li>Contrôle de gestion</li>
                                    <li>Economie d'entreprise</li>
                                    <li>Comptabilité</li>
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