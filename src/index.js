const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $icon = ` <img src='img/icon-collabcode.png' 
 alt='Gueio mascote collab'/> `;
 
const $iconC = document.createElement("article");
 const $cardC = `<img class="card-c" src="img/icon-c.png" 
                alt="imagem de um livro de C++" class="iconC"/>`

$memoryCard.classList.add("memory-card");
$iconC.classList.add("iconC");

$root.insertBefore($memoryCard, null);
$root.insertBefore($iconC, null);

$memoryCard.insertAdjacentHTML("afterbegin", $icon);

$iconC.insertAdjacentHTML("afterbegin", $cardC);



