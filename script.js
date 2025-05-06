let campoCPF = document.querySelector("#cpf")
let campoCNPJ = document.querySelector("#cnpj")
let campoRG = document.querySelector("#rg")
let campoTel = document.querySelector("#tel")

campoTel.addEventListener("keypress", ()=>{
    let tamanhoTel = campoTel.value.length

    if(tamanhoTel == 0) {
        campoTel.value += "("
    }
    if(tamanhoTel == 3) {
        campoTel.value += ") "
    }
    if(tamanhoTel == 10) {
        campoTel.value += "-"
    }
})

campoRG.addEventListener("keypress", ()=>{
    let tamanhoRG = campoRG.value.length

    if(tamanhoRG == 2 || tamanhoRG == 6) {
        campoRG.value += "."
    }
    if(tamanhoRG == 10) {
        campoRG.value += "-"
    }
})

campoCNPJ.addEventListener("keypress", ()=>{
    let tamanhoCNPJ = campoCNPJ.value.length

    if(tamanhoCNPJ == 2 || tamanhoCNPJ == 6) {
        campoCNPJ.value += "."
    }
    if(tamanhoCNPJ == 10) {
        campoCNPJ.value += "/"
    }
    if(tamanhoCNPJ == 15) {
        campoCNPJ.value += "-"
    }
})

campoCPF.addEventListener("keypress", ()=>{
    let tamanhoCPF = campoCPF.value.length
    
    if(tamanhoCPF == 3 || tamanhoCPF == 7) {
        campoCPF.value += "."
    }
    if(tamanhoCPF == 11) {
        campoCPF.value += "-"
    }
})