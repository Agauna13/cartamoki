//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';


// En src/index.js, antes de ReactDOM.render
if (window.location.href !== 'https://developements.blankcodestudios.com/') {
  window.location.href = 'https://developements.blankcodestudios.com/';
} else {
  // Renderizar la app normalmente
  ReactDOM.render(<App />, document.getElementById('root'));
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);


