import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch, FaUserMd } from 'react-icons/fa';
import { MdLocalHospital } from "react-icons/md";
import Button from "../Shared/Button";

const Navbar = ({ handleOrderPopup }) => {
  const location = useLocation();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, [userName]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearchHover = () => {
    setIsSearchHovered(!isSearchHovered);
  };

  const handleLogout = () => {
    localStorage.removeItem('userName');
    setUserName('');
  };

  return (
    <nav className="bg-emerald-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center" id='logo'>
            <Link to="/" className="flex items-center text-white">
              <span className="mr-0 " id="LOGOT">Pharma</span>
              <MdLocalHospital className="text-xl text-gray-900" id="LOGO" />
              <span className="mr-0 " id="LOGOT">Store</span>
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-5">
            <Link to="/" className="text-white" id='nav-link'>Accueil</Link>
            <Link to="/about" className="text-white" id='nav-link'>A propos</Link>
            <Link to="/shop" className="text-white" id='nav-link'>Produits</Link>

            {userName ? (
              <>
                <span className="text-slate-950 flex items-center">
                  <span className="mr-1">bienvenu</span>
                  <FaUserMd className="mr-1 text-white"  />
                  {userName}
                </span>
                <Link to="/" onClick={handleLogout} className="text-white" id='nav-link'>Logout</Link>
              </>
            ) : (
              <>
                <Link to="/register" className="text-white" id='nav-link'>S'inscrire </Link>
                <Link to="/login" className="text-white" id='nav-link'>Connexion </Link>
              </>
            )}

            <Button
              text="Contactez"
              bgColor="bg-gray-900"
              textColor="text-white"
              handler={handleOrderPopup}
              customClass="hidden lg:block" // Show button only on larger screens
            />
          </div>
          <div className="flex lg:hidden">
            <button onClick={toggleDropdown} className="text-gray-900">
              {isDropdownOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {isDropdownOpen && (
          <div className="lg:hidden">
            <div className="ml-10 flex flex-col space-y-2">
              <Link to="/" className="text-white" >Accueil</Link>
              <Link to="/about" className="text-white" >A propos</Link>
              <Link to="/shop" className="text-white" >Produits</Link>
              {userName ? (
              <>
                <span className="text-slate-950 flex items-center">
                  <span className="mr-1">bienvenu</span>
                  <FaUserMd className="mr-1 text-white"  />
                  {userName}
                </span>
                <Link to="/" onClick={handleLogout} className="text-white" id='nav-link'>Logout</Link>
              </>
            ) : (
              <>
                <Link to="/register" className="text-white" id='nav-link'>S'inscrire </Link>
                <Link to="/login" className="text-white" id='nav-link'>Connexion </Link>
              </>
            )}

              <Button
                text="Contact"
                bgColor="bg-gray-900"
                textColor="text-white"
                handler={handleOrderPopup}
                w="w-28"
                ml="ml-40"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
