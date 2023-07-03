
function calcular() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
       window.alert("[Alert]Erro")
    } else {
        res.innerHTML = `Contando: `
        let i = Number(ini.value) //Para converter o valor para num.
        let f = Number(fim.value)
        let p = Number(passo.value)
    
        for(var c = i; c <= f ; c += p) {
            res.innerHTML += `${c}; `
        }
    }
}