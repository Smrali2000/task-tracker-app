import React from 'react';
import { HashRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './components/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>
);
reportWebVitals();
