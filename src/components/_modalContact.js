import React from 'react'

const _modalContact = ({closeClickHandler}) => {

    return (
        <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Modal title</p>
                    <button className="delete" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success">Save changes</button>
                    <button onClick={(event) => {event.preventDefault(); closeClickHandler();}} className="button">Cancel</button>
                </footer>
            </div>
        </div>
    )
};

export default _modalContact