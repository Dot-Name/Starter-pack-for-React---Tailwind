import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  
    // Construct the WhatsApp URL
    const whatsappURL = `https://wa.me/918826297238?text=${encodeURIComponent(
      `Hello, I am ${formData.name}. My email is ${formData.email}. Message: ${formData.message}`
    )}`;
  
    // Open WhatsApp URL in a new tab
    window.open(whatsappURL, "_blank");
  
    // Clear the form
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };
  

  return (
    <div className="flex justify-center mt-10">
      <form
        className="flex flex-col w-11/12 max-w-2xl gap-5 p-10 bg-gray-900 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
       <h3 className="text-xl text-center text-white md:text-3xl font-orbitron">
        "Turn Ideas Into Reality – Get in Touch!"
      </h3>


        {/* Name Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-lg text-white font-saira">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`px-2 py-2 rounded-lg border-2 ${
              errors.name ? 'border-red-500' : 'border-transparent'
            } focus:outline-none focus:ring-2 focus:ring-customCyan`}
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        {/* Email Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-lg text-white font-saira">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`px-4 py-2 rounded-lg border-2 ${
              errors.email ? 'border-red-500' : 'border-transparent'
            } focus:outline-none focus:ring-2 focus:ring-customCyan`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Message Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-lg text-white font-saira">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`px-4 py-2 rounded-lg border-2 ${
              errors.message ? 'border-red-500' : 'border-transparent'
            } focus:outline-none focus:ring-2 focus:ring-customCyan`}
            placeholder="Enter your message"
            rows="5"
          ></textarea>
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="relative animate-bounce inline-block px-4 py-2 mt-5 text-sm font-medium text-white transition-all duration-300 border-2 border-transparent rounded-full sm:px-6 sm:py-3 sm:text-lg lg:text-xl font-orbitron bg-customCyan hover:border-customCyan hover:bg-transparent hover:text-customCyan"
        >
          Get In Touch
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
