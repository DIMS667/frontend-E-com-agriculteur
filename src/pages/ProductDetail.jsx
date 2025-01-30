import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Imaginons qu'on récupère le produit depuis une API ou un mock
  // Pour l'exemple, un mock rapide :
  const product = {
    id,
    name: "Tomates Bio",
    categorySlug: "fruits-legumes",
    label: "Bio",
    price: 3.5,
    image: "https://picsum.photos/seed/tomates/500/300"
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-auto mb-4 rounded shadow"
      />
      <p className="text-gray-700 mb-4">Prix : {product.price} €</p>

      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        onClick={handleAddToCart}
      >
        Ajouter au panier
      </button>
    </div>
  );
};

export default ProductDetail;
