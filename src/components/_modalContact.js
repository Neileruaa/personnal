import React from 'react'

const _modalContact = ({closeClickHandler}) => {

    return (
        <div className="modal">
            <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field"/>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Modal title</p>
                        <button onClick={(event) => {
                            event.preventDefault();
                            closeClickHandler();
                        }} className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">

                        <input className="input" type="text" placeholder="Objet"/>
                        <textarea className="textarea" placeholder="Votre message..."/>

                    </section>
                    <footer className="modal-card-foot">
                        <button type="submit" className="button is-success">Save changes</button>
                        <button onClick={(event) => {
                            event.preventDefault();
                            closeClickHandler();
                        }} className="button">Cancel
                        </button>
                    </footer>
                </div>
            </form>
        </div>
    )
};

export default _modalContact