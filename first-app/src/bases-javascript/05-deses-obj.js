const persona = {
  nombre: "Karla",
  apellido: "Herrera",
  edad: 12
}
//console.log(persona)

//console.log(persona.nombre)
//console.log(persona.edad)
const { nombre, apellido } = persona
//console.log(nombre, apellido)
//console.log(apellido)

const retornaPersona = (usuario) => {
  const { nombre } = usuario
  console.log(nombre)
}
retornaPersona(persona)




const retornaPersona1 = ({ apellido }) => {
  //const { nombre } = usuario
  console.log(apellido)
}
retornaPersona1(persona)



const useContext = ({ nombre, edad }) => {
  return {
    primerNombre: nombre,
    anios: edad
  }
}


const estudiante = useContext(persona)
console.log(estudiante)