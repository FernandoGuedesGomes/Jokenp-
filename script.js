// JS - Jokenpô
// @author Fernando Guedes Gomes 

function jogar() {
    if (document.getElementById("pedraInput").checked == false &&
        document.getElementById("papelInput").checked == false &&
        document.getElementById("tesouraInput").checked == false) {
        alert("Selecione uma opção!");
    } else {
        let sorteio = Math.floor(Math.random() * 3);
        console.log(sorteio);
        switch (sorteio) {
            case 0:
                document.getElementById("pc").src = "pedra.png";
                break;
            case 1:
                document.getElementById("pc").src = "papel.png";
                break;
            case 2:
                document.getElementById("pc").src = "tesoura.png";
                break;
        }

        if ((document.getElementById("pedraInput").checked == true && sorteio == 0) || (document.getElementById("papelInput").checked == true && sorteio == 1) || (document.getElementById("tesouraInput").checked == true && sorteio == 2)) {
            document.getElementById("placar").innerHTML="Empate";
        }else if ((document.getElementById("pedraInput").checked == true && sorteio == 2) || (document.getElementById("papelInput").checked == true && sorteio == 0) || (document.getElementById("tesouraInput").checked == true && sorteio == 1)){
            document.getElementById("placar").innerHTML="Jogador Venceu!";
        }else {
            document.getElementById("placar").innerHTML="Computador Venceu!";
        }

    }

}



function resetar() {
    location.reload()

}