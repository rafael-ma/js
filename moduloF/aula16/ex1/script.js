let num = document.querySelector('input#num')
let list = document.querySelector('select#list')
let result = document.querySelector('#result')
let values = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNumber(num.value) && !inList(num.value, values)) {
        result.style.display = 'none'
        list.setAttribute('size', `${(values.length) + 1}`)
        values.push(Number(num.value))
        let option = document.createElement('option')
        option.text = `Valor ${num.value} adicionado` 
        list.appendChild(option)
        result.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }

    num.value = ''
    num.focus()
}

function finish() {
        if (values.length == 0) {
            window.alert('Nenhum valor regitrado!')
        } else {
            let total = values.length
            let greater = values[0]
            let less = values[0]
            let soma = 0
            for (let pos in values) {
                soma += values[pos]
                if (values[pos] > greater) {
                    greater = values[pos]
                } else
                if (values[pos] < less) {
                    less = values[pos]
                }
            }
            let media = (soma / values.length) | 0

            result.style.display = 'block'
            result.innerHTML = ''
            result.innerHTML += `<p>Temos um total de ${total} números cadastrados.</p>`
            result.innerHTML += `<p>O maior valor é ${greater}.</p>`
            result.innerHTML += `<p>O menor valor é ${less}.</p>`
            result.innerHTML += `<p>A soma entre os números é ${soma}`
            result.innerHTML += `<p>A média entre os valores é ${media}`
        }
}