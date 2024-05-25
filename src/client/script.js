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

let currentQuestionIndex = 0;
let correctAnswers = 0;

function startQuiz() {
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('game-title').classList.add('hidden');
    document.getElementById('quote').classList.add('hidden');

    document.getElementById('quiz-container').classList.remove('hidden');
    
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElements = document.getElementsByClassName('choice');

    questionElement.textContent = questions[currentQuestionIndex].question;

    Array.from(choicesElements).forEach((button, index) => {
        button.textContent = questions[currentQuestionIndex].choices[index];
    });
}

function selectAnswer(index) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (index === correctAnswer) {
        correctAnswers++;
        alert('Correct!');
    } else {
        alert('Wrong!');
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert('Quiz Completed!');
        document.getElementById('quiz-container').classList.add('hidden');
        document.getElementById('home-screen').classList.remove('hidden');
        currentQuestionIndex = 0;
    }
}

function visitGarden() {
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('garden-container').classList.remove('hidden');
    showGarden();
}

function showGarden() {
    const gardenElement = document.getElementById('garden');
    gardenElement.innerHTML = '';

    for (let i = 0; i < correctAnswers; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        gardenElement.appendChild(flower);
    }
}

function goHome() {
    document.getElementById('garden-container').classList.add('hidden');
    document.getElementById('home-screen').classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('home-screen').classList.remove('hidden');
});
