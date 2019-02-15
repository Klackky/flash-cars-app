const data = [
    {
        question: `do you have an answer?`,
        answer: `no`
    }
]


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