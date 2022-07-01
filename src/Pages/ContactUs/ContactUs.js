import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contact1 from '../../assets/contact.gif';
import swal from 'sweetalert';


const ContactUs = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d3mn69j', 'template_bovssme', form.current, 'bC3daaJCpTsOQkKTT')
      .then((result) => {
          console.log(result.text);
          swal("Successfully", "Email send successfull", "success");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <section className="max-w-7xl mx-auto px-12">
            <h1 className="text-4xl font-bold text-center text-primary my-2">Contact Us</h1>
      <div className="flex justify-center items-center my-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="text-center flex-1">
          <form ref={form} onSubmit={sendEmail}>
            <input className="p-3 mb-4 rounded w-8/12 border-2" type="text" name="name" id="" placeholder="Your name" required/>
            <br />
            <input className="p-3 mb-4 rounded w-8/12 border-2" type="email" name="email" id="" placeholder="Email Address" required/>
            <br />
            <input className="p-3 mb-4 rounded w-8/12 border-2" type="text" name="address" id="" placeholder="Your address" required/>
            <br />
            <textarea className="p-3 mb-4 rounded w-8/12 border-2" name="message" id="" cols="50" rows="5" placeholder="Your message" required></textarea>
            <br />
            <button className="btn btn-primary text-uppercase text-white font-bold bg-gradient-to-r from-primary to-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="flex-1 justify-center content-center">
          <img className="w-full rounded-lg mx-30" src={contact1} alt=""
          />
        </div>
      </div>
    </section>
    );
};

export default ContactUs;