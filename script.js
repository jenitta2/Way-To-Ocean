const questions = [
    {
        question: "Your year of experience in sea",
        choices: ["0-2 years", "Above 2 years"],
        answer: 1
    },
    {
        question: "Does PFZ available in regional language",
        choices: ["Yes", "No"],
        answer: 0
    },
    {
        question: "You are struck in some unknown place due to raging air. What will you do?",
        choices: ["Wait till someone come", "Try to contact anyone nearby using satellite phone"],
        answer: 1
    },
    {
        question: "Which location will you choose to move if you are lost in mid-sea",
        choices: ["Location within 20 km range", "Move along the water current as it goes"],
        answer: 0
    },
    {
        question: "If you receive tsunami alert through someone, when will you trust it?",
        choices: ["I will completely trust the alert and get panicked", "Verify the information in INCOIS website"],
        answer: 1
    },
    {
        question: "How can you help to avoid coral bleach",
        choices: ["I will choose sustainable seafood options","I couldn't do anything"],
        answer: 0
    },
];
let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesButtons = document.querySelectorAll(".choice");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");

function startQuiz() {
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    choicesButtons.forEach((button, index) => {
        button.innerText = currentQuestion.choices[index];
        button.addEventListener('click', () => selectAnswer(index));
    });
}

function resetState() {
    nextButton.style.display = "none";
    choicesButtons.forEach(button => button.disabled = false);
    resultElement.innerText = "";
}

function selectAnswer(index) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (index === correctAnswer) {
        score++;
        resultElement.innerText = "Correct!";
    } else {
        resultElement.innerText = "Wrong!";
    }
    choicesButtons.forEach(button => button.disabled = true);
    nextButton.style.display = "block";
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    questionElement.innerText = `Quiz finished! You scored ${score} out of ${questions.length}`;
    nextButton.style.display = "none";
    resultElement.innerText = "";
}

startQuiz();