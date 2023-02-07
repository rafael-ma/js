function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var resultado = document.getElementById('resultado')
    resultado.innerHTML = ''
    
    // Valor padrão de passo
    if (Number(passo.value) == '') {
        passo.value = 1
    }

    // Correção de valores
    if (inicio.value.length == 0 || fim.value.length == 0) {
        alert('Por favor digite valores válidos!')
    } else if (Number(passo.value) < 1) {
        alert('O passo não pode ser menor que 1!')
    } else

    // Defini ordem crescente ou decrescente
    if (Number(inicio.value < Number(fim.value))) {
        // Crescente
        for (c = Number(inicio.value); c <= Number(fim.value); c += Number(passo.value)) {
            resultado.innerHTML += `${c} `
        }
    } else {
        // Decrescente
        for (c = Number(inicio.value); c >= Number(fim.value); c -= Number(passo.value)) {
            resultado.innerHTML += `${c} `
        }
    }
}