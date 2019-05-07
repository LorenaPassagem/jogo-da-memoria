function createMemoryCard(){
       
    const $memoryCard= `
    <article class="memory-card">
        <img src='img/icon-collabcode.png' 
        alt='Gueio mascote collab' class="icon"
        onClick = "handleClick()"/> 
    </article>`;
    return $memoryCard;
}



function createMemoryCardFront(){  
    const $iconC =
     `<article class="memory-card -front">
     <img src='img/icon-c.png'
     alt='imagem de um livro de C++' class='icon'
     onClick = "handleClick()"/>
     <article>`;
    return $iconC;
}


function handleClick(){
    this.addEventListener('click', () =>{
        console.log("Gueio");
    });
}
