import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Fruits & Légumes",
    slug: "fruits-legumes",
    description: "Frais, de saison, locaux ou bio.",
    image: "https://picsum.photos/200/150"
  },
  {
    name: "Semences",
    slug: "semences",
    description: "Gamme professionnelle et amateur.",
    image: "https://picsum.photos/201/150"
  },
  {
    name: "Matériel agricole",
    slug: "materiel-agricole",
    description: "Petites et grandes machines.",
    image: "https://picsum.photos/202/150"
  }
];

const HomePage = () => {
  return (
    <div className="w-full">
      {/* Section 1 : Hero / Bannière */}
      <div className="relative bg-[url('https://picsum.photos/1600/600?grayscale')] bg-center bg-cover h-64 flex items-center justify-center">
        <div className="bg-black bg-opacity-40 absolute inset-0"></div>
        <h1 className="relative text-white text-3xl font-bold z-10">
          Bienvenue sur AgriCommerce
        </h1>
      </div>

      {/* Section 2 : Moteur de recherche */}
      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="Recherchez un produit..."
          className="border border-gray-300 rounded-l-md p-2 w-1/2 focus:outline-none"
        />
        <button className="bg-green-600 text-white px-4 rounded-r-md hover:bg-green-700">
          Rechercher
        </button>
      </div>

      {/* Section 3 : Catégories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        {categories.map((cat) => (
          <div
            key={cat.slug}
            className="bg-white shadow-md rounded p-4 flex flex-col items-center hover:shadow-lg transition"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="mb-4 w-full h-32 object-cover"
            />
            <h2 className="text-xl font-semibold mb-2">{cat.name}</h2>
            <p className="text-gray-600 mb-2 text-center">{cat.description}</p>
            {/* Lien vers la page de catégorie */}
            <Link
              to={`/categories/${cat.slug}`}
              className="text-green-600 border border-green-600 px-4 py-2 rounded hover:bg-green-600 hover:text-white"
            >
              Voir la catégorie
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
