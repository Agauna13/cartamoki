import React from 'react';
import './Tarjetas.css';

const TarjetaComidas = ({ onClick }) => {
  return (
    <div className="tarjetaComidas comidas" onClick={onClick}>
      <h1>¡Si tienes hambre, echa un vistazo!</h1>
      <button /*onClick={onClick}*/>PARA COMER</button>
    </div>
  );
};

export default TarjetaComidas;
