// nomes:vetor[1..5] de caracter

let nomes = []
// let numeros = []
let notas = []
let media = 0
let soma = 0

/*
for (let index = 0; index < 4; index++) {
    
    nomes[index] = prompt("Digite um valor")
}

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
    
}
*/

/*
for (let i = 0; i <= 3; i++){
    nomes[i] = prompt("Digite um valor ")
}

for (let i =0; i <= 3; i++){
    document.write(nomes[i])
}
*/

// cria uma agenda com 3 nomes e 3 telefones
/*
for (let i = 0; i <= 3; i++){
    nomes[i] = prompt("Digite o nome de um(ou mais) convidado(s)")
    numeros[i] = prompt("Digite o numero do convidado em particula")
}

for (let i = 0; i <= 3; i++){
    document.write(nomes[i] +" x "+ numeros[i] + "<br>")
}
*/

// 5 alunos, 5 notas + media

for (let i = 0; i <= 4; i++){
    nomes[i] = prompt("Digite o nome do aluno em particula")
    notas[i] = Number(prompt("Digite a nota do aluno em particula"))
    soma = soma + notas[i]
}

media = soma / 5

for (let i = 0; i <= 4; i++){
    document.write(nomes[i] +" x "+ notas[i] + "<br>")
}

document.write("media das notas: "+ media)