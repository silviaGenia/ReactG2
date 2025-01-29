import React from 'react'
import ReactDOM from 'react-dom/client'
import { StoreApp } from './StoreApp'
import "./index.css"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreApp
      nombre="Sucre"
      valor="20 años"
    />
  </React.StrictMode>
)