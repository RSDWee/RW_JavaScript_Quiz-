const startButton = document.getElementById('start-btn')
const nexttButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    console.log(question)
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
//    nextButton.classList.add('hide')
    // while (answerButtonsElement.firstChild) {
    //     answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    // }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.wrong
    }
}

function clearStatusClass(element, correct) {

}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

const questions = [
    {
    question: 'Which one of the following had one of the most successful slave revolts in the 18th Century?',
    answers: [
        { text: 'United States', correct:true},
        { text: 'Haiti', correct:false},
        { text: 'Puerto Rico', correct:false},
        { text: 'Brazil', correct:false},
    ]    
    },
    
    {
    question: 'In which country will you find Elmina Castle the so called "slave" Castle',
    answers: [
        { text: 'Portugal', correct:false},
        { text: 'Brazil', correct:false},
        { text: 'Ghana', correct:true},
        { text: 'Angola', correct:false},
    ]
    },
    
    {
    question: 'The State of the African Diaspora was launched in 2018 at an African Union summit, in which country?',
    answers: [
        { text: 'Zimbabwe', correct:false},
        { text: 'Mauritiaus', correct:false},
        { text: 'Cameroon', correct:false},
        { text: 'Mauritania', correct:true},
    ]
    },

    {
    question: 'In what UK city did the Teddy Boys race riot take place in 1958?',
    answers: [
        { text: 'Liverpool', correct:false},
        { text: 'London', correct:false},
        { text: 'Nottingham', correct:true},
        { text: 'Bristol', correct:false},
    ]
    },
]