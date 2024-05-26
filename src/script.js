// Questions

const questions = [
	{
        question: "Which of the following materials is not commonly recyclable?",
	    choices: ["Glass", "Paper", "Plastic bags", "Aluminum cans"],
	    correctAnswer: 2
    }
    // ,
	// {
    //     question: "What does the recycling symbol with three arrows represent?",
	//     choices: ["Reduce, Reuse, Recycle", "Recycle, Replace, Renew","Reuse, Recycle, Restore", "Reduce, Renew, Reclaim"],
	//     correctAnswer: 0
    // },
	// {
    //     question: "What is e-waste?",
	//     choices: ["Waste from agricultural practices", "Waste from electronic devices", "Waste from chemical spills", "Waste from construction sites"],
	//     correctAnswer: 1
    // },
	// {
    //     question: "How can you reduce the amount of carbon emissions?", 
	//     choices: ["Plant a tree", "Carpool", "Keep the lights on when you leave the house", "Both a and b"],
	//     correctAnswer: 3
    // },
	// {
    //     question: "What is composting?",
	//     choices: ["Burning waste to reduce volume", "Burying waste in landfills", "Recycling organic waste into fertilizer", "Disposing of waste in oceans"],
	//     correctAnswer: 2
    // },
	// {
    //     question: "Which ecosystem will not be affected by climate change?",
	//     choices: ["Rainforest", "Ice caps", "Desert", "None of the above"],
	//     correctAnswer: 3
    // },
	// {
    //     question: "Why is deforestation bad?",
	//     choices: ["Less trees to absorb carbon dioxide", "Increases soil erosion", "Decreases biodiversity", "All of the above"],
	//     correctAnswer: 3
    // },
	// {
    //     question: "Which of the following actions can help reduce plastic pollution?",
	//     choices: ["Using disposable coffee cups", "Using reusable shopping bags", "Using single-use water bottles", "Using plastic straws"],
	//     correctAnswer: 1
    // },
	// {
    //     question: "Which material is known to be infinitely recyclable without degrading in quality?", 
	//     choices: ["Glass", "Paper", "Plastic", "Cardboard"],
	//     correctAnswer: 1
    // },
	// {
    //     question: "Which of the following is not a fossil fuel?",
	//     choices: ["Oil", "Coal", "Biofuels", "Natural gas"],
	//     correctAnswer: 2
    // },
	// {
    //     question: "Which type of energy uses the heat from Earth's interior?",
	//     choices: ["Nuclear", "Geothermal", "Kinetic", "Potential"],
	//     correctAnswer: 1
    // },
	// {
    //     question: "What percentage of Earth's water is freshwater?",
	//     choices: ["70%", "3%", "1%", "25%"],
	//     correctAnswer: 2
    // },
	// {
    //     question: "What is a carbon sink?",
	//     choices: ["Something that sequesters carbon", "When carbon sinks when you put it in water", "A kitchen sink made of carbon", "Sustainable construction materials"],
	//     correctAnswer: 0
    // },
	// {
    //     question: "What is permafrost?", 
	//     choices: ["The thing that forms on the windshield of your car", "When you can't reheat your leftovers", "Soil that is always at below-freezing temperatures" , "Glaciers"],
	//     correctAnswer: 2
    // },
	// {
    //     question: "What is the largest source of greenhouse gas emissions (as of 2022)?",
	//     choices: ["Transportation", "Power generation", "Manufacturing", "Residential"],
	//     correctAnswer: 0
    // },
	// {
    //     question: "Which number is commonly associated with plastics that can be recycled?",
	//     choices: ["1", "3", "7", "5"],
	//     correctAnswer: 0
    // },
	// {
    //     question: "What is the cause of the hole in the ozone layer?",
	//     choices: ["Methane", "Chlorofluorocarbons (CFCs)", "Volcanic activity", "Deforestation"],
	//     correctAnswer: 1
    // },
	// {
    //     question: "What percentage of plastic waste is actually recycled globally?",
	//     choices: ["50%", "30%", "20%", "<10%"],
	//     correctAnswer: 3
    // },
	// {
    //     question: "What is an example of a climate feedback loop?",
	//     choices: ["Sea level rise", "People suggest polluting less", "Mass displacement from climate catastrophes", "More wildfires cause more carbon emissions"],
	//     correctAnswer: 3
    // },
	// {
    //     question: "What does the term biodiversity hotspot refer to?",
	//     choices: ["Regions with high levels of pollution", "Regions with high numbers of invasive species", "Regions with high numbers of native species", "None of the above"],
	//     correctAnswer: 2
    // },
	// {
    //     question: "Which of the following is not a greenhouse gas?Which number is commonly associated with plastics that can be recycled?",
	//     choices: ["Carbon dioxide (CO2)", "Sulfur hexafluoride (SF6)", "Hydrochloric acid (HCl)", "Methane (CH4)"],
	//     correctAnswer: 2
    // },
	// {
    //     question: "What is the primary cause of ocean acidification?",
	//     choices: ["Oil spills", "Plastic pollution", "Excess CO2 absorption", "Agricultural runoff"],
	//     correctAnswer: 2
    // },
	// {
    //     question: "What does upcycling mean?",
	//     choices: ["Turning waste into energy", "Converting waste materials into new materials of higher quality", "Reusing products without alteration", "Disposing of waste in a responsible manner"],
	//     correctAnswer: 1
    // },
	// {
    //     question: "Which gas is a significant contributor to the formation of acid rain?",
	//     choices: ["Oxygen (O2)", "Carbon dioxide (CO2)", "Sulfur dioxide (SO2)", "Nitrogen (N2)"],
	//     correctAnswer: 2
    // },
	// {
    //     question: "What simple action can individuals take to help prevent ozone layer depletion?",
	//     choices: ["Planting trees", "Using energy-efficient appliances", "Reducing the use of aerosol sprays containing CFCs", "Recycling plastic bottles"],
	//     correctAnswer: 2
    // }
];

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
    const question = questions[currentQuestionIndex];
    loadQuestion(question.question, question.choices);
}

