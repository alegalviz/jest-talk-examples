const func = require('../../src/index')


describe('Testeamos la función potencia', () => {
  it('Potencia de 4 devuelve 24', () => {
    const valoractual = func.potencia(4)
    const valoresperado = 24

    expect(valoractual).toBe(valoresperado)
  })

  it('Potencia devuelve un error si no le mandamos un parametro', () => {
    expect(() => {
      func.potencia()
    }).toThrow()
  })

  it('La función potencia se debería llamar 5 veces para potencia de 5', () => {
    const spy = jest.spyOn(func, 'potencia')
    func.potencia(5)
    expect(spy).toHaveBeenCalledTimes(5)
    spy.mockRestore()
  })
})