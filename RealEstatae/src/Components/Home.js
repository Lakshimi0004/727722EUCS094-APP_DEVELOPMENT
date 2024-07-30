import React, { useState } from "react";
import Navbar from "./NavbarUser";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const houses = [
  {
    image: "https://beyot.g5plus.net/main/wp-content/uploads/2017/02/property-17-330x180.jpg",
    title: "Luxury Villa",
    description: "A stunning villa with modern amenities.",
  },
  {
    image: "https://beyot.g5plus.net/main/wp-content/uploads/2017/01/property-44-330x180.jpg",
    title: "Cozy Cottage",
    description: "A charming cottage in a serene location.",
  },
  {
    image: "https://beyot.g5plus.net/main/wp-content/uploads/2017/01/property-42-330x180.jpg",
    title: "Urban Apartment",
    description: "A sleek apartment in the heart of the city.",
  },
];

const Home = ({ navigateTo }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("All fields are required.");
      return;
    }

    const wordCount = message.trim().split(/\s+/).length;
    
    if (wordCount < 50) {
      toast.error("Message must be at least 50 words.");
      return;
    }
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    toast.success("Message sent successfully!");
  };

  return (
    <div className="h-full w-full">
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />
      <div
        className="h-[700px] w-full flex justify-center items-center"
        style={{
          backgroundImage:
            'url(https://beyot.g5plus.net/main/wp-content/uploads/2017/02/property-17-1200x600.jpg)',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-black bg-opacity-70 text-white p-6 rounded-lg text-center">
          <h1 className="text-4xl font-extrabold mb-3">
            Discover Your Perfect Home with TerraNest
          </h1>
          <p className="text-xl font-light">
            Your Gateway to Exceptional Living Spaces and Investment Opportunities!
          </p>
        </div>
      </div>
      <div className="h-[250px] w-full bg-black bg-opacity-90 mt-20 flex flex-col justify-center items-center text-white p-6">
        <h2 className="text-3xl font-semibold mb-4">
          <span className="text-red-500">D</span>ISC
          <span className="text-red-500">O</span>VER YOUR 
          <span className="text-red-500">D</span>REAM 
          <span className="text-red-500">H</span>OUSE
        </h2>

        <ul className="text-lg space-y-2 font-medium">
          <li>1. <strong>Wide Range of Properties</strong>: From urban apartments to suburban homes, find your ideal space.</li>
          <li>2. <strong>Expert Agents</strong>: Our knowledgeable agents are here to guide you every step of the way.</li>
          <li>3. <strong>Investment Opportunities</strong>: Explore profitable real estate investments tailored to your needs.</li>
        </ul>
      </div>
      <div className="h-full w-full">
        <h1 className="mr-auto underline pt-10 pl-10 p-1 text-3xl italic font-bold">FIND A PROPERTY</h1>
        <h2 className="mr-auto pl-10 text-2xl italic text-gray-600 font-light">Browse your dream house</h2>
        <div className="flex justify-center items-center mt-10 space-x-4">
          {houses.map((house, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden w-80 cursor-pointer hover:opacity-80">
              <img src={house.image} alt={house.title} className="w-full h-48 object-cover" />
              <div className="p-4 h-32 flex flex-col justify-between">
                <h3 className="text-xl font-bold">{house.title}</h3>
                <p className="text-gray-700">{house.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-gray-300 mt-20 py-10 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-6 font-light">Contact us for more information or to schedule a visit.</p>
        <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded h-32"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
