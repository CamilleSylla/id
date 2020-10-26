import React from 'react';

import emailjs from 'emailjs-com'

import './Contact.css'
import Close from '../../assets/icon/close.svg'



export default function Contact( { show } ) {
    
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_a0yhol6', e.target, 'user_9Mwl1WzLHnTGVe4ZXHEMI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      show({show : false})
  }
  
    return (
        <div className="modal">
            <div className="wrapper">
                <div className="contact-form">
                    <form className="input-fields" onSubmit={sendEmail} >
                    <img src={Close} onClick={ () => show({show : false})} alt=""/>
                        <p>Nom *</p>
                        <input type="text" className="input"  name="name" />
                        <p>Email *</p>
                        <input type="email" className="input"  name="mail" />
                        <p>Societe</p>
                        <input type="text" className="input"  name="phone" />
                        <p>Type de Projet *</p>
                        <input type="text" className="input"  name="Subject" />
                        <p>Votre Message *</p>
                        <textarea type="textarea" className="msg" name="msg" />
                        <input type="submit" class="form-btn" value="Envoyer" name="Subject" />
                    </form>
                </div>
            </div>
        </div>
    );
}

