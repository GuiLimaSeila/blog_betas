var arrayGeral = [];
var arrayComents = [];
var titulo;
var nome;
var data;
var descri;
var msg = "";

function create() {
  /*0*/ titulo = document.getElementById("tituput").value;
  document.getElementById("tituput").value = "";
  /*1*/ nome = document.getElementById("nomeput").value;
  document.getElementById("nomeput").value = "";
  /*2*/ data = document.getElementById("dataput").value;
  document.getElementById("dataput").value = "";
  /*3*/ descri = document.getElementById("descriput").value;
  document.getElementById("descriput").value = "";
  //

  const artigo = [titulo, nome, data, descri]
  arrayGeral.push(artigo);

  
  // jogar num array geral
  //arrayGeral.push(arrayComents);
  atualizarListaTela();
}
function atualizarListaTela() {
    let msg = "";
  for (let i = 0; i < arrayGeral.length; i++) {
    console.log(i);
    let tarefa = arrayGeral[i];
    msg += `<div id="comentario">
    <li id="titulo">Titulo: ${tarefa[0]} </li>  
    <li id="nome">Nome: ${tarefa[1]} </li> 
    <li id="data">Data de publicação: ${tarefa[2]} </li> 
    <li id="descri">Descrição: ${tarefa[3]} </li> 
    <button type="button" class="btn2" onclick="editar()">[e]</button>
    <button type="button" class="btn2"onclick="apagar(${i})">[d]</button>
    </div>`;
  }

  document.getElementById("comentarios").innerHTML = msg;
  // arrayComents.pop()
  // arrayComents.pop()
  // arrayComents.pop()
  // arrayComents.pop()
}


function apagar(i) {
  for (let i = 0; i < arrayGeral.length; i++) {
    msg = arrayGeral.splice(i, 0);
    console.log(arrayGeral)
  }
  document.getElementById("comentarios").innerHTML = msg;
  atualizarListaTela()
}
