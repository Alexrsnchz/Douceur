import { useContext } from 'react';
import { CartContext } from '@/context/CartContext.jsx';
import { ScrollArea } from '@/components/ui/scroll-area.jsx';

import cart_close_icon from '@/assets/images/cart/cart_close_icon.svg';

const CartDropdown = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg border-gray-200 shadow-lg z-50">
      <h3 className="py-2 px-4 text-lg font-semibold">Carrito</h3>
      <hr className="px-3 text-gray-600" />
      {cart.length === 0 ? (
        <p className="py-2 px-4">Tu carrito está vacío</p>
      ) : (
        <ul>
          <ScrollArea className="h-[300px]">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center py-2 px-4"
              >
                <div className="flex justify-center items-center gap-3">
                  <img
                    src={item.prodImg}
                    alt="Imagen del producto"
                    className="w-12 h-16"
                  />
                  <div>
                    <p className="font-semibold text-gray-600">
                      {item.prodName}
                    </p>
                    <p className="font-semibold text-gray-400 text-sm">
                      {item.price} € x {item.quantity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="text-red-500"
                >
                  <img
                    src={cart_close_icon}
                    alt="Icono de eliminación del carrito"
                    className="w-5 h-5"
                  />
                </button>
              </li>
            ))}
          </ScrollArea>
          <hr className="px-3 text-gray-600" />
          <h3 className="py-2 px-4 text-lg font-semibold">
            Total: {totalPrice.toFixed(2)} €
          </h3>
        </ul>
      )}
    </div>
  );
};

export default CartDropdown;
