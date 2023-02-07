function verificar() {
    var year =  new Date().getFullYear()
    var inputYear = document.getElementById('year')
    var result = document.getElementById('result')  
    console.log('actual year: ' + year)
    console.log('input year: ' + inputYear.value)

    if (inputYear.value > year || inputYear.value < 1900 || inputYear.value.length == 0) {
        window.alert('ERRO! Verifique os dados e tente novamentee.')
    } else {
        var inputSex = document.getElementsByName('sex')
        var age = year - inputYear.value
        var gender = ''
        var image = document.createElement('img')
        image.setAttribute('id', 'image')

        if (inputSex[0].checked) {
            gender = 'um homem'

            if (age >= 0 && age < 10) {
                // Child
                image.setAttribute('src', 'images/child-m.jpg')
            } else if (age < 21) {
                // Teen
                image.setAttribute('src', 'images/teen-m.jpg')
            } else if (age < 50) {
                // Adult
                image.setAttribute('src', 'images/adult-m.jpg')
            } else {
                // Old
                image.setAttribute('src', 'images/old-m.jpg')
            }
        } else {
            gender = 'uma mulher'

            if (age >= 0 && age < 10) {
                // Child
                image.setAttribute('src', 'images/child-f.jpg')
            } else if (age < 21) {
                // Teen
                image.setAttribute('src', 'images/teen-f.jpg')
            } else if (age < 50) {
                // Adult
                image.setAttribute('src', 'images/adult-f.jpg')
            } else {
                // Old
                image.setAttribute('src', 'images/old-f.jpg')
            }
        }
        result.style.textAlign = 'center'
        result.innerHTML = `<p>Verificamos ${gender} de ${age} anos, correto?</p>`
        result.appendChild(image)
    }
}