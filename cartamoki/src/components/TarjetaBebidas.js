import React from 'react';
import './Tarjetas.css';

const TarjetaBebidas = ({ onClick }) => {
  return (
    <div className="tarjetaBebidas bebidas" onClick={onClick}>
      <h1>Disfruta de nuestra terraza bebiendo algo.</h1>
      <button onClick={onClick}>PARA BEBER</button>
    </div>
  );
};

export default TarjetaBebidas;
