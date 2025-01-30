import React, { createContext, useState, useContext, useEffect } from "react";

// 1. Créer le contexte
const CartContext = createContext();

// 2. Hook pratique pour accéder au contexte
export const useCart = () => useContext(CartContext);

// 3. Provider
export const CartProvider = ({ children }) => {
  // Lire le localStorage au démarrage
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Sauvegarder dans le localStorage à chaque mise à jour
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  /**
   * addToCart :
   *   - Vérifie si l'article est déjà dans le panier.
   *   - Si oui, on incrémente sa quantité.
   *   - Sinon, on l'ajoute avec quantity = 1.
   */
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === product.id
      );

      // Si le produit est déjà présent, on incrémente
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        const existingItem = updatedItems[existingItemIndex];
        updatedItems[existingItemIndex] = {
          ...existingItem,
          quantity: existingItem.quantity + 1
        };
        return updatedItems;
      }

      // Sinon, on l'ajoute avec quantity = 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  /**
   * removeFromCart :
   *   - Supprime complètement l'article du panier,
   *     peu importe sa quantité.
   */
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  /**
   * removeOneFromCart :
   *   - Retire une "unité" d'un produit.
   *   - Si la quantité tombe à 0, on enlève le produit du panier.
   */
  const removeOneFromCart = (productId) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === productId
      );
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        const existingItem = updatedItems[existingItemIndex];

        if (existingItem.quantity > 1) {
          updatedItems[existingItemIndex] = {
            ...existingItem,
            quantity: existingItem.quantity - 1
          };
        } else {
          // Si on est à 1 et qu'on retire 1, on supprime l'item
          updatedItems.splice(existingItemIndex, 1);
        }
        return updatedItems;
      }
      return prevItems;
    });
  };

  // Vider complètement le panier
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        removeOneFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
