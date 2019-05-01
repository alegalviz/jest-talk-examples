const func = require('../../src/index')
const assert = require('assert')
const sinon = require('sinon');


describe('Testeamos la función potencia', () => {
  it('Potencia de 4 devuelve 24', () => {
    const valoractual = func.potencia(4)
    const valoresperado = 24

    assert.equal(valoractual, valoresperado)
  })

  it('Potencia devuelve un error si no le mandamos un parametro', () => {
    assert.throws(() => {
      func.potencia()
    })
  })

  it('La función potencia se debería llamar 5 veces para potencia de 5', () => {
    const spy = sinon.spy(func, 'potencia')
    func.potencia(5)
    assert.equal(spy.callCount, 5)
    spy.restore()
  })
})