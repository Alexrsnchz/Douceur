import { useState } from 'react';
import { Link } from 'react-router-dom';
import navbar_logo from '../../assets/logos/navbar_logo.png';
import notification_icon from '../../assets/img_navbar/notification_icon.svg';
import user_icon from '../../assets/img_navbar/user_icon.svg';
import shoppingbag_icon from '../../assets/img_navbar/shoppingbag_icon.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white-50 p-4 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center space-x-4 ml-6">
        <img src={navbar_logo} alt="Douceur navbar logo" className="h-10" />
      </div>

      {/* Iconos (entre el menú y el logo en móviles y tablets) */}
      <div className="lg:hidden flex items-center space-x-4">
        {/* Iconos */}
        <img
          src={notification_icon}
          alt="Icono de notificación"
          className="h-6 cursor-pointer"
        />
        <img
          src={user_icon}
          alt="Icono de usuario"
          className="h-6 cursor-pointer"
        />
        <img
          src={shoppingbag_icon}
          alt="Icono de carrito de compra"
          className="h-6 cursor-pointer"
        />

        {/* Menú Hamburguesa (móviles y tablets) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu-button"
        >
          <svg
            className="h-6 w-6 text-gray-600 hover:text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Enlaces (visibles solo en pantallas normales) */}
      <div className="hidden lg:flex items-center space-x-12">
        <Link
          to="/"
          className="nav-link transition duration-300 ease-in-out hover:border-b-2 border-transparent hover:border-[#d4a373] hover:text-[#d4a373]"
        >
          Inicio
        </Link>
        <Link
          to="/productos"
          className="nav-link transition duration-300 ease-in-out hover:border-b-2 border-transparent hover:border-[#d4a373] hover:text-[#d4a373]"
        >
          Productos
        </Link>
        <Link
          to="/blog"
          className="nav-link transition duration-300 ease-in-out hover:border-b-2 border-transparent hover:border-[#d4a373] hover:text-[#d4a373]"
        >
          Blog
        </Link>
        <Link
          to="/servicios"
          className="nav-link transition duration-300 ease-in-out hover:border-b-2 border-transparent hover:border-[#d4a373] hover:text-[#d4a373]"
        >
          Servicios
        </Link>
        <Link
          to="/faq"
          className="nav-link transition duration-300 ease-in-out hover:border-b-2 border-transparent hover:border-[#d4a373] hover:text-[#d4a373]"
        >
          FAQ
        </Link>
        <Link
          to="/contactanos"
          className="nav-link transition duration-300 ease-in-out hover:border-b-2 border-transparent hover:border-[#d4a373] hover:text-[#d4a373]"
        >
          Contáctanos
        </Link>
      </div>

      {/* Iconos (visibles en pantallas normales) */}
      <div className="hidden lg:flex items-center space-x-4 mr-6">
        <img
          src={notification_icon}
          alt="Icono de notificación"
          className="h-6 cursor-pointer"
        />
        <img
          src={user_icon}
          alt="Icono de usuario"
          className="h-6 cursor-pointer"
        />
        <img
          src={shoppingbag_icon}
          alt="Icono de carrito de compra"
          className="h-6 cursor-pointer"
        />
      </div>

      {/* Menú Desplegable (lista) */}
      <ul
        className={`absolute top-full right-0 bg-white p-4 lg:hidden ${
          isOpen ? 'block' : 'hidden'
        } z-10`}
        style={{ backgroundColor: 'white' }}
      >
        <li>
          <Link
            to="/"
            className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/productos"
            className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
          >
            Productos
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/servicios"
            className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
          >
            Servicios
          </Link>
        </li>
        <li>
          <Link
            to="/faq"
            className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
          >
            FAQ
          </Link>
        </li>
        <li>
          <Link
            to="/contactanos"
            className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
          >
            Contáctanos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
