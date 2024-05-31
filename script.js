var resposta = window.document.getElementById ('resposta')

function botão_ativo(event) {
    event.preventDefault();
    var primeiro_numero = window.document.getElementById ('primeiro_numero')
    var segundo_numero = window.document.getElementById('segundo_numero')

    if (primeiro_numero.value > segundo_numero.value){
        window.alert (`[ INVALIDO ] O primeiro número digitado é maior que o segundo.`)
        resposta.innerHTML = `[ INVALIDO ] O primeiro número digitado é maior que o segundo.`
        
    } else {
        window.alert (`VALIDADO!! PARABÉNS!! O segundo número é maior que o primeiro.`)
        resposta.innerHTML = `VALIDADO!! PARABÉNS!! O segundo número é maior que o primeiro.`
    }
}