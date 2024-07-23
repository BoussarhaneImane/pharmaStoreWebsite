import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import { TbPasswordUser } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import imgsrc from './signp.jpg';
import './registre.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Démarrer le chargement
        try {
            const response = await axios.post('https://backend-projecteco.onrender.com/register', formData);
      
            setSuccessMessage(response.data.success);
            setErrorMessage('');
            setFormData({
                name: '',
                email: '',
                password: ''
            });
            localStorage.setItem('userName', formData.name);
            navigate('/');
        } catch (error) {
            console.error('Error during registration:', error.response.data);
            setErrorMessage(error.response.data.message || 'An error occurred');
            setSuccessMessage('');
        } finally {
            setIsLoading(false); // Arrêter le chargement
        }
    };

    return (
        <>
            <div className='ALL flex flex-col'>
                <center className='mt-2'>
                    <Link to='/' className="text-3xl font-medium text-indigo-950">
                        retour à l'accueil
                    </Link>
                </center>
                <div style={{ marginTop: '20px' }} className="container flex justify-center items-stretch w-full lg:w-[75%]">
                    <div className="text-section flex-1 bg-white rounded-l-xl p-3">
                        <img src={imgsrc} alt="Signup" className="h-full object-cover rounded-lg lg:rounded-none" />
                    </div>
                    <div className="form-section flex flex-col justify-center items-center bg-gray-900 rounded-r-xl p-4">
                        <h1 className="text-white text-center my-8 font-medium text-2xl">Créez un compte avec nous</h1>
                        {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}
                        {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}
                        <form className="form flex flex-col items-center" onSubmit={handleSubmit}>
                            <div className="input-group">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded outline-none m-3 text-xs"
                                />
                                <FaUserLarge className='ml-48 mt-[-50px] text-white' />
                            </div>
                            <div className="input-group">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="Email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded outline-none m-3 text-xs"
                                />
                                <MdEmail className="mt-[-50px] text-white" />
                            </div>
                            <div className="input-group">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded outline-none m-3 text-xs"
                                />
                                <TbPasswordUser className="mt-[-50px] text-white" />
                            </div>
                            <Link to='/login' className="text-center block text-sm text-gray-100">
                                Vous avez déjà un compte? <span style={{ textDecoration: 'underline solid 1px white' }} className="text-emerald-500 text-sm">Connexion ici</span>
                            </Link>
                            <button
                                type="submit"
                                className="button w-[65%] p-2 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 text-xs mt-4"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Loading...' : 'Sign Up'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
