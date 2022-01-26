function amagaMostra(pa, en) {
  let node = document.getElementById(pa);

  if (node.className == "ocult") {
    node.className = "visible";
  } else {
    node.className = "ocult";
  }

  let nodeB = document.getElementById(en);

  if (nodeB.innerHTML == "Mostra") {
    nodeB.innerHTML = "Amaga";
  } else {
    nodeB.innerHTML = "Mostra";
  }
}