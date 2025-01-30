import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart, removeOneFromCart, clearCart } = useCart();

  // Calcul du total en tenant compte des quantités
  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Votre Panier</h1>

      {cartItems.length === 0 ? (
        <p>Le panier est vide.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="p-2 border rounded shadow-sm flex items-center justify-between"
              >
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p>Prix unitaire : {item.price} €</p>
                  <p>Quantité : {item.quantity}</p>
                  <p className="text-sm text-gray-600">
                    Sous-total : {item.price * item.quantity} €
                  </p>
                </div>

                {/* Actions sur l'item */}
                <div className="flex items-center space-x-2">
                  {/* Retirer UNE SEULE unité du panier */}
                  <button
                    className="bg-yellow-400 text-white px-2 py-1 rounded"
                    onClick={() => removeOneFromCart(item.id)}
                  >
                    -
                  </button>

                  {/* Supprimer complètement l'article */}
                  <button
                    className="bg-red-600 text-white px-2 py-1 rounded"
                    onClick={() => removeFromCart(item.id)}
                  >
                    x
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <p className="text-xl font-semibold">Total : {totalPrice.toFixed(2)} €</p>
          </div>

          <button
            className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={clearCart}
          >
            Vider le panier
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
