/*
Quando usar o filter?
- Quando baseado em alguma condição, vc precise obter
um array com só alguns itens do array original.

*/

// Exemplos


// Numeros maiores que 37
const randomNumbers = [36, 99, 37, 63]

const numbersGreaterThan37 = randomNumbers.filter(item => item > 37)

console.log(numbersGreaterThan37)



// Array com array user premium


const users = [
  { name: 'Ada Lovelace', premium: true },
  { name: 'Grace Hopper', premium: false },
  { name: 'Alan Turing', premium: true },
  { name: 'Linus Torvalds', premium: false },
  { name: 'Margaret Hamilton', premium: true }
]

const premiumUsers = users.filter(user => user.premium)