const data = [
    {
        question: `do you have an answer?`,
        answer: `no`
    },
    {
        question: `How are you?`,
        answer: `good`
    },
    {
        question: `Is it Friday?`,
        answer: `yes`
    }

]


const nextButton = document.getElementsByClassName("next")[0]

nextButton.onclick = function nextCard () {
    const question = document.createElement('h2')
    // console.log(question)
    const randomNumber = Math.floor(Math.random()*data.length)
    // console.log(randomNumber)
    question.innerHTML = data[randomNumber].question
    // console.log(question.innerHTML)
    const flashCardSection = document.getElementById("flash-card")
    flashCardSection.appendChild(question)
    // console.log(flashCardSection)

}


