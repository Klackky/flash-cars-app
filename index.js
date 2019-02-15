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
const questionArea = document.getElementById("flash-card")

nextButton.onclick = function nextCard () {
    const randomNumber = Math.floor(Math.random()*data.length)
    questionArea.innerHTML = data[randomNumber].question
}


