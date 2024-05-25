/* START OF QUESTIONS */

/*const questions = [
    {
        question: "Which of the following materials is not commonly recyclable?",
        choices: ["Glass", "Paper", "Plastic bags", "Aluminum cans"],
        correctAnswer: 2
    }
];*/

const questions = require('questions');

// Read the JSON file
questions.readFile('questions.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the JSON file:', err);
        return;
    }

    try {
        const jsonData = JSON.parse(data);
        console.log(jsonData);
        // Use the data from the JSON file here
    } catch (err) {
        console.error('Error parsing the JSON data:', err);
    }
});

/* END OF QUESTIONS */

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
