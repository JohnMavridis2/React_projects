import React from 'react';
import emailjs from '@emailjs/browser';


export default function Form(){

    function handleSubmit(e){
        e.preventDefault()
        emailjs.sendForm('service_42sbbxl', 'mail_with_react',"#forma" )
                    .then(function() {
                        console.log('SUCCESS!');
                        alert('SUCCESS!')
                        
                    }, function(error) {
                        console.log('FAILED...', error);
                        alert('ERROR!')
                    });
    }
    
    return(
        <div id="form">
            <form onSubmit={handleSubmit} id="forma">
                <div className="form-field">
                    <label htmlFor="to" >To:</label>
                    <input type="text" id="to" name="to" />
                </div>
                <div className="form-field">
                    <label htmlFor="subject" >Subject:</label>
                    <input type="text" id="subject"  name="subject" />
                </div>
                <div className="form-field">
                    <label htmlFor="msg" >Message:</label>
                    <textarea name="msg" id="msg" />
                </div>
                <button id="button">Send mail</button>
            </form>
        </div>
    )
}