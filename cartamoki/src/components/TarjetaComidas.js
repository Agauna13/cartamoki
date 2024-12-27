import React from 'react';
import './Tarjetas.css';

const TarjetaComidas = ({ onClick }) => {
  return (
    <div className="tarjeta tarjetaComidas comidas" onClick={onClick}>
      <h1>¡Si tienes hambre, echa un vistazo!</h1>
      <button>PARA COMER</button>
    </div>
  );
};

export default TarjetaComidas;
