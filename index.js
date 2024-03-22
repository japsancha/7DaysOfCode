const nome = prompt('Qual é o seu nome?')
const idade = prompt('Qual é a sua idade?')
const cidade = prompt("Digite a sua cidade?")
const linguagem = prompt('Qual linguagem de programação você está estudando?')
const msg = `Olá, ${nome}! Você tem ${idade} da ${cidade} anos e está estudando ${linguagem}.`

alert(msg)

const gosta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 - SIM ou 2 - NÃO.`)
if (gosta == 1) {
  alert("Muito bom! Continue estudando e você terá muito sucesso.")
}
if (gosta == 2) {
  alert("Ahh que pena... Já tentou aprender outra linguagem?")
}