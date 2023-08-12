import React from "react";
import shoplane from "../assets/shoplane.jpg";
import movie from "../assets/movie.jpg";
import carz from "../assets/carz.jpg";
import Tailwind from "../assets/tailwind.png";

function Work() {
  return (
    <div
      name="work"
      className="w-full  bg-[#0a192f] text-gray-300 pb-[250px]"
    >
      <p className="text-4xl font-bold inline border-b-4 border-pink-600 mx-[200px] ">
        Work
      </p>
      <div className="max-w-[300px] mx-auto p-4 md:flex justify-center md:max-w-[1000px]">
        <div className="hover:scale-110 duration-500">
          <img className="w-[90%] mt-10 mx-auto" src={carz} alt="HTML icon" />
          <p className="pt-[33px]">E-Cars website using Html css</p>
          
        </div>
        <div className=" hover:scale-110 duration-500">
          <img className="w-[90%] mt-10 mx-auto" src={movie} alt="HTML icon" />
          <p className="pt-[33px]" >Moviedb website using React</p>

         
        </div>
        <div className=" hover:scale-110 duration-500">
          <img className="w-[90%] mt-10 mx-auto" src={shoplane} alt="HTML icon" />
          <p className="pt-[33px]">Shoplane E-commerce website using React and redux-toolkit</p>
         
        </div>
      </div>
    </div>
  );
}

export default Work;
