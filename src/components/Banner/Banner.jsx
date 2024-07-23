import React from "react";
import { Link } from "react-router-dom";
import image from '../Products/p5.png'; // Assurez-vous de remplacer l'URL de l'image par le vrai URL

const Banner = ({ data }) => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-2 m-0">
      <div className="container  mx-auto mt-[-150px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-gray-900 rounded-xl bg-white">
          {/* Left column for the title */}
          <div className="p-6 sm:p-8 col-span-2">
            <p data-aos="slide-right" className="text-lg">
              {data.discount}
            </p>
            <h1
              data-aos="zoom-out"
              className="uppercase text-lg lg:text-2xl font-bold"
            >
              {data.title}
            </h1>
            <p data-aos="fade-up" className="text-sm">
              {data.date}
            </p>
            <p data-aos="fade-up" className="text-sm mt-4">
              {data.title4}
            </p>
            <div data-aos="fade-down" className="mt-6">
              <Link to='/shop'>
                <button className="bg-emerald-500 text-white py-2 px-4 rounded-lg hover:bg-emerald-500 transition duration-300">
                Commandez
                </button>
              </Link>
            </div>
          </div>
          
          {/* Right column for the image */}
          <div data-aos="zoom-in" className="h-full flex items-center col-span-1">
            <img
              src={image}
              alt="Pharma Store"
              className="w-[100px] md:w-[150px] mx-auto object-cover rounded-xl mb-4 mt-[-40px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;




