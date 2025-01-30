import React from "react";

const LogisticsPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Logistique & Livraison</h1>
      <p className="mb-4">
        Nous proposons différentes options de livraison adaptées aux produits frais, 
        surgelés ou au matériel encombrant.
      </p>

      {/* Chaîne du froid */}
      <div className="mb-4 p-4 border rounded shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Gestion de la chaîne du froid</h2>
        <p className="text-gray-700">
          Nos transporteurs sont équipés de camions réfrigérés pour assurer le respect 
          de la chaîne du froid, de la ferme à votre porte.
        </p>
      </div>

      {/* Livraison en point relais */}
      <div className="mb-4 p-4 border rounded shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Livraison en point relais</h2>
        <p className="text-gray-700">
          Pour plus de flexibilité, vous pouvez choisir de récupérer vos colis 
          dans un point relais proche de chez vous.
        </p>
      </div>

      {/* Transport du matériel agricole */}
      <div className="mb-4 p-4 border rounded shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Transport du matériel agricole</h2>
        <p className="text-gray-700">
          Nous collaborons avec des transporteurs spécialisés pour la livraison 
          de tracteurs, serres et autres équipements volumineux. 
        </p>
      </div>
    </div>
  );
};

export default LogisticsPage;
