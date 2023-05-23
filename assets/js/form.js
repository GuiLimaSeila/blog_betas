
var arrayGeral = [];
var titulo;
var nome;
var data;
var comen;
var msg = "";





function addComent() {
    do {
    /*0*/ titulo = document.getElementById("tituput").value;
    arrayGeral.push(titulo)
    document.getElementById("tituput").value = ''
    /*1*/ nome = document.getElementById("nomeput").value;
    arrayGeral.push(nome)
    document.getElementById("nomeput").value = ''
    /*2*/ data = document.getElementById("dataput").value;
    arrayGeral.push(data)
    document.getElementById("dataput").value = ''
    /*3*/ comen = document.getElementById("comenput").value;
    arrayGeral.push(comen)
    document.getElementById("comenput").value = ''
    msg += `<div id="comentario">
    <p id="titulo2">Titulo: ${arrayGeral[0]} </p>  </p>
    <p id="titulo2">Nome: ${arrayGeral[1]} </p> </p>
    <p id="titulo2">Data de publicação: ${arrayGeral[2]} </p> </p>
    <p id="titulo2">Descrição:</p> ${arrayGeral[3]} </p> 
    <button type="button" class="btn2" onclick="editar()">[e]</button>
    <button type="button" class="btn2"onclick="apagar()">[d]</button>
    </div>`

    document.getElementById("comentarios").innerHTML = msg
    }
    while (editar == false);
}
function editar(){
    document.getElementById("tituput").value = arrayGeral[0];
    arrayGeral.pop();
    document.getElementById("nomeput").value = arrayGeral[1];
    arrayGeral.pop();
    document.getElementById("dataput").value = arrayGeral[2];
    arrayGeral.pop();
    document.getElementById("comenput").value = arrayGeral[3];
    arrayGeral.pop();
    
}










