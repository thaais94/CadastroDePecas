let pesoPecas = 101
let numeroPecas= 8
let nomePeca = "Disco"

if (pesoPecas > 100){
    console.log("Peso maior que 100g, pode cadastrar")
} else {
    console.log ("peso inferior a 100 g, não é possível cadastrar")
}
if (numeroPecas < 10){
    console.log ("Pode cadastrar, ainda há espaço para o cadastro")
} else {
    console.log ("Quantidade de peças excedeu o limite")
}
console.log ("O comprimento do nome é:", nomePeca.length)

if (nomePeca.length < 3){
    console.log("Não pode cadastrarNome de peça inferior a 3 caractetes")
} else {
    console.log("Pode cadastrar. Nome da peça superior a 3 caracteres ")
}