
import frutas, { verduras } from './data/frutas'

console.log(verduras)

const getFrutasById = (id) => frutas.find((fruta) => fruta.id === id)

console.log(getFrutasById(3))


const getFrutasByOwner = (color) => frutas.filter((fruta) => fruta.color === color)

console.log(getFrutasByOwner("rojo"))