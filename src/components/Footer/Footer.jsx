import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Accueil",
    link: "/#",
  },
  {
    title: "À propos",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="bg-emerald-500 text-white">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* Détails de la société */}
          <div className="py-8 px-4">
            <a href="/" className="flex items-center text-white">
              <span className="mr-0" id="LOGOT">Pharma</span>
              <MdLocalHospital className="text-xl text-gray-900" id="LOGO" />
              <span className="mr-0" id="LOGOT">Store</span>
            </a>
            <p className="dark:text-white/70 lg:pr-24 pt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores alias cum
            </p>
            <p className="mt-4">
              créer de nombreux sites web
            </p>
            <a
              href=""
              target="_blank"
              className="inline-block bg-zinc-950 text-white py-2 px-4 mt-4 text-sm rounded-full"
            >
              Contactez-nous
            </a>
          </div>

          {/* Liens du pied de page */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl text-gray-900 font-bold sm:text-left mb-3">
                Liens Importants
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="hover:text-gray-900 duration-500"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Deuxième colonne de liens */}
            <div className="py-8 px-4">
              <h1 className="text-xl text-gray-900 font-bold sm:text-left mb-3">
                Liens Rapides
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Adresse de l'entreprise */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3 text-gray-900">Adresse</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Créer des sites web , Développeuese imane boussarhane </p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+33 1234567890</p>
                </div>

                {/* Liens sociaux */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl text-gray-900 hover:text-gray-950 duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl text-gray-900 hover:text-gray-950 duration duration-200" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl text-gray-900 hover:text-gray-950 duration duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Droits d'auteur */}
        <footer className="text-center py-4 text-gray-900 font-medium text-sm">
          &copy; 2024 Développeur Full Stack. Tous droits réservés.
        </footer>
      </div>
    </div>
  );
};

export default Footer;
