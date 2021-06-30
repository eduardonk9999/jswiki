/*
Usar para quando queremos gerar um novo array, com a mesma
quantidade de itens do array original


*/

const numbers = [1, 2, 3]
const doubleNumbers = numbers.map(item => item * 2)



// Array de Preços


const prices = [20, 10, 30, 25, 15, 40, 2.5]

const salePrices = prices.map(prices => prices / 2)



// Cenario Real

const products = [
  { name: 'Mouse Sem Fio', price: 30},
  { name: 'Pen Drive', price: 25 },
  { name: 'Cartucho de Tinta', price: 50},
  { name: 'Suporte Ergonômico para Notebook', price: 23 },
  { name: 'Repetidor de Sinal Wi-fi', price: 44}
]

const saleProducts = products.map(product => {
  if (product.price >= 30) {
    return {name: product.name, price: product.price / 2}
  }

  
})