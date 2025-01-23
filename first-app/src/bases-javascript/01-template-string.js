const nombre = "Juan"
const apellido = "Herrera"


const nombreCompleto =
  nombre + ' ' + apellido

console.log(nombreCompleto)



const nombreCompleto1 = `el nombre completo es: 
${nombre} 
${apellido}
${1 + 1}
`

console.log(nombreCompleto1)

function getSaludo() {
  return 'Buenos Dias'
}

console.log(`Este es el mensaje de la funcion: ${getSaludo()}`)