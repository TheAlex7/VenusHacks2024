// Questions

const questions = [
	{
        question: "1. Which of the following materials is not commonly recyclable?",
	    choices: ["Glass", "Paper", "Plastic bags", "Aluminum cans"],
	    correctAnswer: 2
    },
	{
        question: "2. What does the recycling symbol with three arrows represent?",
	    choices: ["Reduce, Reuse, Recycle", "Recycle, Replace, Renew","Reuse, Recycle, Restore", "Reduce, Renew, Reclaim"],
	    correctAnswer: 0
    },
	{
        question: "3. What is e-waste?",
	    choices: ["Waste from agricultural practices", "Waste from electronic devices", "Waste from chemical spills", "Waste from construction sites"],
	    correctAnswer: 1
    },
	{
        question: "4. How can you reduce the amount of carbon emissions?", 
	    choices: ["Plant a tree", "Carpool", "Keep the lights on when you leave the house", "Both a and b"],
	    correctAnswer: 3
    },
	{
        question: "5. What is composting?",
	    choices: ["Burning waste to reduce volume", "Burying waste in landfills", "Recycling organic waste into fertilizer", "Disposing of waste in oceans"],
	    correctAnswer: 2
    },
	/*{
        question: "6. Which ecosystem will not be affected by climate change?",
	    choices: ["Rainforest", "Ice caps", "Desert", "None of the above"],
	    correctAnswer: 3
    },
	{
        question: "7. Why is deforestation bad?",
	    choices: ["Less trees to absorb carbon dioxide", "Increases soil erosion", "Decreases biodiversity", "All of the above"],
	    correctAnswer: 3
    },
	{
        question: "8. Which of the following actions can help reduce plastic pollution?",
	    choices: ["Using disposable coffee cups", "Using reusable shopping bags", "Using single-use water bottles", "Using plastic straws"],
	    correctAnswer: 1
    },
	{
        question: "9. Which material is known to be infinitely recyclable without degrading in quality?", 
	    choices: ["Glass", "Paper", "Plastic", "Cardboard"],
	    correctAnswer: 1
    },
	{
        question: "10. Which of the following is not a fossil fuel?",
	    choices: ["Oil", "Coal", "Biofuels", "Natural gas"],
	    correctAnswer: 2
    },
	{
        question: "11. Which type of energy uses the heat from Earth's interior?",
	    choices: ["Nuclear", "Geothermal", "Kinetic", "Potential"],
	    correctAnswer: 1
    },
	{
        question: "12. What percentage of Earth's water is freshwater?",
	    choices: ["70%", "3%", "1%", "25%"],
	    correctAnswer: 2
    },
	{
        question: "13. What is a carbon sink?",
	    choices: ["Something that sequesters carbon", "When carbon sinks when you put it in water", "A kitchen sink made of carbon", "Sustainable construction materials"],
	    correctAnswer: 0
    },
	{
        question: "14. What is permafrost?", 
	    choices: ["The thing that forms on the windshield of your car", "When you can't reheat your leftovers", "Soil that is always at below-freezing temperatures" , "Glaciers"],
	    correctAnswer: 2
    },
	{
        question: "15. What is the largest source of greenhouse gas emissions (as of 2022)?",
	    choices: ["Transportation", "Power generation", "Manufacturing", "Residential"],
	    correctAnswer: 0
    },
	{
        question: "16. Which number is commonly associated with plastics that can be recycled?",
	    choices: ["1", "3", "7", "5"],
	    correctAnswer: 0
    },
	{
        question: "17. What is the cause of the hole in the ozone layer?",
	    choices: ["Methane", "Chlorofluorocarbons (CFCs)", "Volcanic activity", "Deforestation"],
	    correctAnswer: 1
    },
	{
        question: "18. What percentage of plastic waste is actually recycled globally?",
	    choices: ["50%", "30%", "20%", "<10%"],
	    correctAnswer: 3
    },
	{
        question: "19. What is an example of a climate feedback loop?",
	    choices: ["Sea level rise", "People suggest polluting less", "Mass displacement from climate catastrophes", "More wildfires cause more carbon emissions"],
	    correctAnswer: 3
    },
	{
        question: "20. What does the term biodiversity hotspot refer to?",
	    choices: ["Regions with high levels of pollution", "Regions with high numbers of invasive species", "Regions with high numbers of native species", "None of the above"],
	    correctAnswer: 2
    },
	{
        question: "21. Which of the following is not a greenhouse gas?",
	    choices: ["Carbon dioxide (CO2)", "Sulfur hexafluoride (SF6)", "Hydrochloric acid (HCl)", "Methane (CH4)"],
	    correctAnswer: 2
    },
	{
        question: "22. What is the primary cause of ocean acidification?",
	    choices: ["Oil spills", "Plastic pollution", "Excess CO2 absorption", "Agricultural runoff"],
	    correctAnswer: 2
    },
	{
        question: 23. What does upcycling mean?",
	    choices: ["Turning waste into energy", "Converting waste materials into new materials of higher quality", "Reusing products without alteration", "Disposing of waste in a responsible manner"],
	    correctAnswer: 1
    },
	{
        question: "24. Which gas is a significant contributor to the formation of acid rain?",
	    choices: ["Oxygen (O2)", "Carbon dioxide (CO2)", "Sulfur dioxide (SO2)", "Nitrogen (N2)"],
	    correctAnswer: 2
    },
	{
        question: "25. What simple action can individuals take to help prevent ozone layer depletion?",
	    choices: ["Planting trees", "Using energy-efficient appliances", "Reducing the use of aerosol sprays containing CFCs", "Recycling plastic bottles"],
	    correctAnswer: 2
     } */
];

