function contar(){
    var i = document.getElementById('ini')
    var f = document.getElementById('fim')
    var p = document.getElementById('pas')
    var res = document.getElementById('res')
    

    if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0){
        alert('[ERRO] Falta dados')
    }else{
        res.innerHTML = 'Contando: '
        var ini = Number(i.value)
        var fim = Number(f.value)
        var passo = Number(p.value)
        if (passo <= 0){
            alert('Passo invalido! Considerando passo 1')
            passo = 1
        }
        if(ini < fim){
            //COntagem crescente
            for(c = ini; c <= fim; c += passo){
            res.innerHTML += `  ${c} \u{1F449}`

            }
        }else{
            //Contegem regresiva
            for(c = ini;c >=fim; c -= passo){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
    }
}
    