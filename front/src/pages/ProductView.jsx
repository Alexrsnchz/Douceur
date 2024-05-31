import React from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/misc/Navbar.jsx';
import Footer from '@/components/misc/Footer.jsx';

import productImage from '../assets/images/product/sample_product.jpg';

function ProductView() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <div className="relative flex flex-col md:flex-row bg-white rounded-xl shadow-lg flex-grow mx-4 my-4 md:mx-8 md:my-8 lg:mx-16 xl:mx-24 p-4 md:p-8 lg:p-12">
          {/* Imagen del Producto */}
          <div
            className="md:w-1/2 bg-cover bg-center rounded-md"
            style={{ backgroundImage: `url(${productImage})` }}
          >
            <img
              src={productImage}
              alt="Producto"
              className="w-full h-full object-cover opacity-0 rounded-md"
            />
          </div>

          {/* Detalles del Producto */}
          <div className="flex-1 flex flex-col justify-center p-4 md:p-8 lg:p-12">
            {/* Categoría */}
            <div className="inline-block bg-pink-200 text-pink-800 text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wide mb-2 max-w-max">
              Categoría
            </div>

            {/* Título */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Título del Producto
            </h1>

            {/* Descripción */}
            <p className="text-gray-700 mb-6">
              Aquí va la descripción del producto. Describa las características
              y detalles del producto para atraer a los clientes.
            </p>

            {/* Precio y Disponibilidad */}
            <div className="flex items-center mb-6">
              <span className="text-xl md:text-2xl font-bold text-gray-900 mr-4">
                $Precio
              </span>
              <span className="text-green-600 font-semibold">Disponible</span>
            </div>

            {/* Botones */}
            <div className="flex flex-wrap space-x-4 mb-6">
              <Button className="bg-[#f8b195] text-white px-6 py-2 rounded-md shadow-md hover:bg-[#f67280] transition duration-300 mb-2 md:mb-0">
                Añadir al Carrito
              </Button>
              <Button className="bg-pink-200 text-pink-800 px-4 py-2 rounded-md shadow-md hover:bg-pink-300 transition duration-300">
                ❤ Like
              </Button>
            </div>

            {/* Alérgenos */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Alérgenos
              </h2>
              <p className="text-gray-700">
                Aquí se listan los alérgenos del producto. Asegúrese de que los
                clientes conozcan cualquier ingrediente que pueda causar
                alergias.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductView;
