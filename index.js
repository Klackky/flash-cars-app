
// next button
const nextButton = document.getElementById("next")
console.log(nextButton)
const questionArea = document.getElementById("flash-card")
let randomNumberCard;

nextButton.onclick = function nextCard () {
    randomNumberCard = Math.floor(Math.random()*data.length)
    questionArea.innerHTML = data[randomNumberCard].question
 
}

// flip button
const flipButton = document.getElementById('flip')
flipButton.onclick = function flipCard() {
    questionArea.innerHTML = data[randomNumberCard].answer
}



const form = document.querySelector(`form`);
const questionField = document.querySelector(`#question`);
const answerField = document.querySelector(`#answer`);
let card = {};

const createCard = () => {
    card.question = questionField.value;
    card.answer = answerField.value;
    data.push(card);
    return data;
}

form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    createCard();
    form.reset();
});