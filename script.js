const URL_PLANILHA = "https://script.google.com/macros/s/AKfycbwu-gb3RWohvPpuTLN0jLAK11UTpYRiFeeRjUSITJArW9S0Fol6UrK3Y0vAGyBTgKLAlw/exec";

const form = document.getElementById("formulario")
const aviso = document.getElementById("aviso")

form.addEventListener("submit",function(evento){
    evento.preventDefault()//impede que a página recarregue

    aviso.textContent = "Eviando...."


})