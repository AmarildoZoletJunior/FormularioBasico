let nome = document.querySelector(".nome");
let email = document.querySelector(".email");
let senha = document.querySelector(".senha");
let confirmar = document.querySelector(".confirm");
let submit = document.querySelector(".sub");
let cadastrado = false;

function certo(input){
    let pai = input.parentElement;

    pai.className = "form-control sucess";
}
function errado(input,mensagem){
    let pai = input.parentElement
    let small = pai.querySelector("small")

    small.textContent = mensagem;
    pai.className = "form-control error";
}
function olhos(){
    let inputSenha1 = document.getElementById("passw");
    let inputSenha2 = document.getElementById("conf");


    inputSenha1.addEventListener("mousedown",function(){
        document.querySelector(".senha").type = "text";
    })
    inputSenha1.addEventListener("mouseup",function(){
        document.querySelector(".senha").type = "password";
    })
    inputSenha2.addEventListener("mousedown",function(){
        document.querySelector(".confirm").type = "text";
    })
    inputSenha2.addEventListener("mouseup",function(){
        document.querySelector(".confirm").type = "password";
    })
}
olhos();

submit.addEventListener("click",function(evento){
    evento.preventDefault();
    if(cadastrado === false){
        alert("Falta algo")
    }else{
        alert("Cadastrado com sucesso.")
    }

});

nome.addEventListener("keyup",function(){
    let nvalue = nome.value;
    let regex = /^([a-zA-Zà-úÀ-Ú]|-|_|\s)+$/;
    if(nvalue === ""){
        cadastrado = false;
        errado(nome,"Este campo é obrigatório");
    }else if(nvalue.length <= 3){
        cadastrado = false;
        errado(nome,"Necessita ter pelo menos 4 caracteres")
    }else if(regex.test(nvalue) == false){
        cadastrado = false;
       errado(nome,"Este campo deve conter somente letras")
    } else{
        cadastrado = true;
       certo(nome)
    }
});

email.addEventListener("keyup",function(){
    let evalue = email.value;
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(evalue === ""){
        cadastrado = false;
        errado(email,"Este campo é obrigatório");
    }else if(regex.test(evalue)){
        cadastrado = true;
        certo(email);
    }else{
        cadastrado = false;
        errado(email, "Deve seguir o padrão xxx@xxx.xxx")
    }
})

senha.addEventListener("keyup",function(){
    let svalue = senha.value;
    let cvalue = confirmar.value;
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{4,}$/;
    if(svalue === ""){
        cadastrado = false;
        errado(senha,"Este campo é obrigatório");
    }else if(svalue.length <= 3){
        cadastrado = false;
        errado(senha,"Este campo precisa ter pelo menos 4 caracteres");
    }else if(regex.test(svalue) === false){
        cadastrado = false;
        errado(senha,"Min: 1 letra maiúscula&minúscula e 1 número");
    }else{
        cadastrado = true;
        certo(senha);
    }

    //verifica se o campo confirmar senha esta sempre igual
    if(cvalue === svalue && cvalue !== ""){
        cadastrado = true;
        certo(confirmar)
    }else{
        cadastrado = false;
        errado(confirmar,"Não esta igual ao campo Senha")
    }if
    (cvalue === ""){
        cadastrado = false;
        errado(confirmar,"Este campo é obrigatório");
    }else if(cvalue.length !== svalue.length){
        cadastrado = false;
        errado(confirmar, "Quantidade de caracteres incorreta");
    }else if(regex.test(cvalue) == false){
        cadastrado = false;
        errado(confirmar,"Min: 1 letra maiúscula&minúscula e 1 número");
    }else if(cvalue === svalue){
        cadastrado = true;
        certo(confirmar);
    }else{
        cadastrado = false;
        errado(confirmar,"Não esta igual ao campo Senha");
    }
})

confirmar.addEventListener("keyup",function(){
    let cvalue = confirmar.value;
    let svalue = senha.value;
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{4,}$/;
    if(cvalue === ""){
        cadastrado = false;
        errado(confirmar,"Este campo é obrigatório");
    }else if(cvalue.length !== svalue.length){
        cadastrado = false;
        errado(confirmar, "Quantidade de caracteres incorreta");
    }else if(regex.test(cvalue) == false){
        cadastrado = false;
        errado(confirmar,"Min: 1 letra maiúscula&minúscula e 1 número");
    }else if(cvalue === svalue){
        cadastrado = true;
        certo(confirmar);
    }else{
        cadastrado = false;
        errado(confirmar,"Não esta igual ao campo Senha");
    }
})
