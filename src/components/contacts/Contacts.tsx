import React, { useRef } from 'react';
import './contacts.css';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contacts: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      await toast.promise(
        emailjs.sendForm('service_5ktabge', 'template_szr1tbg', form.current, '5xALg_gK66AAsokb0'),
         {
           loading: 'Sending...',
           success: <b>Details sent Succesfully!</b>,
           error: <b>Could not send your details.</b>,
         }
       );
      form.current.reset();
    }
  };

  return (
    <section id='contacts'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ali.mubashir40@gmail.com</h5>
            <a href="mailto:ali.mubashir40@gmail.com">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" id="from_name" placeholder="Your Full Name" required />
          <input type="email" name='from_email' placeholder='Your Email' required />
          <textarea name="message" rows={7} placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
