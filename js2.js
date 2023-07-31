const cardArray=[
    {
        name:'fries',
        img:'fries.png',
    },
    {
        name:'cheeseburger',
        img:'cheeseburger.png',
    },
    {
        name:'hotdog',
        img:'hotdog.png',
    },
    {
        name:'ice-cream',
        img:'ice-cream.png',
    },
    {
        name:'milkshake',
        img:'milkshake.png',
    },
    {
        name:'pizza',
        img:'pizza.png',
    },
    {
        name:'fries',
        img:'fries.png',
    },
    {
        name:'cheeseburger',
        img:'cheeseburger.png',
    },
    {
        name:'hotdog',
        img:'hotdog.png',
    },
    {
        name:'ice-cream',
        img:'ice-cream.png',
    },
    {
        name:'milkshake',
        img:'milkshake.png',
    },
    {
        name:'pizza',
        img:'pizza.png',
    }
]
cardArray.sort(()=> 0.5-Math.random());
const gridDisplay=document.querySelector('#grid')
const resultDisplay=document.querySelector('#result')
let cardsChoosen=[]
let cardsChoosenIds=[]
const cardsWon=[]

function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card=document.createElement('img')
        card.setAttribute('src','blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch(){
    const cards=document.querySelectorAll('img')
    const optionOneId=cardsChoosenIds[0]
    const optionTwoId=cardsChoosenIds[1]
    console.log('check for match!')
    if(optionOneId==optionTwoId){
        cards[optionOneId].setAttribute('src','blank.png')
        cards[optionTwoId].setAttribute('src','blank.png')
        alert('You have clicked the same image!')
    }
    if(cardsChoosen[0]==cardsChoosen[1]){
        alert('You found a match!')
        cards[cardsChoosenIds[0]].setAttribute('src','white.png')
        cards[cardsChoosenIds[1]].setAttribute('src','white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChoosen)
    }else{
        cards[optionOneId].setAttribute('src', 'blank.png')
        cards[optionTwoId].setAttribute('src', 'blank.png')
        alert('Sorry, try again!')
    }
    resultDisplay.innerHTML=cardsWon.length
    cardsChoosen=[]
    cardsChoosenIds=[]
    if(cardsWon.length== cardArray.length/2){
        resultDisplay.innerHTML='Congratulations!! you found them all'
    }
}

function flipCard(){
    const cardId=this.getAttribute('data-id')
    cardsChoosen.push(cardArray[cardId].name)
    cardsChoosenIds.push(cardId)
    console.log(cardsChoosen)
    console.log(cardsChoosenIds)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChoosen.length===2){
        setTimeout(checkMatch,500)
    }
}