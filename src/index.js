// Constates e variaveis
const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $memoryCardFront = document.createElement("article");

const $iconCollab = 
` <img src='img/icon-collabcode.png' 
 alt='Gueio mascote collab'/> `;

const $iconC = 
`<img src="img/icon-c.png" 
alt="imagem de um livro de C++" class="icon"/>`

//  add as classe do css
$memoryCard.classList.add("memory-card");
$memoryCardFront.classList.add("memory-card");
$memoryCardFront.classList.add("-front");

// insere os elementos na tela
$root.insertBefore($memoryCard, null);
$root.insertBefore($memoryCardFront, $memoryCard);

//  insere as tags de img
$memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
$memoryCardFront.insertAdjacentHTML("afterbegin", $iconC);



