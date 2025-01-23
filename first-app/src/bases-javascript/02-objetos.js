const persona = {
  nombre: 'tonny',
  apellido: 'herrera',
  edad: 12
}

//console.log(persona)


const persona2 = { ...persona }

persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)