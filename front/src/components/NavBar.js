import { Link } from "react-router-dom";

// Barra de navegación.
//
// Componente utilizado en todas las páginas
// de la aplicación menos usuario y carrito.
//
function NavBar() {
  return (
    <nav className="bg-[#FAEDCD] px-4 py-3 font-roboto">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-gray-800 font-bold text-lg pl-6">Logo</Link>

        {/* Lista de enlaces */}
        <ul className="flex justify-between items-center space-x-12">
          <li>
            <Link to="/" className="text-gray-800 hover:text-gray-600">Inicio</Link>
          </li>
          <li>
            <Link to="/productos" className="text-gray-800 hover:text-gray-600">Productos</Link>
          </li>
          <li>
            <Link to="/blog" className="text-gray-800 hover:text-gray-600">Blog</Link>
          </li>
          <li>
            <Link to="/contactanos" className="text-gray-800 hover:text-gray-600">Contáctanos</Link>
          </li>
        </ul>

        {/* Contenedor de iconos */}
        <div className="flex items-center space-x-4 pr-6">
          {/* Icono del usuario */}
          <Link to="/perfil" className="text-gray-800 hover:text-gray-600">
            <div className="flex items-center justify-center w-6 h-6">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5s3-1 3 3-3 3-3 3-3-1-3-3 3-3 3-3zM12 14s1 1 3 1 3-1 3-1M3 21a9 9 0 1 1 18 0h-2a7 7 0 0 1-14 0H3z" />
              </svg>
            </div>
          </Link>

          {/* Icono del carrito */}
          <Link to="/ver-carrito" className="text-gray-800 hover:text-gray-600">
            <div className="flex items-center justify-center w-6 h-6">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM9 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 0v10c0 1.104.895 2 2 2h10M11 19H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;