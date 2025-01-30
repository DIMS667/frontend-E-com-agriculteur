import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="bg-green-700 text-white p-4">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold">
                AgriCommerce
              </Link>
              <nav>
                {/* Un lien direct vers le panier */}
                <Link to="/panier" className="mr-4 hover:underline">
                  Mon Panier
                </Link>
              </nav>
            </div>
          </header>

          {/* Contenu principal */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/categories/:slug" element={<CategoryPage />} />
              <Route path="/produit/:id" element={<ProductDetail />} />
              <Route path="/panier" element={<CartPage />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="bg-gray-200 text-center p-4 mt-4">
            <p>&copy; 2025 AgriCommerce - Tous droits réservés</p>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
