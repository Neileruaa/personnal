import React from 'react'

const _modalContact = ({closeClickHandler}) => {

    return (
        <div className="modal">
            <form name="contact-form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field"/>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Envoie moi un message !</p>
                        <button onClick={(event) => {
                            event.preventDefault();
                            closeClickHandler();
                        }} className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <div className="field">
                            <input type="email" className="input" name="email" placeholder="Email"/>
                        </div>
                        <div className="field">
                            <input type="text" className="input" name="nom" placeholder="Votre nom"/>
                        </div>
                        <div className="field">
                            <input type="text" className="input" name="title" placeholder="Objet"/>
                        </div>
                        <div className="field">
                            <textarea className="textarea" name="content" placeholder="Votre message..."/>
                        </div>

                    </section>
                    <footer className="modal-card-foot">
                        <button type="submit" onClick={()=>{alert("Votre message a bien été envoyé ! Merci !")}} className="button is-success">Envoyer</button>
                        <button onClick={(event) => {
                            event.preventDefault();
                            closeClickHandler();
                        }} className="button">Annuler
                        </button>
                    </footer>
                </div>
            </form>
        </div>
    )
};

export default _modalContact