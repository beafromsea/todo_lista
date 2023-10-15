import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { StyleContainer } from "./style.styles.js";
import GlobalStyles from './styles/GlobalStyles.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyleContainer>
      <App />
    </StyleContainer>
    <GlobalStyles/>
  </React.StrictMode>,
)
