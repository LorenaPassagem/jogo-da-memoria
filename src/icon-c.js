// pegar um id root para inserir um article na tela
const $root = document.querySelector("#root");
// cria uma tag article e coloca ela dentro do de uma const
const $iconC = document.createElement("article");

// insere uma class no article criado acima
$iconC.classList.add("iconC");
$root.insertBefore($iconC, memoryCard);
 