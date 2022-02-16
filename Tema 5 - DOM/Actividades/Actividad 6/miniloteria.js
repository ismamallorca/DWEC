function generarDecimo() {
    let pars = document.getElementsByTagName('p');
    let num;
    for (let i = 0; i < pars.length - 1; i++) {
        num = Math.floor(Math.random() * 99) + 1;
        let node = document.createElement('p');
        let text = document.createTextNode(num);
        node.appendChild(text);
        node.style.color = "blue";
        pars[i].parentNode.replaceChild(node, pars[i]);
    }

    console.log(pars);
    let buttons = document.getElementsByTagName("button");
    buttons[1].disabled = false;
}

function realizarSorteo() {
    let pars = document.getElementsByTagName('p');
    let node = document.createElement('p');
    let numGanador = document.createTextNode(Math.floor(Math.random() * 99) + 1);
    node.appendChild(numGanador);
    node.style.color = "black";

    pars[pars.length - 1].parentNode.replaceChild(node, pars[pars.length - 1])

    let buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    checkGanador();
}

function checkGanador() {
    let pars = document.getElementsByTagName('p');
    let numGanador = document.getElementsByTagName('p')[3].innerHTML;
    console.log("El número ganador es el: " + numGanador);
    let ganador = false;

    for (let i = 0; i < pars.length - 1; i++) {
        console.log("párrafo: " + pars[i].innerHTML);
        if (pars[i].innerHTML == numGanador) {
            pars[i].style.color = "green";
            ganador = true;
        } else {
            pars[i].style.color = "red";
        }
    }

    if (ganador) {
        document.getElementById("numeroSorteo").innerHTML = "¡Has ganado!";
    } else {
        document.getElementById("numeroSorteo").innerHTML = "¡Has perdido!";
    }
}