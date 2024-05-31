import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import navbar_logo from '../../assets/images/logos/navbar_logo.png';
import notification_icon from '../../assets/images/navbar/notification_icon.svg';
import user_icon from '../../assets/images/navbar/user_icon.svg';
import cart_icon from '../../assets/images/navbar/cart_icon.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulación de autenticación

  return (
    <nav className="bg-white-50 p-4 flex items-center justify-between relative">
      <div className="flex items-center space-x-4 sm:ml-1 md:ml-6">
        <img src={navbar_logo} alt="Douceur navbar logo" className="h-10" />
      </div>

      <div className="lg:hidden flex items-center sm:space-x-1 md:space-x-4">
        <img
          src={notification_icon}
          alt="Icono de notificación"
          className="h-6 cursor-pointer"
        />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <img
              src={user_icon}
              alt="Icono de usuario"
              className="h-6 cursor-pointer"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {!isLoggedIn ? (
              <>
                <DropdownMenuItem as={NavLink} to="/login">
                  Iniciar sesión
                </DropdownMenuItem>
                <DropdownMenuItem as={NavLink} to="/register">
                  Registrarme
                </DropdownMenuItem>
              </>
            ) : (
              <>
                <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem as={NavLink} to="/profile">
                  Perfil
                </DropdownMenuItem>
                <DropdownMenuItem as={NavLink} to="/logout">
                  Cerrar sesión
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
        <img
          src={cart_icon}
          alt="Icono de carrito de compra"
          className="h-6 cursor-pointer"
        />
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

      <div className="hidden lg:flex items-center space-x-4 mr-6">
        <img
          src={notification_icon}
          alt="Icono de notificación"
          className="h-6 cursor-pointer"
        />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <img
              src={user_icon}
              alt="Icono de usuario"
              className="h-6 cursor-pointer"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {!isLoggedIn ? (
              <>
                <DropdownMenuItem>
                  <Link to="/login" className="font-semibold">
                    Iniciar sesión
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/registro" className="font-semibold">
                    Registrarme
                  </Link>
                </DropdownMenuItem>
              </>
            ) : (
              <>
                <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/perfil">Perfil</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/logout">Cerrar sesión</Link>
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
        <img
          src={cart_icon}
          alt="Icono de carrito de compra"
          className="h-6 cursor-pointer"
        />
      </div>
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
