import React from "react";
import bgabout from "../../assets/profile-pictures/download (3).jpeg"
import bgabout2 from "../../assets/profile-pictures/images (1).jpeg"
const About = () => {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative">
        <img src={bgabout} alt="About Background" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-4">
            We provide cutting-edge VR development tools tailored for small businesses. Our mission is to make immersive technology accessible and easy to use.
          </p>
          <p className="text-md text-gray-400 max-w-2xl mb-6">
            With our expertise in VR solutions, we empower startups and enterprises to create engaging virtual experiences. From prototyping to deployment, we support businesses at every step.
          </p>
          <p className="text-md text-gray-400 max-w-2xl">
            Our vision is to make VR tools as seamless and efficient as possible, ensuring innovation and creativity thrive in the virtual space.
          </p>
        </div>
        <div className="relative z-10 w-full max-w-4xl mt-8">
          <img src={bgabout2} alt="VR Technology" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    );
  };


export default About;