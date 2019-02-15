const data =[];


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
const deleteButton = document.querySelector(`#delete`);

const createCard = () => {
    let card = {};
    card.question = questionField.value;
    card.answer = answerField.value;
    data.push(card);
    return data;
}

form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    createCard();
    console.log(data);
    form.reset();
});


deleteButton.addEventListener(`click`, () => {
    data.splice(randomNumberCard, 1);
    questionArea.innerHTML = "";
});

