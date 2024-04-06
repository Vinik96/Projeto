// estrutura de repetição
// para, enquanto, repita

/*
for(let i = 1; i <= 100; i++){

    console.log(i)

}
*/
/*
let i = 1

while(i <= 100){

    console.log(i)

    i++
}
*/

    
/*
let valor = 5

for(let i = 1; i <= 10; i++){

    console.log(`${valor} x ${i} = ${valor * i}`)

    modo antigo:
console.log(valor + " x " + i + " = " + (valor * i))

}
*/

//criar uma tatuada para um valor digitado
//exemplo: atribuir 5
//o script vai mostrar
//5 x 1 = 5,
//5 x 20 = 10...

/*
let i = 1
let valor = 5

while(i <= 100){

    console.log(`${valor} x ${i} = ${valor * i}`)

    i++
}
*/

// digitar N valores no prompt até a tecla 0 for pressionada

let valor = Number(prompt("Digite um valor: "))
let soma = 0

while(valor != 0){
    soma  = soma + valor
    valor = Number(prompt("Digite um valor: "))  

}

alert ("soma = " + soma)