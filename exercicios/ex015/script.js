function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique seu dados')
    }else{
        var fsex = document.getElementsByName('isex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebê.jpg')
                }else if(idade < 21){
                    //jovem
                    img.setAttribute('src', 'jovem.jpg')
                    }else if (idade < 50){
                        //adulto
                        img.setAttribute('src', '.jpg')
                        }else{
                            //idoso
                            }
            
        }   else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                }else if(idade < 21){
                    //jovem
                    }else if (idade < 50){
                        //adulto
                        }else{
                            //idoso
                            }
        }
        res.innerHTML = `Detectamos que voçê é ${genero} é tem ${ano} anos.`
    }
}