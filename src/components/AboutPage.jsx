import React from "react";
import Partners from "./Partners/Partners";
import imgurl from './ph1.jpg'
import imgurl2 from './ph4.jpg'
import imgurl3 from './ph3.jpg'
import './About.css'

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
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
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

const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="bg-gray-900 text-white min-h-screen w-full md:w-1/2">
          <div className="container mx-auto py-12 px-4">
            <h1 data-aos="fade-down" className="text-2xl font-bold text-center mb-6">À Propos de Notre Pharma Store</h1>
            <p className="text-xs text-gray-400 leading-relaxed mb-8">
              Bienvenue sur notre Pharma Store, votre destination pour des produits de santé de qualité, livrés directement à votre porte.
              Notre équipe dévouée est là pour vous fournir les médicaments dont vous avez besoin, avec un service rapide et fiable.
              Chez nous, vous trouverez une large gamme de médicaments, de produits de santé et de bien-être, tous disponibles à des prix compétitifs.
            </p>

            {/* Section Réductions */}
            <section className="mb-12">
              <h2 data-aos="zoom-out" className="text-xl font-bold mb-4 text-emerald-500">Réductions et Offres Spéciales</h2>
              <p className="text-xs text-gray-500 leading-relaxed mb-8">
                Nous offrons régulièrement des réductions et des offres spéciales sur une variété de produits de santé et de bien-être.
                Assurez-vous de consulter notre section "Promotions" pour découvrir nos offres en cours et économiser sur vos achats.
              </p>
            </section>

            {/* Section Livraison des Médicaments */}
            <section className="mb-12">
              <h2 data-aos="zoom-out" className="text-xl font-bold mb-4 text-emerald-500">Livraison Rapide et Sécurisée</h2>
              <p className="text-xs text-gray-500 leading-relaxed mb-8">
                Nous comprenons l'importance de recevoir vos médicaments rapidement et en toute sécurité.
                Notre service de livraison est rapide, fiable et discret, afin que vous puissiez avoir l'esprit tranquille en sachant que vos produits arriveront à temps.
              </p>
            </section>

            {/* Section Comment Passer une Commande */}
            <section className="mb-12">
              <h2 data-aos="zoom-out" className="text-xl font-bold mb-4 text-emerald-500">Comment Passer une Commande</h2>
              <p className="text-xs text-gray-500 leading-relaxed mb-8">
                Passer une commande sur notre site est simple et pratique. Il vous suffit de parcourir notre catalogue en ligne, de sélectionner les produits dont vous avez besoin, puis de suivre les étapes pour finaliser votre commande.
                Si vous avez besoin d'aide à tout moment, n'hésitez pas à contacter notre équipe d'assistance clientèle, qui se fera un plaisir de vous guider à travers le processus.
              </p>
            </section>

            {/* Section Sécurité des Données */}
            <section className="mb-12">
              <h2 data-aos="zoom-out" className="text-xl font-bold mb-4 text-emerald-500">Sécurité de Vos Données</h2>
              <p className="text-xs text-gray-500 leading-relaxed mb-8">
                La sécurité de vos données est notre priorité absolue. Nous utilisons les dernières technologies de sécurité pour protéger vos informations personnelles et financières contre tout accès non autorisé.
                Vous pouvez avoir confiance en notre engagement à sécuriser vos données et à protéger votre vie privée à chaque étape de votre expérience d'achat.
              </p>
            </section>

            {/* Section Engagement envers la Langue Française */}
            <section className="mb-12">
              <h2 data-aos="zoom-out" className="text-xl font-bold mb-4 text-emerald-500">Notre Engagement envers la Langue Française</h2>
              <p className="text-xs text-gray-500 leading-relaxed mb-8">
                Nous sommes fiers de servir la communauté francophone et nous nous engageons à fournir un service de haute qualité en français.
                Notre site web est entièrement disponible en français, et notre équipe est composée de professionnels bilingues prêts à répondre à vos questions et à vous fournir le soutien dont vous avez besoin dans votre langue maternelle.
                Chez nous, vous pouvez être sûr de recevoir un service personnalisé et attentionné, dans la langue que vous préférez.
              </p>
            </section>

            {/* Section Contactez-Nous */}
            <section>
              <h2 data-aos="zoom-out" className="text-xl font-bold mb-4 text-emerald-500">Contactez-Nous</h2>
              <p className="text-xs text-gray-500 leading-relaxed mb-8">
                Si vous avez des questions, des préoccupations ou des commentaires, n'hésitez pas à nous contacter. Notre équipe amicale est là pour vous aider et vous fournir l'assistance dont vous avez besoin.
                Vous pouvez nous joindre par téléphone, par e-mail ou via notre formulaire de contact en ligne. Nous sommes impatients de vous entendre et de vous aider dans votre parcours de santé.
              </p>
            </section>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          {/* Sections de publicités */}
          <div className="h-full flex justify-between flex-col">
            {/* Première section de publicité */}
            <div className="flex justify-center items-center w-80 h-80">
              <img data-aos="zoom-out" src={imgurl} className="rounded-2xl ml-96 mt-80 shadow-md" />
            </div>
            {/* Seconde section de publicité */}
            <div className="flex justify-center items-center w-80 h-80">
              <img data-aos="zoom-in"  src={imgurl2} className="rounded-2xl mt-[-100px] ml-12 shadow-md" />
            </div>
            {/* Troisième section de publicité */}
            <div className="flex justify-center items-center w-80 h-80">
              <img data-aos="fade-down" src={imgurl3} className="rounded-2xl mt-[-300px] ml-96 shadow-md" />
            </div>
            <h1 className="text-sm text-gray-400  text-center mt-[-100px] p-4   ">Tous vos besoins en médicaments sont les bienvenus chez nous !</h1>

          </div>
        </div>
      </div>
      {/* Contenu en dessous des sections de publicités */}
      <div className="mt-[-108px]">
        <Partners/>
      </div>
      {/* Pied de page */}
      <div className="bg-emerald-500 text-white">
        <div className="container">
          <div className="grid md:grid-cols-3 pb-20 pt-5">
            {/* Détails de l'entreprise */}
            <div className="py-8 px-4">
              <a href="/" className="flex items-center text-white">
                <span className="mr-0 " id="LOGOT">Pharma</span>
                <MdLocalHospital className="text-xl text-gray-900" id="LOGO" />
                <span className="mr-0 " id="LOGOT">Store</span>
              </a>
              <p className="dark:text-white/70 lg:pr-24 pt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores alias cum
              </p>
              <p className="mt-4">
                make a lot websites
              </p>
              <a
                href=""
                target="_blank"
                className="inline-block bg-gray-900 text-white py-2 px-4 mt-4 text-sm rounded-full"
              >
                Contact Us
              </a>
            </div>
            {/* Liens du pied de page */}
            <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
              <div className="py-8 px-4">
                <h1 className="text-xl text-gray-900 font-bold sm:text-left mb-3">
                  Important Links
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
              {/* Liens de la deuxième colonne */}
              <div className="py-8 px-4">
                <h1 className="text-xl text-gray-900 font-bold sm:text-left mb-3">
                  Quick Links
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
                <h1 className="text-xl font-bold sm:text-left mb-3 text-gray-900">Address</h1>
                <div>
                  <div className="flex items-center gap-3">
                    <FaLocationArrow />
                    <p>Make Web site pvt,Full Stack Devloper </p>
                  </div>
                  <div className="flex items-center gap-3 mt-6">
                    <FaMobileAlt />
                    <p>+91 1234567890</p>
                  </div>
                  {/* Liens sociaux */}
                  <div className="flex items-center gap-3 mt-6">
                    <a href="#">
                      <FaInstagram className="text-3xl text-gray-900 hover:text-zinc-950 duration-300" />
                    </a>
                    <a href="#">
                      <FaFacebook className="text-3xl text-gray-900 hover:text-zinc-950 duration duration-200" />
                    </a>
                    <a href="#">
                      <FaLinkedin className="text-3xl text-gray-900 hover:text-zinc-950 duration duration-200" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Droits d'auteur */}
          <footer className="text-center py-4 text-gray-900 dark:text-gray-400 text-sm">
            &copy; 2024 Full Stack Devloper . All Rights Reserved.
          </footer>
        </div>
      </div>
    </>
  );
};

export default Hero;
