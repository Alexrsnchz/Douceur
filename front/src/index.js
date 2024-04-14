import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import Inicio from './views/Inicio';
import Productos from './views/Productos';
import Blog from './views/Blog';
import Contactanos from './views/Contactanos';
import ErrorHandler from './components/ErrorHandler';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio />,
    //loader: 
    errorElement: <ErrorHandler />
  },
  {
    path: '/productos',
    element: <Productos />,
    //loader: 
    errorElement: <ErrorHandler />
  },
  {
    path: '/blog',
    element: <Blog />,
    //loader: 
    errorElement: <ErrorHandler />
  },
  {
    path: '/contactanos',
    element: <Contactanos />,
    //loader: 
    errorElement: <ErrorHandler />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();