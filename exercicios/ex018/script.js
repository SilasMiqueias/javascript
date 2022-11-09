


    let num = document.getElementById('fnum')
    let res = document.getElementById('res')
    let lista = document.getElementById('flista')
    let valores = []
    function isNumero(n){
        if(Number(n) >= 1 && Number(n) <= 100){
            return true
        }else{
            return false
        }
    }
    function isLista(n, l) {
        if(l.indexOf(Number(n)) != -1) {
            return true
        }else{
            return false
        }

    }
    function adicionar(){
        if(isNumero(num.value) && !isLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `o ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML =''
    }else{
        window.alert('Número invalido ou ja encontrado na lista')
    }
    num.value =''
    num.focus()
    }
    

    function finalizar(){
        if(valores.length == 0){
            window.alert('Adicione um número')
        }else{
            let tot = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0
            for(let pos in valores){
                soma += valores[pos]
                if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
            }
            media = soma / tot
            res.innerHTML = ''
            res.innerHTML += `<p>Ao todo, foram ${tot} números adicionados </p>`
            res.innerHTML += `<p>O maior número é ${maior}</p>`
            res.innerHTML += `<p>O menor número foi ${menor}</p>`
            res.innerHTML +=`<p>A soma de todos os número é ${soma}</p>`
            res.innerHTML += `<p>A média dos valores acima é ${media}</p>`
        }
    }
