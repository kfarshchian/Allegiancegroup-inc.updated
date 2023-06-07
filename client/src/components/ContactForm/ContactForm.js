import React from 'react';
import './ContactForm.scss'
import { Button } from '@mui/material';

function ContactForm() {
  

  return (
    <>
<div className='contact-form'>
                    {/* <form ref={form} onSubmit={sendEmail}> */}
                    <form>
                    <ul>
                        <li className="half">
                            <input type="text" name="name" placeholder="Name" required />
                        </li>
                        <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                        <li>
                        <input type="submit" className="flat-button" value="SEND MESSAGE" to="https://kfarshchian.netlify.app/"/>
                        </li>
                        
                    </ul>
                    {/* <Button className="flat-button">Send Message</Button> */}
                </form>
                </div>
    </>
  );
}

export default ContactForm;
