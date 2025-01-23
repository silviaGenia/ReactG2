const notas = ['A', 'B', 'C', 'D', 'E', 'F']
console.log(notas)
console.log(notas[1])
console.log(notas[2])


const [, , p] = notas
console.log(p)


const retornaArreglo = () => {
  return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo()

console.log(letras, numeros)


const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Buenos Dias")
    }
  ]
}


const [nombre, setNombre] = useState("Karla")
console.log(nombre)
setNombre()