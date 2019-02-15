const data =[
    {
        category: 'default',
        question: 'What does алло mean?',
        answer: 'Hallo'
},
    {
    category: 'default',
    question: 'What does Код ниндзя mean?',
    answer: 'Code Ninja'
},
{
    category: 'default',
    question: 'What does взломать mean?',
    answer: 'to hack'
},
{
    category: 'default',
    question: 'What does пиво пятницы mean?',
    answer: 'Friday beers'
},
{
    category: 'default',
    question: 'What does Хорошая Солнечная погода mean?',
    answer: 'Sunny weather'
},

];


// next button
const nextButton = document.getElementById("next")
const questionArea = document.getElementById("flash-card")
let randomNumberCard;

nextButton.onclick = function nextCard () {
    const filteredCards = data.filter(card => select.options[select.selectedIndex].text == card.category);
    randomNumberCard = Math.floor(Math.random()*filteredCards.length)
    questionArea.innerHTML = filteredCards[randomNumberCard].question
    document.getElementById('good-answer').innerHTML = "" // reset text to user when answer good
    typeForm.reset() // reset answer form
}

// flip button
const flipButton = document.getElementById('flip')
flipButton.onclick = function flipCard() {
    questionArea.innerHTML = data[randomNumberCard].answer
    document.getElementById('good-answer').innerHTML = "" // reset text to user
}




const categoryField = document.querySelector(`#category`);
const form = document.querySelector(`.add-card`);
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


// showing dancing banana when anwer is good
function show() {
    document.getElementById("smile").style.display="block";
    setTimeout("hide()", 5000);  // 5 seconds
}
function hide() {
    document.getElementById("smile").style.display="none";
}


// submit answer via text
const typeForm = document.querySelector('.answer-with-text')
const typeAnswerField = document.querySelector(`#input-answer`);

typeForm.addEventListener('submit', function(event) {
    event.preventDefault()
    if(typeAnswerField.value === data[randomNumberCard].answer){
        show()
        document.getElementById('good-answer').innerHTML = "Good answer, great work!"
    } else {
        document.getElementById('good-answer').innerHTML = "This is not the rigth answer. Try again or flip card"
    }
})