function selectAnswer(index) {
    const choicesElements = document.getElementsByClassName('choice');
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (index === correctAnswer) {
        correctAnswers++;
        choicesElements[index].style.backgroundColor = '#28a745'; // Green color
    } else {
        choicesElements[index].style.backgroundColor = '#dc3545'; // Red color
    }

    for (let i = 0; i < choicesElements.length; i++) {
        choicesElements[i].disabled = true;
    }

    currentQuestionIndex++;

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
    }
}

function visitGarden() {
    hideHome();
    document.getElementById('garden-container').classList.remove('hidden');

    const gardenElement = document.getElementById('garden');
    gardenElement.innerHTML = '';

    for (let i = 0; i < correctAnswers; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        gardenElement.appendChild(flower);
    }
}

function showHome() {
    document.getElementById('home-screen').classList.remove('hidden');
    document.getElementById('game-title').classList.remove('hidden');
    document.getElementById('quote').classList.remove('hidden');

    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('garden-container').classList.add('hidden');
}

function hideHome() {
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('game-title').classList.add('hidden');
    document.getElementById('quote').classList.add('hidden');
}

document.addEventListener("DOMContentLoaded", function() {
    function adjustFontSize(element) {
        const height = element.clientHeight;
        const width = element.clientWidth;
        const textLength = element.textContent.length;
        const fontSize = Math.min(30, Math.sqrt((width * height) / textLength) * 0.8);
        element.style.fontSize = fontSize + 'px';
    }

    const choices = document.querySelectorAll('.choice');

    choices.forEach(choice => {
        adjustFontSize(choice);
    });

    function loadQuestion(questionText, answers) {
        document.getElementById('question').textContent = questionText;
        choices.forEach((choice, index) => {
            choice.textContent = answers[index] || '';
            adjustFontSize(choice);
        });
    }

    window.loadQuestion = loadQuestion;

    if (questions.length > 0) {
        loadQuestion(questions[0].question, questions[0].choices);
    }
});



// function showQuestion() {

//     // Get the question and choices HTML elements
//     const questionElement = document.getElementById('question');
//     const choicesElements = document.getElementsByClassName('choice');
    
//     // Set the question
//     questionElement.textContent = questions[currentQuestionIndex].question;

//     // Set the choices
//     Array.from(choicesElements).forEach((button, index) => {
//         button.textContent = questions[currentQuestionIndex].choices[index];
//     });

// }

// function selectAnswer(index) {

