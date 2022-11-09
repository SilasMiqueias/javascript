function parimp(n){
    if(n%2 == 0){
        return 'PAR'
    }else{
        return 'IMPAR'
    }
}
let res = parimp(5)
console.log(`${res}`)