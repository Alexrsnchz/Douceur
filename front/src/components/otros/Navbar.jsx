import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import navbar_logo from '../../assets/logos/navbar_logo.png';
import notification_icon from '../../assets/img_navbar/notification_icon.svg';
import user_icon from '../../assets/img_navbar/user_icon.svg';
import shoppingbag_icon from '../../assets/img_navbar/shoppingbag_icon.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white-50 p-4 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center space-x-4 sm:ml-1 md:ml-6">
        <img src={navbar_logo} alt="Douceur navbar logo" className="h-10" />
      </div>

      {/* Iconos (entre el menú y el logo en móviles y tablets) */}
      <div className="lg:hidden flex items-center sm:space-x-1 md:space-x-4">
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
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'border-b-2 border-[#d4a373] text-[#d4a373]'
              : 'nav-link transition duration-300 ease-in-out hover:border-b-2 border-transparent hover:border-[#d4a373] hover:text-[#d4a373]'
          }
        >
          Inicio
        </NavLink>
        <NavLink
          to="/productos"
          className={({ isActive }) =>
            isActive
              ? 'border-b-2 border-[#d4a373] text-[#d4a373]'
              : 'nav-link transition duration-300 ease-in-out hover:border-b-2 border-transparent hover:border-[#d4a373] hover:text-[#d4a373]'
          }
        >
          Productos
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? 'border-b-2 border-[#d4a373] text-[#d4a373]'
              : 'nav-link transition duration-300 ease-in-out hover:border-b-2 border-transparent hover:border-[#d4a373] hover:text-[#d4a373]'
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/servicios"
          className={({ isActive }) =>
            isActive
              ? 'border-b-2 border-[#d4a373] text-[#d4a373]'
              : 'nav-link transition duration-300 ease-in-out hover:border-b-2 border-transparent hover:border-[#d4a373] hover:text-[#d4a373]'
          }
        >
          Servicios
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }) =>
            isActive
              ? 'border-b-2 border-[#d4a373] text-[#d4a373]'
              : 'nav-link transition duration-300 ease-in-out hover:border-b-2 border-transparent hover:border-[#d4a373] hover:text-[#d4a373]'
          }
        >
          FAQ
        </NavLink>
        <NavLink
          to="/contacto"
          className={({ isActive }) =>
            isActive
              ? 'border-b-2 border-[#d4a373] text-[#d4a373]'
              : 'nav-link transition duration-300 ease-in-out hover:border-b-2 border-transparent hover:border-[#d4a373] hover:text-[#d4a373]'
          }
        >
          Contacto
        </NavLink>
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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'block py-2 px-4 text-[#d4a373]'
                : 'block py-2 px-4 text-gray-800 hover:bg-gray-100'
            }
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/productos"
            className={({ isActive }) =>
              isActive
                ? 'block py-2 px-4 text-[#d4a373]'
                : 'block py-2 px-4 text-gray-800 hover:bg-gray-100'
            }
          >
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? 'block py-2 px-4 text-[#d4a373]'
                : 'block py-2 px-4 text-gray-800 hover:bg-gray-100'
            }
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/servicios"
            className={({ isActive }) =>
              isActive
                ? 'block py-2 px-4 text-[#d4a373]'
                : 'block py-2 px-4 text-gray-800 hover:bg-gray-100'
            }
          >
            Servicios
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              isActive
                ? 'block py-2 px-4 text-[#d4a373]'
                : 'block py-2 px-4 text-gray-800 hover:bg-gray-100'
            }
          >
            FAQ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive
                ? 'block py-2 px-4 text-[#d4a373]'
                : 'block py-2 px-4 text-gray-800 hover:bg-gray-100'
            }
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
