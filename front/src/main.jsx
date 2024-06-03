import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext.jsx';
import { CartProvider } from '@/context/CartContext.jsx'; // Asegúrate de que esta línea esté correcta
import './index.css';
import Register from '@/components/auth/Register.jsx';
import Login from '@/components/auth/Login.jsx';
import Home from '@/pages/Home.jsx';
import ProductView from '@/pages/Product.jsx';
import BlogPostView from '@/pages/Post.jsx';
import Services from '@/pages/Services.jsx';
import Faq from '@/pages/Faq.jsx';
import Contact from '@/pages/Contact.jsx';
import Administration from '@/pages/Administration.jsx';
import Privacy from '@/pages/Privacy.jsx';
import Terms from '@/pages/Terms.jsx';
import Blog from '@/pages/Blog.jsx';
import Post from '@/pages/Post.jsx';
import Products from '@/pages/Products.jsx';
import Product from '@/pages/Product.jsx';

const router = createBrowserRouter([
  {
    path: '/registro',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/productos',
    element: <Products />,
  },
  {
    path: '/productos/:id',
    element: <Product />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/blog/:id',
    element: <Post />,
  },
  {
    path: '/servicios',
    element: <Services />,
  },
  {
    path: '/faq',
    element: <Faq />,
  },
  {
    path: '/contacto',
    element: <Contact />,
  },
  {
    path: '/privacidad',
    element: <Privacy />,
  },
  {
    path: '/terminos',
    element: <Terms />,
  },
  {
    path: '/administracion',
    element: <Administration />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </AuthProvider>,
);
