import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import {ModeProvider} from "./context/ModeContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HashRouter>
          <ModeProvider>
              <App />
          </ModeProvider>
      </HashRouter>
  </React.StrictMode>
);
