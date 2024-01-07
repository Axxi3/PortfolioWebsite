import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
export default function ContactUs({ onEmptyFields ,emailSender}) {  

    const form = useRef();  
    const [empty,setEmpty]=useState(false)

  const sendEmail = (e) => { 
    const name = form.current.from_name.value.trim();
    const email = form.current.email_id.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      
      onEmptyFields(true);  
      setEmpty(false)
      return;
    }

    e.preventDefault();

    emailjs.sendForm('service_ms22i4d', 'template_nvo54r5', form.current, '8V4UGDjlxngGiGvDg')
      .then((result) => {  
        emailSender(1)
          console.log(result.text);
      }, (error) => {  
        emailSender(2)
          console.log(error.text);
      });
  };
  return (
    <section className='changeAgain p-[50px]' id='Contact'>  
    <p className='lg:text-[60px] text-[25px] md:text-[40px] mt-[30px] text-left p-5 w-[100%]'>Let's Catch Up Over Coffee ☕</p>  
<form ref={form} onSubmit={sendEmail} >  
    <label htmlFor="from_name" className='block'>Name</label>
    <input type="text" name="from_name" id="" className='inputTaker' />    
    <label htmlFor="email_id" className='block mt-[15px]' >Email</label>
    <input type="email" name="email_id" id="" className='inputTaker' />  
    <label htmlFor="message" className='block mt-[15px]'>Message</label>
    <input type="text" name="message" id="Mes" className='inputTaker' />    
    <div className="but w-[100%] self-center flex items-center justify-center">
    <button type="Submit" className='w-[40%] h-[50px]   bg-[#272423] rounded-full border-[#A9AE9B] transition text-[#E4EAD3] hover:bg-[#A9AE9B] hover:text-[#272423] mt-[50px]'>Send</button>  
   
    </div>
      </form>
      </section>
  )
}
