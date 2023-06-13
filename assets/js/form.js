var arrayGeral = [];
var arrayComents = [];
var titulo;
var nome;
var data;
var descri;
var indice = -1;
var msg = "";

var tarefa = [];

function create() {
  if (indice < 0) {
    /*0*/ titulo = document.getElementById("tituput").value;
    document.getElementById("tituput").value = "";
    /*1*/ nome = document.getElementById("nomeput").value;
    document.getElementById("nomeput").value = "";
    /*2*/ data = document.getElementById("dataput").value;
    document.getElementById("dataput").value = "";
    /*3*/ descri = document.getElementById("descriput").value;
    document.getElementById("descriput").value = "";
    //
    //arrumar data para padrao br

    datanova = data.split("-").reverse().join("/");
    // jogar tudo num array
    const artigo = [titulo, nome, datanova, descri];
    arrayGeral.push(artigo);
  } else {
    const artigo = [titulo, nome, datanova, descri];
    artigo[indice] = artigo;

    indice = -1;
    
  }

  atualizarListaTela();

}
function atualizarListaTela() {
  let msg = "";
  for (let i = 0; i < arrayGeral.length; i++) {
    console.log(i);
    tarefa = arrayGeral[i];
    msg += `<div id="comentario">
    <p id="titulo">Titulo: ${tarefa[0]} </p>  
    <p id="nome">Nome: ${tarefa[1]} </p> 
    <p id="data">Data de publicação: ${tarefa[2]} </p> 
    <p id="descri">Descrição: ${tarefa[3]} </p> 
    <button type="button" class="btn2" onclick="editar(${i})">Editar</button>
    <button type="button" class="btn2"onclick="apagar(${i})">Apagar</button>
    </div>`;
  }

  document.getElementById("comentarios").innerHTML = msg;
}

function apagar(i) {
  msg = arrayGeral.splice(i, 1);
  atualizarListaTela();
}
function editar(i) {
  document.getElementById("comentario").innerHTML = "";

  
  document.getElementById("comentario").innerHTML = `<input id="tituloedit" class="inpututu2" type="text">
  <input id="nomeedit" class="inpututu2" type="text">
  <input id="dataedit" class="inpututu2"  type="date">
  <input id="descriedit" class="inpututu2" type="text">
  <button type="button" class="btn2" onclick="atualizarEdit()">Atualizar</button>
  <button type="button" class="btn2"onclick="apagar(${i})">Apagar</button>`;

  document.getElementById("tituloedit").value = tarefa[0];
  document.getElementById("nomeedit").value = tarefa[1];
  document.getElementById("dataedit").value = tarefa[2];
  document.getElementById("descriedit").value = tarefa[3];

    /*0*/ titulo = document.getElementById("tituloedit").value;
    /*1*/ nome = document.getElementById("nomeedit").value;
    /*2*/ data = document.getElementById("dataedit").value;
    /*3*/ descri = document.getElementById("descriedit").value;

}
function atualizarEdit() {
  msg = "";
  for (let i = 0; i < arrayGeral.length; i++) {
    console.log(i);
    tarefa = arrayGeral[i];
    msg += `<div id="comentario">
    <p id="titulo">Titulo: ${tarefa[0]} </p>  
    <p id="nome">Nome: ${tarefa[1]} </p> 
    <p id="data">Data de publicação: ${tarefa[2]} </p> 
    <p id="descri">Descrição: ${tarefa[3]} </p> 
    <p id="titulo">edited</p>
    <button type="button" class="btn2" onclick="editar(${i})">Editar</button>
    <button type="button" class="btn2"onclick="apagar(${i})">Apagar</button>
    </div>`;
  }
}
