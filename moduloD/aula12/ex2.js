var hora = new Date().getHours()
frase = ` Agora são ${hora} horas.`

if (hora < 12) {
    console.log('Bom dia!' + frase)
} else if (hora < 18) {
    console.log('Boa tarde!' + frase)
} else {
    console.log('Boa noite!' + frase)
}