let num = [5,8,4]
num.push(1,2,3,6,7) // Adiciona o valor no último elemento 
num.sort() // Colocará os valoers em ordem

console.log(`O vetor tem ${num.length} posições`)
console.log(num)
for (c = 0; c < num.length; c++) {
    console.log(num[c])
}

for (let posicao in num) {
    console.log(`A posição ${posicao} tem o valor ${num[posicao]}`)
}

let posicao = num.indexOf(5)
if (posicao == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posicao ${posicao}`)
}