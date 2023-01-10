function load() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')  
    var hour = new Date().getHours()

    msg.innerHTML = `Agora são ${hour} horas.`

    if (hour >= 6 && hour < 12) {
        img.src = 'images/morning-img.jpg'
        document.body.style.background = '#ffd789'

    } else if (hour >= 12 && hour < 17) {
        img.src = "images/afternoon-img.jpg"

    } else if (hour >= 17 && hour < 19) {
        img.src = "images/evening-img.jpg"
        document.body.style.background = "#304D63"

    } else if (hour >= 19 && hour <= 23) {
        img.src = "images/night-img.jpg"
        document.body.style.background = '#04050A'
        
    } else {
        img.src = "images/earlyMorning-img.jpg"
        document.body.style.background = '#0C1D26'
    }
}