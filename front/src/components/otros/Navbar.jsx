import { useState } from 'react';
import { Link } from 'react-router-dom';
import navbar_logo from '../../assets/logos/navbar_logo.png';
import notification_icon from '../../assets/img_navbar/notification_icon.svg';
import user_icon from '../../assets/img_navbar/user_icon.svg';
import shoppingbag_icon from '../../assets/img_navbar/shoppingbag_icon.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white-50 p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-4 ml-6">
        <img src={navbar_logo} alt="Douceur navbar logo" className="h-10" />
      </div>

      {/* Menú Desplegable (solo visible en dispositivos móviles) */}
      <div className="lg:hidden">
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

      {/* Enlaces (ocultos en dispositivos móviles) */}
      <ul
        className={`lg:flex lg:items-center lg:space-x-12 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <li>
          <Link
            to="/"
            className="nav-link transition duration-300 ease-in-out hover:border-b-2 border-transparent hover:border-[#d4a373] hover:text-[#d4a373]"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/productos"
            className="nav-link transition duration-300 ease-in-out hover:border-b-2 border-transparent hover:border-[#d4a373] hover:text-[#d4a373]"
          >
            Productos
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className="nav-link transition duration-300 ease-in-out hover:border-b-2 border-transparent hover:border-[#d4a373] hover:text-[#d4a373]"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/servicios"
            className="nav-link transition duration-300 ease-in-out hover:border-b-2 border-transparent hover:border-[#d4a373] hover:text-[#d4a373]"
          >
            Servicios
          </Link>
        </li>
        <li>
          <Link
            to="/faq"
            className="nav-link transition duration-300 ease-in-out hover:border-b-2 border-transparent hover:border-[#d4a373] hover:text-[#d4a373]"
          >
            FAQ
          </Link>
        </li>
        <li>
          <Link
            to="/contactanos"
            className="nav-link transition duration-300 ease-in-out hover:border-b-2 border-transparent hover:border-[#d4a373] hover:text-[#d4a373]"
          >
            Contáctanos
          </Link>
        </li>
      </ul>

      {/* Iconos */}
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
    </nav>
  );
}

export default Navbar;
