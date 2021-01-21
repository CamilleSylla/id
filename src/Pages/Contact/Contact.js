import React from 'react';
import Close from '../../assets/icon/close.svg'



export default function Contact( { show } ) {
    
  
    return (
        <div className="modal">
            <div className="wrapper">
                <div className="contact-form">
                    <form  action="https://formspree.io/f/mdopyrdp" method="POST" className="input-fields" >
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
                        <input type="submit" class="form-btn" value="Envoyer" />
                    </form>
                </div>
            </div>
        </div>
    );
}

