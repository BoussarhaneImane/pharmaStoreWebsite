import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

// images import
import Medicament1Img from './p1.png'
import Medicament2Img from './p2.png'
import Medicament3Img from './p3.png'
import Medicament4Img from './p4.png'
import Medicament5Img from './p5.png'
import Medicament6Img from './p6.png'
import Medicament7Img from './p7.png'
import Medicament8Img from './p8.png'

const ProductsData= [
  {
    id: 1,
    img: Medicament1Img,
    title: "Antibiotique",
    price: "$15",
    description: "Traitement contre les infections bactériennes",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Medicament2Img,
    title: "Vitamin D",
    price: "$10",
    description: "Soulage la douleur",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Medicament3Img,
    title: "Antihistaminique",
    price: "$12",
    description: "Réduit les réactions allergiques",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Medicament4Img,
    title: "Anti-inflammatoire",
    price: "$20",
    description: "Diminue l'inflammation",
    aosDelay: "600",
  },
];
const ProductsData2 = [
  {
    id: 5,
    img: Medicament5Img,
    title: "Vitamin E",
    price: "$18",
    description: "Réduit la fièvre",
    aosDelay: "0",
  },
  {
    id: 6,
    img: Medicament6Img,
    title: "Antitussif",
    price: "$14",
    description: "Soulage la toux",
    aosDelay: "200",
  },
  {
    id: 7,
    img: Medicament7Img,
    title: "Antispasmodique",
    price: "$16",
    description: "Réduit les spasmes musculaires",
    aosDelay: "400",
  },
  {
    id: 8,
    img: Medicament8Img,
    title: "Antifongique",
    price: "$22",
    description: "Traite les infections fongiques",
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title=" Parmi nos médicaments " subtitle={"des médicaments disponibles "} />
        {/* Body section */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2}  />
      </div>
    </div>
  );
};

export default Products;
