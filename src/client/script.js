/* START OF QUESTIONS */

const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
        correctAnswer: 0
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: 3
    }
];

/* END OF QUESTIONS */

let currentQuestionIndex = 0;
let correctAnswers = 0;

function startQuiz() {

    // hide the home screen
    hideHome();

    // Show the quiz container HTML element
    document.getElementById('quiz-container').classList.remove('hidden');
    
    // Show the question
    showQuestion();

}

function showQuestion() {

    // Get the question and choices HTML elements
    const questionElement = document.getElementById('question');
    const choicesElements = document.getElementsByClassName('choice');
    
    // Set the question
    questionElement.textContent = questions[currentQuestionIndex].question;

    // Set the choices
    Array.from(choicesElements).forEach((button, index) => {
        button.textContent = questions[currentQuestionIndex].choices[index];
    });

}

function selectAnswer(index) {

    // Get the correct answer
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    // Check if the guess is correct
    if (index === correctAnswer) {
        correctAnswers++;
        alert('Correct!');
    } else {
        alert('Wrong!');
    }

    // Increment the current question
    currentQuestionIndex++;

    // Show the next question, or return home
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert('Quiz Completed!');
        showHome();
        currentQuestionIndex = 0;
    }

}

function visitGarden() {

    // Hide the home screen, show the garden
    hideHome();
    document.getElementById('garden-container').classList.remove('hidden');

    // create the garden
    const gardenElement = document.getElementById('garden');
    gardenElement.innerHTML = '';

    // add "correctAnswers" number of flower divs to the garden
    for (let i = 0; i < correctAnswers; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        gardenElement.appendChild(flower);
    }

}

function showHome() {

    // Show the home screen, title, and quote
    document.getElementById('home-screen').classList.remove('hidden');
    document.getElementById('game-title').classList.remove('hidden');
    document.getElementById('quote').classList.remove('hidden');

    // Hide the quiz and garden
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('garden-container').classList.add('hidden');

}

function hideHome() {
    // Hide the home screen, title, and quote
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('game-title').classList.add('hidden');
    document.getElementById('quote').classList.add('hidden');
}