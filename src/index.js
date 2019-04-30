const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $icon =
 ` <img src='img/icon-collabcode.png' 
 alt='Gueio mascote collab'/> `;
 const $iconC = document.createElement("article");

$memoryCard.classList.add("memory-card");
$iconC.classList.add("iconC");

$root.insertBefore($memoryCard, null);
$root.insertBefore($iconC, $memoryCard);

$memoryCard.insertAdjacentHTML("afterbegin", $icon);



