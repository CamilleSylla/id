import React from 'react';

import './Contact.css'

export default function Contact() {
    return (
        <div className="modal">
            <div className="wrapper">
                <div className="contact-form">
                    <form className="input-fields" >
                        <p>Nom *</p>
                        <input type="text" className="input"  name="name" />
                        <p>Email *</p>
                        <input type="email" className="input"  name="mail" />
                        <p>Societe</p>
                        <input type="text" className="input"  name="phone" />
                        <p>Projet *</p>
                        <input type="text" className="input"  name="Subject" />
                        <p>Votre Message *</p>
                        <input type="text" className="msg" name="msg" />
                        <input type="submit" class="form-btn" value="Envoyer" name="Subject" />
                    </form>
                </div>
            </div>
        </div>
    );
}

