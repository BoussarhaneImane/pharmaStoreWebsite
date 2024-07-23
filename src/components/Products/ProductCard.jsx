import React from "react";
import { Link } from "react-router-dom";
import Button from "../Shared/Button";


const ProductCard = ({ data }) => {
  

  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* card section */}
        {data.map((product) => (
          <div
            data-aos="fade-up"
            data-aos-delay={product.aosDelay}
            className="group relative p-4 rounded-md flex flex-col items-center justify-center"
            key={product.id}
          >
            <div className="bg-emerald-500 h-8 w-full flex items-center justify-center rounded-lg">
              <p className="text-white font-medium">-30%</p>
            </div>
            <div className="bg-white h-52 w-52 flex items-center justify-center rounded-xl">
              <img
                src={product.img}
                alt=""
                className="h-28 w-28 object-contain transition duration-300 ease-in-out filter"
              />
            </div>
            {/* hover button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-200 bg-opacity-50 rounded-md">
              {/* Button component */}
            </div>
            <div className="text-center mt-2 text-gray-900">
              <h2 className="font-medium">{product.title}</h2>
              <h2 className="font-bold text-emerald-500 text-xl">{product.price}</h2>
            </div>
            <Link to="/shop" className="text-xs mt-2 ml-2 font-medium">
                        <Button
                          text="Commendez"
                          bgColor="bg-gray-900"
                          textColor="text-white"
                          rounded="rounded-2xl"
                          
                        />
                      </Link>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
