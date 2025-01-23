//Funcion estandar
function saludar(nombre) {
  return `Hola mi nombre es:${nombre}`
}

console.log(saludar("karlas"))

//Funcion anonima
const saludar1 = function (nombre) {
  return `Hola mi nombre es:${nombre}`
}

console.log(saludar1("Karlos"))

//Funcion flecha
const saludar2 = (nombre) => {
  return `Hola mi nombre es:${nombre}`
}

console.log(saludar2("Karlos"))



const saludar3 = (nombre) => `Hola mi nombre es:${nombre}`


console.log(saludar3("Kareliss"))
///-----
const getUser = () => {
  return {
    id: 122312,
    nombre: "Carlos"
  }
}

console.log(getUser())


const getUser2 = () => (
  {
    id: 122312,
    nombre: "Carlos"
  }
)
console.log(getUser2())

