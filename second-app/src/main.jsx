import React from 'react'
import ReactDOM from 'react-dom/client'
import { StoreApp } from './StoreApp'
import "./index.css"
import { Button } from './Button'
import { PropType } from './PropType'
import { EvenButton } from './EvenButton'
import { CountApp } from './CountApp'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <StoreApp
      nombre="Sucre"
      valor={12}
      description="Mañana"
    />
    <StoreApp
      nombre="Sucre"
      valor={12}
      description="Tarde"
    /> */}
    {/* <Button label="Guardar" color="blue" />
    <Button label="Cancelar" color="red" /> */}
    {/* <PropType title="Clase" /> */}


    {/* <EvenButton /> */}
    <CountApp value={5} />

  </React.StrictMode>
)