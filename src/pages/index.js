const $root = document.querySelector('#root');

const $cardsWrapper = createCardsWrapper();
// const $memoryCard = createMemoryCard(); 

// const $cardC = createMemoryCardFront();
// const $memoryCardFront = createMemoryCardFront();


$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard());
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard());
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard());
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard());
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard());
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard());
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCardFront());
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCardFront());


$root.insertAdjacentElement("beforeend", $cardsWrapper);

