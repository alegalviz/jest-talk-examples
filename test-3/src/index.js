function potencia(num) {
  if (!num) {
    throw new Error('Parámetro obligatorio')
  }
  if (num === 1) {
    return 1
  } else {
    return num * this.potencia(num - 1)
  }
}

module.exports = {
  potencia
}