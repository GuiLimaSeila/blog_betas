
var arrayGeral = [];

function addComent() {
    var nome = document.getElementById("nomeput").value;
    arrayGeral.push(nome)
    document.getElementById("nomeput").value = ''
    var data = document.getElementById("dataput").value;
    arrayGeral.push(data)
    document.getElementById("dataput").value = ''
    var comen = document.getElementById("comenput").value;
    arrayGeral.push(comen)
    document.getElementById("comenput").value = ''
    let msg = "";
    msg += `<div id="comentario"><p> ${arrayGeral[0]} </p> <p> ${arrayGeral[1]} </p> <p> ${arrayGeral[2]} </p> </div>`;
    arrayGeral.pop()
    arrayGeral.pop()
    arrayGeral.pop()
    document.getElementById("comentarios").innerHTML = msg
}




