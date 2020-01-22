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
                                <h1 className="title is-size-4 is-spaced">Designer</h1>
                                <p>I value simple content structure, clean design patterns, and thoughtful
                                    interactions.</p>
                                <p className="list-title has-text-primary has-text-weight-normal">Things I enjoy
                                    designing:</p>
                                <p>UX, UI, Web, Mobile, Apps, Logos</p>
                                <p className="list-title has-text-primary has-text-weight-normal">Design Tools:</p>
                                <ul>
                                    <li>Balsamiq Mockups</li>
                                    <li>Figma</li>
                                    <li>Invision</li>
                                    <li>Marvel</li>
                                    <li>Pen &amp; Paper</li>
                                    <li>Sketch</li>
                                    <li>Webflow</li>
                                    <li>Zeplin</li>
                                </ul>
                            </div>
                            <div className="column">
                                <figure className="image">
                                    <img className="is-skill-icon __skill-icon" src={FrontendImg} />
                                </figure>
                                <h1 className="title is-size-4 is-spaced">Front-end Developer</h1>
                                <p>I like to code things from scratch, and enjoy bringing ideas to life in the
                                    browser.</p>
                                <p className="list-title has-text-primary has-text-weight-normal">Languages I speak:</p>
                                <p>HTML, Pug, Slim, CSS, Sass, Less</p>
                                <p className="list-title has-text-primary has-text-weight-normal">Dev Tools:</p>
                                <ul>
                                    <li>Atom</li>
                                    <li>Bitbucket</li>
                                    <li>Bootstrap</li>
                                    <li>Bulma</li>
                                    <li>Codekit</li>
                                    <li>Codepen</li>
                                    <li>Github</li>
                                    <li>Gitlab</li>
                                    <li>Terminal</li>
                                </ul>
                            </div>
                            <div className="column">
                                <figure className="image">
                                    <img className="is-skill-icon __skill-icon" src={MentorImg} />
                                </figure>
                                <h1 className="title is-size-4 is-spaced">Mentor</h1>
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