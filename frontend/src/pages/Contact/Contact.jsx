import React from "react";
import c1 from "../../assets/profile-pictures/download (4).jpeg"
const Contact = () => {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative">
        <img src={c1} alt="Contact Background" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-gray-400 mb-8">Reach out to us for any queries or collaboration opportunities.</p>
          <p className="text-md text-gray-400 max-w-2xl mb-6">
            Our team is here to assist you with VR tool integration, troubleshooting, and business solutions. Let’s bring your VR ideas to life!
          </p>
        </div>
        <form className="relative z-10 w-full max-w-lg bg-gray-900 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Name</label>
            <input type="text" className="w-full p-3 bg-gray-800 text-white rounded" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Email</label>
            <input type="email" className="w-full p-3 bg-gray-800 text-white rounded" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea className="w-full p-3 bg-gray-800 text-white rounded" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button className="w-full p-3 bg-orange-500 rounded text-black font-bold hover:bg-orange-600">Send Message</button>
        </form>
        <div className="relative z-10 w-full max-w-2xl mt-8">
          <iframe
            title="Google Map"
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508618!2d144.95592831531843!3d-37.81720997975181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf4c3c3e34f4e6d1a!2sMelbourne!5e0!3m2!1sen!2sau!4v1633074727129!5m2!1sen!2sau"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    );
  };
  export default Contact;