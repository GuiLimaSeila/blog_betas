var arrayTitulo = [];
var arrayNome = [];
var arrayData = [];
var arrayComen = [];
var titulo;
var nome;
var data;
var comen;

function addComent(titulo, nome, data, comen) {
  /*0*/ titulo = document.getElementById("tituput").value;
    arrayTitulo.push(titulo);
    document.getElementById("tituput").value = "";
  /*1*/ nome = document.getElementById("nomeput").value;
    arrayNome.push(nome);
    document.getElementById("nomeput").value = "";
  /*2*/ data = document.getElementById("dataput").value;
    arrayData.push(data);
    document.getElementById("dataput").value = "";
  /*3*/ comen = document.getElementById("comenput").value;
    arrayComen.push(comen);
    document.getElementById("comenput").value = "";
    let msg = "";

    //fazer um bloco de comentario
    for (
        let i = 0;
        i < arrayTitulo.length &&
        i < arrayNome.length &&
        i < arrayData.length &&
        i < arrayComen.length;
        i++
    ) {
        msg += `<div id="comentario">
    <p id="titulo${i}">Titulo: ${arrayTitulo[i]} </p>  </p>
    <p id="nome${i}">Nome: ${arrayNome[i]} </p> </p>
    <p id="data${i}">Data de publicação: ${arrayData[i]} </p> </p>
    <p id="descri${i}">Descrição:</p> ${arrayComen[i]} </p> 
    <button type="button" class="btn2" onclick="editar()">[e]</button>
    <button type="button" class="btn2"onclick="apagar()">[d]</button>
    </div>`;
    }
    document.getElementById("comentarios").innerHTML = msg;
}

function editar() {
    let msg = "";
  /*0*/ titulo = document.getElementById("tituput").value;
    arrayTitulo.push(titulo);
    document.getElementById("tituput").value = "";
  /*1*/ nome = document.getElementById("nomeput").value;
    arrayNome.push(nome);
    document.getElementById("nomeput").value = "";
  /*2*/ data = document.getElementById("dataput").value;
    arrayData.push(data);
    document.getElementById("dataput").value = "";
  /*3*/ comen = document.getElementById("comenput").value;
    arrayComen.push(comen);
    document.getElementById("comenput").value = "";
        document.getElementById("comentarios").innerHTML = msg;
    }

function apagar() {
    let msg = "";
    let i = 0;
    let titulus = document.getElementById(`titulo${i}`).value;
    let nomus = document.getElementById(`nome${i}`).value;
    let datus = document.getElementById(`data${i}`).value;
    let comentus = document.getElementById(`comen${i}`).value;
    while (
        titulus !== arrayTitulo[i] &&
        nomus !== arrayNome[i] &&
        datus !== arrayData[i] &&
        comentus !== arrayComen[i]
    ) {
        msg += `<style> #titulo${i}{
    position:none ;
    display:none ;
}
#nome${i}{
    position:none ;
    display:none ;
}
#data${i}{
    position:none ;
    display:none ;
}
#descri${i}{
    position:none ;
    display:none ;
}
</style>
`;
        i++;
    }
    document.getElementById("comentarios").innerHTML = msg;
}
