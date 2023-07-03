function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if (num.value.length != 0) {
        var n = Number(num.value)
        tab.innerHTML = ''

    for (c = 1; c <= 10; c++) {
        let item = document.createElement('option')
        item.text = `${n} x ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
    }
    } else {
        window.alert('[Erro] Por favor digite um número')
    }

}

/*  while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${num} x ${c}`

        }
*/                                                                                                                                                                                                                                                                                                                                                                                                          