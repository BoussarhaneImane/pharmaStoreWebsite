import React from "react";
import {
  FaCarSide,
  
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-emerald-500" />,
    title: "Livraison Gratuite",
    description: "Livraison gratuite pour toutes les commandes",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-emerald-500" />,
    title: "PaiementSécurisé",
    description: "Remboursement sous 30 jours",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-emerald-500" />,
    title: "PaiementSécurisé",
    description: "Tous les paiements sont sécurisés",
  },
  {
    id: 4,
    icon: <HiShoppingCart className="text-4xl md:text-5xl text-emerald-500" />,
    title: "Boutique enLigne",
    description: "Assistance technique 24/24",
  },
];


const Services = () => {
  return (
    <div>
      <div className="container my-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {ServiceData.map((data) => (
            <div className="flex flex-col items-start sm:flex-row gap-4">
              {data.icon}
              <div>
                <h1 className="lg:text-xl font-bold">{data.title}</h1>
                <h1 className="text-gray-400 text-sm">{data.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
