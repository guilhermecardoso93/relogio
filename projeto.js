function carregar() {
  var msg = document.getElementById("msg");
  var day = document.getElementById("day");
  var img = document.getElementById("imagem");
  var bom = document.getElementById("bom");
  var data = new Date(),
    dia = data.getDate().toString().padStart(2, "0"),
    mes = (data.getMonth() + 1).toString().padStart(2, "0"),
    ano = data.getFullYear();
  var hora = data.getHours();
  var min = data.getMinutes()
  var seg = data.getSeconds();

  var tempo = `${hora}:${min}:${seg}`;

  msg.innerHTML = `Agora são  ${tempo}`;
  day.innerHTML = `Data${dia}/${mes}/${ano}`;
  if (tempo >= 0 && tempo < 12) {
    //Bom dia
    img.src = "./imagens/bomdia.png";
    document.body.style.background = "#e9bd04";
  } else if (tempo >= 12 && tempo <= 18) {
    //Boa tarde
    img.src = "./imagens/boatarde.png";
    document.body.style.background = "#f0d2af";
  } else {
    //boa noite
    img.src = "./imagens/boanoite.png";
    document.body.style.background = "#266994";
  }
}
setInterval(carregar,500)