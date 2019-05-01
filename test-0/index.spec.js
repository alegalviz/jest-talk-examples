const { potencia } = require('../index')
const assert = require('assert')


const valoractual = potencia(4)
const valoresperado = 24

assert.equal(valoractual, valoresperado)

console.log('La funcion devuelve 24!!!')

assert.throws(() => {
  potencia()
})

console.log('La funcion devuelve un error!!!')