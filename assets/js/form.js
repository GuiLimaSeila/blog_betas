var arrayGeral = [];
var arrayComents = [];
var titulo;
var nome;
var data;
var descri;
var msg = "";

function addComent(){
    /*0*/titulo = document.getElementById("tituput").value ; 
    document.getElementById("tituput").value = '';
    /*1*/nome = document.getElementById("nomeput").value ;
    document.getElementById("nomeput").value = '';
    /*2*/data = document.getElementById("dataput").value ;
    document.getElementById("dataput").value = '';
    /*3*/descri = document.getElementById("descriput").value;
    document.getElementById("descriput").value = '';
    //
    arrayComents.push(titulo);
    arrayComents.push(nome);
    arrayComents.push(data);
    arrayComents.push(descri);
    // jogar num array geral
    arrayGeral.push(arrayComents);
    
    for(let i = 0; i <= arrayGeral.length; i+=1){
    msg += `<div id="comentario">
    <p id="titulo">Titulo: ${arrayGeral[i]} </p>  
    <p id="nome">Nome: ${arrayGeral[i]} </p> 
    <p id="data">Data de publicação: ${arrayGeral[i]} </p> 
    <p id="descri">Descrição: ${arrayGeral[i]} </p> 
    <button type="button" class="btn2" onclick="editar()">[e]</button>
    <button type="button" class="btn2"onclick="apagar()">[d]</button>
    </div>`
    