//     const choicesElements = document.getElementsByClassName('choice');
//     // Get the correct answer
//     const correctAnswer = questions[currentQuestionIndex].correctAnswer;

//     // Check if the guess is correct
//     if (index === correctAnswer) {
//         correctAnswers++;
//         // Change background color to green for the correct answer
//         choicesElements[index].style.backgroundColor = '#28a745'; // Green color
//     } else {
//         // Change background color to red for the wrong answer
//         choicesElements[index].style.backgroundColor = '#dc3545'; // Red color
//     }

//     // Disable further clicks on choices
//     for (let i = 0; i < choicesElements.length; i++) {
//         choicesElements[i].disabled = true;
//     }

//     // Increment the current question
//     currentQuestionIndex++;

//     // Show the next question, or return home
//     if (currentQuestionIndex < questions.length) {
//         setTimeout(() => {
//             // Reset background colors and enable choices for next question after a delay
//             for (let i = 0; i < choicesElements.length; i++) {
//                 choicesElements[i].style.backgroundColor = '#F5F5F5'; // Reset to default color
//                 choicesElements[i].disabled = false;
//             }
//             showQuestion();
//         }, 1000); // Delay for 1 second
//     } else {
//         showHome();
//         currentQuestionIndex = 0;
//     }

// }

// function visitGarden() {

//     // Hide the home screen, show the garden
//     hideHome();
//     document.getElementById('garden-container').classList.remove('hidden');

//     // create the garden
//     const gardenElement = document.getElementById('garden');
//     gardenElement.innerHTML = '';

//     // add "correctAnswers" number of flower divs to the garden
//     for (let i = 0; i < correctAnswers; i++) {
//         const flower = document.createElement('div');
//         flower.className = 'flower';
//         gardenElement.appendChild(flower);
//     }

// }

// function showHome() {

//     // Show the home screen, title, and quote
//     document.getElementById('home-screen').classList.remove('hidden');
//     document.getElementById('game-title').classList.remove('hidden');
//     document.getElementById('quote').classList.remove('hidden');

//     // Hide the quiz and garden
//     document.getElementById('quiz-container').classList.add('hidden');
//     document.getElementById('garden-container').classList.add('hidden');

// }

// function hideHome() {
//     // Hide the home screen, title, and quote
//     document.getElementById('home-screen').classList.add('hidden');
//     document.getElementById('game-title').classList.add('hidden');
//     document.getElementById('quote').classList.add('hidden');
// }

// document.addEventListener("DOMContentLoaded", function() {
//     // Function to adjust font size dynamically based on content
//     function adjustFontSize(element) {
//         // Get the height of the choice button
//         const height = element.clientHeight;
//         // Get the width of the choice button
//         const width = element.clientWidth;
//         // Get the number of characters in the text
//         const textLength = element.textContent.length;
//         // Calculate the font size based on the height, width, and text length
//         const fontSize = Math.min(30, Math.sqrt((width * height) / textLength) * 0.8); // Adjust the multiplier as needed
//         // Apply the calculated font size
//         element.style.fontSize = fontSize + 'px';
//     }


//     // Get all choice buttons
//     const choices = document.querySelectorAll('.choice');

//     // Loop through each choice button and adjust font size
//     choices.forEach(choice => {
//         adjustFontSize(choice);
//     });

//     // Optional: Adjust font size when new questions are loaded or choices are updated
//     function updateChoices() {
//         choices.forEach(choice => {
//             adjustFontSize(choice);
//         });
//     }


//     // Function to adjust font size dynamically based on content
//     function adjustFontSize(element) {
//         // Get the height of the choice button
//         const height = element.clientHeight;
//         // Get the number of characters in the text
//         const textLength = element.textContent.length;
//         // Calculate the font size based on the height and text length
//         const fontSize = Math.min(30, height / (textLength * 0.6)); // Adjust the multiplier as needed
//         // Apply the calculated font size
//         element.style.fontSize = fontSize + 'px';
//     }

//     // Example function for loading a question and updating font sizes
//     function loadQuestion(questionText, answers) {
//         document.getElementById('question').textContent = questionText;
//         choices.forEach((choice, index) => {
//             choice.textContent = answers[index] || '';
//             adjustFontSize(choice);
//         });
//     }

// });

