import React from 'react'


function handleClick() {
  console.log("Buenos dias Clase")
}

export const EvenButton = () => {

  return (
    /*  <>
       <h2>Eventos del Boton</h2>
       <button onClick={function click() { alert("Buenos Diass") }}>Enviar</button>
     </> */

    <>
      <h2>Eventos del Boton</h2>
      <button onClick={handleClick}>Enviar</button>
    </>
  )
}
