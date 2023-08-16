function gerar() {
    var sel = document.getElementById('select')
    var bt = document.getElementById('bt')
    var res = document.getElementById('res')

    

    if (sel.value.length == 0 || bt.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '

        for(let c = i; c <= f; c+= p) {
            res.innerHTML += `${c}`
        }
    }
}