// List of quotes
const quotes = [
    "Every flower must grow through dirt.",
    "The seeds you plant today will become the flowers of tomorrow.",
    "Stay rooted, but never stop reaching for the sky.",
    "Plants teach us that growth requires patience and perseverance.",
    "With every sunrise, we get a chance to grow."
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {

    // hide the home screen
    hideHome();

    // Show the quiz container HTML element
    document.getElementById('quiz-container').classList.remove('hidden');
    
    // Show the question
    printScore();
    showQuestion();
}

// prints the random quote to the screen
function printQuote() {
    document.getElementById("quote").innerHTML = "random quote!";
}
function printScore() {
    document.getElementById("score").innerHTML = `Score: ${score}`;
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

    const choicesElements = document.getElementsByClassName('choice');

    // Get the correct answer
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    // Check if the guess is correct
    if (index === correctAnswer) {
        score++;
        choicesElements[index].style.backgroundColor = '#28a745'; // Green color
    } else {
        choicesElements[index].style.backgroundColor = '#dc3545'; // Red color
    }

    for (let i = 0; i < choicesElements.length; i++) {
        choicesElements[i].disabled = true;
    }

    currentQuestionIndex++;
    printScore();

    if (currentQuestionIndex < questions.length) {
        setTimeout(() => {
            for (let i = 0; i < choicesElements.length; i++) {
                choicesElements[i].style.backgroundColor = '#F5F5F5'; // Reset to default color
                choicesElements[i].disabled = false;
            }
            showQuestion();
        }, 1000); // Delay for 1 second
    } else {
        showHome();
        currentQuestionIndex = 0;
        score = 0;
    }

}

function visitGarden() {

    // Hide the home screen and the quiz, and show the garden
    hideHome();
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('garden-container').classList.remove('hidden');

    // create the garden
    const gardenElement = document.getElementById('garden');
    gardenElement.innerHTML = '';

    // add "score" number of flower divs to the garden
    for (let i = 0; i < score; i += 5) {
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

    // Hide the quiz, garden, and score
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('garden-container').classList.add('hidden');
    document.getElementById('score').classList.add('hidden');
}

function hideHome() {

    // Hide the home screen, title, and quote
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('game-title').classList.add('hidden');
    document.getElementById('quote').classList.add('hidden');

    // Show the score
    document.getElementById('score').classList.remove('hidden');

}

// Get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return `"${quotes[randomIndex]}"`;
}

// Display a random quote on the page
window.onload = function() {
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = getRandomQuote();
};