const data =[];


// next button
const nextButton = document.getElementById("next")
console.log(nextButton)
const questionArea = document.getElementById("flash-card")
let randomNumberCard;

nextButton.onclick = function nextCard () {
    const filteredCards = data.filter(card => select.options[select.selectedIndex].text == card.category);
    randomNumberCard = Math.floor(Math.random()*filteredCards.length)
    questionArea.innerHTML = filteredCards[randomNumberCard].question
}

// flip button
const flipButton = document.getElementById('flip')
flipButton.onclick = function flipCard() {
    questionArea.innerHTML = data[randomNumberCard].answer
}



const form = document.querySelector(`form`);
const categoryField = document.querySelector(`#category`);
const questionField = document.querySelector(`#question`);
const answerField = document.querySelector(`#answer`);
const deleteButton = document.querySelector(`#delete`);
const select = document.querySelector(`#select`);



const createCard = () => {
    let card = {};
    card.question = questionField.value;
    card.answer = answerField.value;
    card.category = categoryField.value;
    data.push(card);
    return data;
}

const addSelectors = () => {
    const isSelectorAlreadyExists = data.some(card => categoryField.value === card.category);
    if(!isSelectorAlreadyExists) {
      const option = document.createElement("option");
      option.text = categoryField.value;
      select.add(option);
   }  
}

form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    addSelectors();
    createCard();
    console.log(data);
    form.reset();
});


deleteButton.addEventListener(`click`, () => {
    data.splice(randomNumberCard, 1);
    questionArea.innerHTML = "";
});





