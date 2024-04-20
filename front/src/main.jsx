import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/index.css';
import ErrorPage from './views/ErrorPage';
import Inicio from './views/Inicio';
import Productos from './views/Productos';
import Blog from './views/Blog';
import Servicios from './views/Servicios';
import Faq from './views/Faq';
import Contacto from './views/Contacto';
import PoliticaPrivacidad from './views/PoliticaPrivacidad';
import TerminosUso from './views/TerminosUso';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/productos',
    element: <Productos />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/blog',
    element: <Blog />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/servicios',
    element: <Servicios />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/faq',
    element: <Faq />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/contacto',
    element: <Contacto />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/politica-privacidad',
    element: <PoliticaPrivacidad />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/terminos-uso',
    element: <TerminosUso />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
