
var nome = document.getElementById("nomeput");
var data = document.getElementById("dataput");
var descri = document.getElementById("descriput");
var infos = [];

function addComent(descri, data, nome){
    infos.push(nome)
    infos.push(data)
    infos.push(descri)

    console.log(infos)
}

