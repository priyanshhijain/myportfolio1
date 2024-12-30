import React from "react";
import shoplane from "../assets/shoplane.jpg";
import movie from "../assets/movie.jpg";
import carz from "../assets/carz.jpg";
import Tailwind from "../assets/tailwind.png";

function Work() {
  return (
    <div name="work" className="w-full bg-[#0a192f] text-gray-300 pb-[250px]">
      <p className="text-4xl font-bold inline border-b-4 border-pink-600 mx-[200px] mb-8">
        Work
      </p>

      {/* Container for the projects */}
      <div className="max-w-[1200px] mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-12">

        {/* Project 1: Personal Portfolio */}
        {/* Add your first project here */}

        {/* Project 2: NGO Website */}
        <div className="project-card hover:scale-105 duration-500 transform hover:shadow-2xl rounded-lg bg-[#1e2a3a] p-6 w-[350px]"> {/* Increased width here */}
          <img
            className="w-full h-[200px] object-cover rounded-lg mb-4"
            src="/environment.png"
            alt="NGO Website"
          />

          <p className="text-xl font-semibold text-gray-100">NGO Website</p>
          <p className="text-sm text-gray-400 mb-4">
            Developed a website for Navi Mumbai NGO using HTML, CSS, and JavaScript.
          </p>
          <a
            href="https://environmentlifefoundation.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline"
          >
            View Project
          </a>
        </div>

        {/* Project 3: Navi Mumbai Police App */}
        <div className="project-card hover:scale-105 duration-500 transform hover:shadow-2xl rounded-lg bg-[#1e2a3a] p-6 w-[350px]"> {/* Increased width here */}
          <img
            className="w-full h-[200px] object-cover rounded-lg mb-4"
            src="/mumbai.png"
            alt="Navi Mumbai Police App"
          />

          <p className="text-xl font-semibold text-gray-100">Navi Mumbai Police App</p>
          <p className="text-sm text-gray-400 mb-4">
            Contributed to the development of forms and features using Next.js and Tailwind CSS for Navi Mumbai Police.
          </p>
          <a
            href="https://navimumbaiapp.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline"
          >
            View Project
          </a>
        </div>

        {/* Project 4: E-commerce Site */}
        <div className="project-card hover:scale-105 duration-500 transform hover:shadow-2xl rounded-lg bg-[#1e2a3a] p-6 w-[350px]"> {/* Increased width here */}
          <img className="w-full h-[200px] object-cover rounded-lg mb-4" src={shoplane} alt="E-commerce Site" />
          <p className="text-xl font-semibold text-gray-100">E-commerce Site</p>
          <p className="text-sm text-gray-400 mb-4">
            Created an e-commerce platform with API integration and Redux Toolkit for state management.
          </p>
          <a
            href="https://shoplane-ecommerce.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;
