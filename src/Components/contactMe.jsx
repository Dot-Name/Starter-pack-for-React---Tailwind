import React from 'react';
import ContactForm from './contactForm.jsx';

const ContactMe = () => {
  return (
    <div className='flex justify-center' id='contact'>

      <section className='flex flex-col w-11/12 mt-10 glass'>
        <div className='flex flex-col items-center p-3 w-full gap-20 my-10'>
          <h3 className='text-3xl font-bold text-center text-white font-orbitron'>Contact Me</h3>

          <div className='flex flex-wrap justify-between gap-10 w-full  md:w-8/12'>
            <div className="flex justify-center ">
              <img 
                src={`${process.env.PUBLIC_URL}/Assets/Contact.gif`} 
                alt="Animated illustration of contact options" 
                className="object-cover w-full  max-w-xs rounded-lg sm:max-w-sm md:max-w-sm lg:max-w-xl"
              />
            </div>
            <div className='flex flex-col items-center w-full gap-5 md:items-start md:w-3/12'>
              <h3 className='text-2xl text-center text-white md:text-2xl font-orbitron'>Let's Connect!</h3>
              <p className='mt-5 text-lg text-center text-white md:text-xl font-saira'>
                Do you have a project idea, need help with development, or just want to say hello? 
                I’d love to hear from you! Feel free to reach out using any of the options below.
              </p>
              <div className='flex flex-col gap-5 mt-5 text-lg md:text-2xl'>
                {/* Email */}
                <button
                  onClick={()=>{window.location.href = 'mailto:manishsingh@godims.in'}} 
                >
                  <div className='flex items-center gap-5'>
                    <img 
                      src={`${process.env.PUBLIC_URL}/Assets/Mail.gif`} 
                      alt="Email icon animation" 
                      className="object-cover w-10 rounded-lg"
                    />
                    <p className='text-white font-saira'>manishsingh@godims.in</p>
                  </div>
                </button>

                {/* Phone */}
                <button
                  onClick={()=>{window.location.href = `tel:+918826297238`}} 
                >
                  <div className='flex items-center gap-5 cursor-pointer'>
                    <img 
                      src={`${process.env.PUBLIC_URL}/Assets/Phone.gif`} 
                      alt="Phone icon animation" 
                      className="object-cover w-10 rounded-lg"
                    />
                    <p className='text-white font-saira'>+91 88262 97238</p>
                  </div>
                </button>

                {/* WhatsApp */}
                <button
                  onClick={()=>{window.open('https://wa.me/918826297238?text=Hello%2C%20I%20am%20interested%20in%20your%20services.', '_blank');}}
                >
                  <div className='flex items-center gap-5 cursor-pointer'>
                    <img 
                      src={`${process.env.PUBLIC_URL}/Assets/whatsapp.png`} 
                      alt="Whatsapp icon animation" 
                      className="object-cover w-10 rounded-lg"
                    />
                    <p className='text-white font-saira'>Lets Talk</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form and Map Section */}
        <div className='flex justify-center w-full my-10'>
          <div className='flex flex-wrap justify-center w-8/12 gap-8'>
            <div className='flex-1'>
              <ContactForm />
            </div>
            <div className='flex-1 mt-10'>
              <iframe
                title="Google Map of Rohini Sector 3, New Delhi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14005.066201390352!2d77.11246962178733!3d28.70405809572901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03c01d1ebd7d%3A0x2b660eec3498ecf8!2sRohini%20Sector%203%2C%20Rohini%2C%20Delhi%2C%20110085!5e0!3m2!1sen!2sin!4v1699315944737!5m2!1sen!2sin"
                width="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg shadow-lg aspect-square"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
