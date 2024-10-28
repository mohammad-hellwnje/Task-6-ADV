import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleMenu, toggleDarkMode } from '../../redux/actions/navbarActions';
import img1 from "./../../assets/image/moon.png";
import img2 from "./../../assets/image/sun.png";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(state => state.navbar.isMenuOpen);
  const isDarkMode = useSelector(state => state.navbar.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <nav className={`fixed top-0 w-full z-10 px-5 py-7 lg:px-28 ${isDarkMode ? 'bg-darkBg text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold">Mohammad</div>
        <div className="hidden sm:flex items-center">
          <Link to="/" className="hover:underline text-lg mr-7.5">Blog</Link>
          <Link to="/projects" className="hover:underline text-lg mr-7.5">Projects</Link>
          <Link to="/about" className="hover:underline text-lg mr-7.5">About</Link>
          <Link to="/newsletter" className="hover:underline text-lg mr-5.5">Newsletter</Link>
          <button
            onClick={() => dispatch(toggleDarkMode())}
            className={`relative w-24 h-10 rounded-full transition-colors duration-500 ease-in-out ${isDarkMode ? 'bg-white' : 'bg-black'}`}
            style={{ overflow: 'hidden' }}
          >
            <span
              className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full transition-transform duration-500 ease-in-out ${isDarkMode ? 'left-1 bg-black' : 'right-1 bg-white'}`}
              style={{ transition: 'transform 0.5s ease-in-out' }}
            />
            <img
              src={img2}
              alt="sun"
              className={`absolute left-2 top-1/2 transform -translate-y-1/2 transition-all duration-500 ease-in-out ${isDarkMode ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
              style={{ width: '24px', height: '24px', transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out' }}
            />
            <img
              src={img1}
              alt="moon"
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 transition-all duration-500 ease-in-out ${isDarkMode ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
              style={{ width: '24px', height: '24px', transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out' }}
            />
          </button>
        </div>
        <button
          className="sm:hidden p-2 rounded focus:outline-none"
          onClick={() => dispatch(toggleMenu())}
        >
          <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
        </button>
      </div>
      {isMenuOpen && (
        <div className={`fixed inset-0 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} bg-opacity-90 flex flex-col justify-center items-center lg:hidden`}>
          <ul className="space-y-6 text-center">
            <li className="text-lg mb-15.5">Mohammad</li>
            <li><Link to="/" className="hover:underline text-lg" onClick={() => dispatch(toggleMenu())}>Blog</Link></li>
            <li><Link to="/projects" className="hover:underline text-lg" onClick={() => dispatch(toggleMenu())}>Projects</Link></li>
            <li><Link to="/about" className="hover:underline text-lg" onClick={() => dispatch(toggleMenu())}>About</Link></li>
            <li><Link to="/newsletter" className="hover:underline text-lg" onClick={() => dispatch(toggleMenu())}>Newsletter</Link></li>
          </ul>
          <button
            onClick={() => dispatch(toggleDarkMode())}
            className={`relative w-24 h-10 mt-8 rounded-full transition-colors duration-500 ease-in-out ${isDarkMode ? 'bg-white' : 'bg-black'}`}
            style={{ overflow: 'hidden' }}
          >
            <span
              className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full transition-transform duration-500 ease-in-out ${isDarkMode ? 'left-1 bg-black' : 'right-1 bg-white'}`}
              style={{ transition: 'transform 0.5s ease-in-out' }}
            />
            <img
              src={img2}
              alt="sun"
              className={`absolute left-2 top-1/2 transform -translate-y-1/2 transition-all duration-500 ease-in-out ${isDarkMode ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
              style={{ width: '24px', height: '24px', transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out' }}
            />
            <img
              src={img1}
              alt="moon"
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 transition-all duration-500 ease-in-out ${isDarkMode ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
              style={{ width: '24px', height: '24px', transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out' }}
            />
          </button>
          <button
            className="absolute bottom-4 mx-auto left-1/2 transform -translate-x-1/2 text-3xl text-gray-400 hover:text-gray-200"
            onClick={() => dispatch(toggleMenu())}
          >
            <AiOutlineClose />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
