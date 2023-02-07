function gerar() {
    var num = Number(document.getElementById('numero').value)
    var resultado = document.getElementById('resultado')

    if (num === '') {
        alert('Por favor, insira um número!')
    } else
    if (num < 1) {
        alert('Por favor, insira um número positivo!')
    } else {
        resultado.innerHTML = ''
        for (c = 1; c <= 10; c++) {
            resultado.innerHTML += `<p>${num} x ${c} = ${num*c}</p>`
        }
        resultado.style.width = '100%'
    }
}