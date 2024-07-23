import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/Navbar/Nav.jsx';

import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Category from "./components/Category/Category.jsx";

import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Banner2 from "./components/Banner/Banner2.jsx";
import Partners from "./components/Partners/Partners.jsx";
import Products from "./components/Products/Products.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import ShopPage from "./components/Shop/ShopPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import Login from "./Login.jsx"; // Assurez-vous d'avoir le bon chemin d'import
import Register from "./Register.jsx"; // Assurez-vous d'avoir le bon chemin d'import

import Banner3 from './components/Banner/Banner3.jsx';
import PaymentPage from './components/Shop/components/PaymentPage.jsx';
import NotFoundPage from './components/Shop/components/NotFoundPage.jsx';
const BannerData = {
  discount: "20%", // Pourcentage de réduction
  title: "Achetez Vos Médicaments en Ligne", // Titre de la promotion
  date: "Valable jusqu'au 31 janvier", // Date de validité de la promotion
  title2: "Pharma Boutique", // Titre du produit
  title3: "Vente de médicaments en ligne", // Titre de la vente
  title4: "Profitez de notre large sélection de médicaments en ligne et faites vos achats en toute sécurité depuis chez vous.", // Description du produit ou de la promotion
};
const BannerData2= {
  discount: "15%", // Pourcentage de réduction
  title: "Surveillance de la tension facile", // Titre de la promotion
  date: "Valable jusqu'au 15 avril", // Date de validité de la promotion
  title2: "Tensiomètre intelligent", // Titre du produit
  title3: "Promotion printanière", // Titre de la vente
  title4: "Obtenez un contrôle précis de votre tension artérielle avec notre tensiomètre intelligent. Profitez de sa facilité d'utilisation et de sa technologie avancée pour une surveillance efficace de votre santé.", // Description du produit ou de la promotion
};


const App = () => {
 
  const [orderPopup, setOrderPopup] = React.useState(false);



  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Router>
      
        <Routes>
       
          <Route
            path={"/"}
            element={
              <>
                <Nav />
                <Navbar handleOrderPopup={handleOrderPopup} />
                <Hero handleOrderPopup={handleOrderPopup} />
                <Category />
                
                <Services />
                <Banner data={BannerData} />
                <Products />
                <Banner2 data={BannerData2} />
                <Banner3/>
                <Partners />
                <Footer />
                <Popup
                  orderPopup={orderPopup}
                  handleOrderPopup={handleOrderPopup}
                />
              </>
            }
          />
          <Route path="/shop"  element={
              <>
             <Nav/>
               <Navbar handleOrderPopup={handleOrderPopup} />
               <ShopPage/>
              </>}/>
          <Route path="/about"   element={
              <>
               <Nav/>
               <Navbar handleOrderPopup={handleOrderPopup} />
               <AboutPage/>
              </>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payement"  element={
              <>
             <Nav/>
               <Navbar handleOrderPopup={handleOrderPopup} />
               <PaymentPage/>
              </>}/>
              <Route path="/payment" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;


