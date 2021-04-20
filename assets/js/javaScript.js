//var -> variavel de escopo global, acessivel em qual quer parte do codigo 
//let -> variavel de escopo local, acessivel somente onde esta sendo referenciado
//const ->  variavel de escopo global, porem seu valor nao e alterado por istamos falando de uma constante

/*

    por TAG: getElementByTagName()
    por ID: getElementById()
    por NAME: getElementsByName()
    por CLASS: getElementsByClassName()
    por SELECTOR: querySelector()

*/

let nome = window.document.querySelector('#nome') //querySelector('input#nome') <- E uma forma abreviada de escrever isso
let email = window.document.querySelector('#email') //querySelector('input#email')
let assunto = window.document.querySelector('#assunto') //querySelector('textarea#assunto')

let nomeOk
let emailOk
let assuntoOk

let mapa = window.document.querySelector('#mapa iframe')

nome.style.width = '98%'
nome.style.fontSize = '16px'
nome.style.margin = '1%'
nome.style.padding = '1%'

email.style.width = '98%'
email.style.fontSize = '16px'
email.style.margin = '1%'
email.style.padding = '1%'

mapa.style.width = '400px'
mapa.style.heigth = '300px'

/*

    value -> acessa o conteudo inserido
    length -> verifica o comprimento da String
    indexOf() -> acessa uma String e verifica um dado especifico (1 = contem / -1 = nao contem)

*/

function validaNome() {
    if(nome.value.length < 3) {
        let textNome = window.document.querySelector('#textNome')

        nome.style.border = '2px solid var(--warning)'
        nome.style.borderRadius = '3px'

        textNome.innerHTML = 'Nome invalido!'
        textNome.style.color = 'var(--warning)'
        textNome.style.width = '98%'
        textNome.style.padding = '1%'

        nomeOk = false

    }else {
        nome.style.border = '2px solid var(--ok)'

        textNome.innerHTML = 'Nome valido!'
        textNome.style.color = 'var(--ok)'

        nomeOk = true

    }

}

function validaEmail() {
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        let textEmail = window.document.querySelector('#textEmail')

        email.style.border = '2px solid var(--warning)'
        email.style.borderRadius = '3px'

        textEmail.innerHTML = 'E-mail invalido!'
        textEmail.style.color = 'var(--warning)'
        textEmail.style.width = '98%'
        textEmail.style.padding = '1%'

        emailOk = false

    }else {
        email.style.border = '2px solid var(--ok)'

        textEmail.innerHTML = 'E-mail valido!'
        textEmail.style.color = 'var(--ok)'

        emailOk = true

    }

}

function validaAssunto() {
    if(assunto.value.length >= 100) {
        let textAssunto = window.document.querySelector('#textAssunto')

        assunto.style.border = '2px solid var(--warning)'
        assunto.style.borderRadius = '3px'

        textAssunto.innerHTML = 'O texto ultrpassou 100 caracteres'
        textAssunto.style.color = 'var(--warning)'
        textAssunto.style.display = 'block'
        textAssunto.style.width = '98%'
        textAssunto.style.padding = '1%'

        assuntoOk = false

    }else {
        assunto.style.border = '1px solid var(--textarea)'
        assunto.style.borderRadius = '3px'

        textAssunto.style.display = 'none'

        assuntoOk = true

    }

}

function enviar() {
    if(nomeOk && emailOk && assuntoOk) {
        alert('Email enviado para o endereco '+ email.value)
    
    }else {
        alert('Preencha corretamente o fomulario antes de envialo')

    }

}

function mapaZoom() {
    mapa.style.width = '100%'
    mapa.style.heigth = 'auto'
    mapa.style.transition = '1s'

}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.heigth = '300px'
    mapa.style.transition = '0.5s'

}