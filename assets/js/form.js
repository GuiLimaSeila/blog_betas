var nome;
var data;
var descri;

var indice = -1;
var msg = "";

var arrayGeral = [];

function create() {

  if (indice < 0) {
    var titulo = document.getElementById("tituput").value;
    document.getElementById("tituput").value = "";
    var nome = document.getElementById("nomeput").value;
    document.getElementById("nomeput").value = "";
    var data = document.getElementById("dataput").value;
    document.getElementById("dataput").value = "";
    var descri = document.getElementById("descriput").value;
    document.getElementById("descriput").value = "";

    // Arrumar data para padrão brasileiro
    var datanova = data.split("-").reverse().join("/");

    // Adicionar os dados em um array
    var artigo = [titulo, nome, datanova, descri];
    arrayGeral.push(artigo);
  } else {
    var artigo = arrayGeral[indice];
    artigo[0] = document.getElementById("tituput").value;
    artigo[1] = document.getElementById("nomeput").value;
    artigo[2] = document.getElementById("dataput").value;
    artigo[3] = document.getElementById("descriput").value;

    indice = -1;
  }


  atualizarListaTela();
}

function atualizarListaTela() {
  var msg = "";
  for (var i = 0; i < arrayGeral.length; i++) {
    var tarefa = arrayGeral[i];
    msg += `<div id="comentario">
    <p id="titulo">Titulo: ${tarefa[0]} </p>  
    <p id="nome">Nome: ${tarefa[1]} </p> 
    <p id="data">Data de publicação: ${tarefa[2]} </p> 
    <p id="descri">Descrição: ${tarefa[3]} </p> 
    <button type="button" class="btn2" onclick="editar(${i})">Editar</button>
    <button type="button" class="btn2" onclick="apagar(${i})">Apagar</button>
    </div>`;
  }

  document.getElementById("comentarios").innerHTML = msg;
}

function apagar(i) {
  arrayGeral.splice(i, 1);
  atualizarListaTela();
}

function editar(i) {
  var tarefa = arrayGeral[i];
  document.getElementById("tituput").value = tarefa[0];
  document.getElementById("nomeput").value = tarefa[1];
  document.getElementById("dataput").value = tarefa[2];
  document.getElementById("descriput").value = tarefa[3];

  indice = i;

}
