import React from "react";
import ProductList from "./components/ProductList";
import './style.css';
import "./App.css";


const App = () => {
  return (
    <div className="App">
      <h1 className="titre-page">Montres Casio</h1>
      <ProductList />
    </div>
  );
};

export default App;
