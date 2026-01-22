import { useEffect } from 'react';
// ... otros imports ...

function App() {
  useEffect(() => {
    // Redirigir a la URL deseada al cargar el componente
    window.location.href = 'https://developements.blankcodestudios.com/';
  }, []);  // El array vacío asegura que se ejecute solo una vez al montar

  return (
    <div className="App">
      {/* Si quieres mostrar algo antes de redirigir, ponlo aquí */}
      <p>Redirigiendo...</p>
    </div>
  );
}

export default App;