// cakback = chamar de volta
// é uma função sendo passada como parametro para outra funcao

function sayMyName(name) {
  console.log(name)
}

sayMyName(
  () => {
    console.log('estou em uma callback')
  }
)