//declarar as varíaveis do projeto

let nomeFuncionario
let salario
let inss
let valeTransporte
let IRRF

// pegar dados via promp()

nomeFuncionario = prompt('Digite o nome do funcionario')
salario = Number(prompt('Digite o salario'))

// processo para encontrar descontos

inss = salario / 100 * 11
valeTransporte = salario / 100 * 6

// verifica o imposto de renda

if (salario <= 2259){
    IRRF = 0
}else if((salario > 2259) && (salario <= 2828)){
    IRRF = salario / 100 * 7.5
}else if((salario > 2828 ) && (salario <= 3751)){
    IRRF = salario / 100 * 22.5
}

// calculo do salario liquido
let salarioLiquido = salario - (inss + valeTransporte + IRRF)

// Mostrar a folha de pagamento

document.write(" ======== FOLHA DE PAGAMENTO ========  <br>")
document.write(" NOME DO FUNC: " + nomeFuncionario + "<br>")
document.write(" SALARIO BRUTO: " + salario + "<br>")
document.write(" INSS: " + inss + "<br>")
document.write(" VALE TRANSPORTE: " + valeTransporte + "<br>")
document.write(" IMPOSTO DE RENDA: " + IRRF + "<br>")
document.write(" SALARIO LIQUITO: " + salarioLiquido)