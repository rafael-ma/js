var idade = 12
increm = (`Você tem ${idade} anos, por isso `)

if (idade < 16) {
    console.log(increm + 'você não vota.')
} else if (idade < 18 || idade > 65) {
        console.log(increm + 'seu voto é facultativo.')
} else {
        console.log(increm + 'seu voto é obrigatório.')
}