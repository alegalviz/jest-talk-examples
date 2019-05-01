const { potencia } = require('../../src/index')
const assert = require('assert')


describe('Testeamos la función potencia', () => {
  it('Potencia de 4 devuelve 24', () => {
    const valoractual = potencia(4)
    const valoresperado = 24

    assert.equal(valoractual, valoresperado)
  })

  it('Potencia devuelve un error si no le mandamos un parametro', () => {
    assert.throws(() => {
      potencia()
    })
  })
})