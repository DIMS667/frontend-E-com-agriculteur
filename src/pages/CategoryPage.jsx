import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

// Exemple de liste de produits
const sampleProducts = [
  {
    id: 1,
    name: "Tomates Bio",
    categorySlug: "fruits-legumes",
    label: "Bio",
    price: 3.2,
    image: "https://picsum.photos/seed/tomates/200/150"
  },
  {
    id: 2,
    name: "Carottes AB",
    categorySlug: "fruits-legumes",
    label: "AB",
    price: 2.5,
    image: "https://picsum.photos/seed/carottes/200/150"
  },
  {
    id: 3,
    name: "Semences de Tomate Roma",
    categorySlug: "semences",
    label: "Bio",
    price: 4.5,
    image: "https://picsum.photos/seed/semences-tomate/200/150"
  },
  {
    id: 4,
    name: "Tracteur 45CV",
    categorySlug: "materiel-agricole",
    label: "",
    price: 8000,
    image: "https://picsum.photos/seed/tracteur/200/150"
  }
  // Ajoutez-en plus si besoin...
];

const CategoryPage = () => {
  // Récupération du slug depuis l'URL, ex : "fruits-legumes"
  const { slug } = useParams();

  // Récupération de la fonction pour ajouter au panier
  const { addToCart } = useCart();

  // État local pour le message de confirmation
  const [message, setMessage] = useState("");

  // État pour un filtre par label (optionnel)
  const [selectedLabel, setSelectedLabel] = useState("");

  // 1) Vérifier si slug est défini
  // Si on arrive sur /categories sans :slug ou sur une URL invalide
  // => on évite l'erreur “Cannot read properties of undefined (reading 'toUpperCase')”
  if (!slug) {
    return (
      <div className="p-4">
        <p>Aucune catégorie spécifiée.</p>
      </div>
    );
  }

  // 2) Filtrer les produits de la catégorie correspondante
  let filteredProducts = sampleProducts.filter(
    (product) => product.categorySlug === slug
  );

  // 3) Appliquer éventuellement un filtre par label
  if (selectedLabel !== "") {
    filteredProducts = filteredProducts.filter(
      (product) => product.label === selectedLabel
    );
  }

  // 4) Fonction appelée lors du clic "Ajouter au panier"
  const handleAddToCart = (product) => {
    addToCart(product);
    setMessage(`${product.name} a été ajouté au panier !`);
    // Effacer le message après 2 secondes
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  // 5) On peut transformer le slug en un titre plus "friendly"
  let categoryTitle;
  switch (slug) {
    case "fruits-legumes":
      categoryTitle = "Fruits & Légumes";
      break;
    case "semences":
      categoryTitle = "Semences";
      break;
    case "materiel-agricole":
      categoryTitle = "Matériel Agricole";
      break;
    default:
      // Sinon, on fait juste slug.toUpperCase()
      categoryTitle = slug.toUpperCase();
  }

  return (
    <div className="flex w-full">
      {/* SIDEBAR : Filtres (optionnel) */}
      <div className="w-1/4 p-4 border-r border-gray-200">
        <h2 className="text-xl mb-4 font-semibold">Filtres</h2>
        {/* Exemple : filtre par label */}
        <div className="mb-4">
          <label className="block mb-2">Label / Certification :</label>
          <select
            className="border border-gray-300 rounded p-2 w-full"
            value={selectedLabel}
            onChange={(e) => setSelectedLabel(e.target.value)}
          >
            <option value="">Tous</option>
            <option value="Bio">Bio</option>
            <option value="AB">AB</option>
          </select>
        </div>
      </div>

      {/* CONTENU PRINCIPAL */}
      <div className="w-3/4 p-4">
        {/* Titre de la catégorie */}
        <h1 className="text-2xl font-bold mb-4">Catégorie : {categoryTitle}</h1>

        {/* Message de confirmation lors de l'ajout au panier */}
        {message && (
          <div className="mb-4 p-2 bg-green-200 text-green-800 rounded">
            {message}
          </div>
        )}

        {/* Liste de produits filtrés */}
        {filteredProducts.length === 0 ? (
          <p>Aucun produit ne correspond à ce filtre.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white shadow-md rounded p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="mb-2 w-full h-32 object-cover"
                />
                <h3 className="text-xl font-semibold">{product.name}</h3>
                {product.label && (
                  <span className="inline-block bg-green-100 text-green-600 text-sm px-2 py-1 rounded my-1">
                    {product.label}
                  </span>
                )}
                <p className="text-gray-800 font-bold">{product.price} €</p>

                {/* Bouton : Ajouter au panier */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Ajouter au panier
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
