function carregar(){

    var  msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = (`Agora são ${hora} horas.`)
    if(hora >= 0 && hora < 12){
        img.src = '../imagens/manha.jpg'
        document.body.style.background = 'rgb(255, 153, 0)'
    }else if(hora > 12 && hora <= 18){
        img.src = '../imagens/tarde.jpg'
        document.body.style.background = 'rgb(206, 82, 0)'
    }else{
        img.src = '../imagens/noite.jpg'
        document.body.style.background = 'rgb(0, 3, 175)'
    }
}


