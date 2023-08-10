import React, { useRef, useState } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser'


const Contact = () => {
  const form = useRef();
  const [success,setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
  
    const formData = new FormData(form.current);
    const emailData = {};
  
    formData.forEach((value, key) => {
      emailData[key] = value;
    });
  
    emailjs
      .send('service_k88yanl', 'template_3k2hbyc', emailData, '5PJVBB65E-4m8srFN')
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error.text);
        setSuccess(false);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            < MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4> 
            <h5>badrannabi@gmail.com</h5>
            <a href="mailto:badrannabi@gmailcom" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            < RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>badr_annabi</h5>
            <a href="https://facebook.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            < BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+212 628563093</h5>
            <a href="https://api.Whatsapp.com/send?phone=+212628563093" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea type="message" rows='7' placeholder='Your Message' name="message" required />
          <button type='submit' className='btn btn-primary'> Send Message </button>
          {success && "Your message has been sent, We'll get back to you soon :"}
        </form>
      </div>
    </section>
  )
}

export default Contact