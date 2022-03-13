const numeros = [5, 6, 2, 15, 12, 22, 85, 32, 45, 25, 33, 258,]

const numerosFiltrados = numeros.filter((valor, indice) => {
  console.log(valor, indice)
  return valor > 10;
})

console.log(numerosFiltrados)