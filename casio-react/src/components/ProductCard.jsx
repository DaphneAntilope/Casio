import React from "react";


const ProductCard = ({ product }) => {
  return (
    <div className="carte-produit">
      <img src={product.image} alt={product.name} className="image-produit" />
      <div className="contenu-produit">
        <h2 className="titre-produit">{product.name}</h2>

        <label htmlFor={`couleur-${product.id}`}>Couleur</label>
        <select id={`couleur-${product.id}`}>
          {product.colors.map((color, index) => (
            <option key={index} value={color}>{color}</option>
          ))}
        </select>

        <label htmlFor={`taille-${product.id}`}>Taille</label>
        <select id={`taille-${product.id}`}>
          {product.sizes.map((size, index) => (
            <option key={index} value={size}>{size}</option>
          ))}
        </select>

        <p className="prix-produit">Prix : {product.price.toFixed(2)} €</p>

        <button className="btn-ajouter">Ajouter au panier</button>
      </div>
    </div>
  );
};

export default ProductCard;
