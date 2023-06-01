var arrayGeral = [];
var arrayGlobal = [];
var arrayComents = [];
var titulo;
var nome;
var data;
var descri;
var msg = "";

function create(){
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
    arrayGlobal.push(arrayGeral);

    atualizarListaTela();
}
function atualizarListaTela(){
    for(let i = 0; i < arrayGlobal.length; i++){
    msg += `<div id="comentario">
    <p id="titulo">Titulo: ${arrayComents[0]} </p>  
    <p id="nome">Nome: ${arrayComents[1]} </p> 
    <p id="data">Data de publicação: ${arrayComents[2]} </p> 
    <p id="descri">Descrição: ${arrayComents[3]} </p> 
    <button type="button" class="btn2" onclick="editar()">[e]</button>
    <button type="button" class="btn2"onclick="apagar()">[d]</button>
    </div>`
    }
    document.getElementById("comentarios").innerHTML = msg
}

function apagar(){
    for(let i = 0; i < arrayGlobal.length; i++){
    msg = arrayGlobal.splice(i, 0)

}
document.getElementById("comentarios").innerHTML = msg
arrayComents = [];
arrayGeral = [];
}