// Disabling zoom in and zoom out
window.addEventListener('wheel', (event) => {
  if (event.ctrlKey) {
    event.preventDefault();
  }
}, { passive: false });


window.addEventListener('gesturestart', (event) => {
  event.preventDefault();
}, { passive: false });

window.addEventListener('gesturechange', (event) => {
  event.preventDefault();
}, { passive: false });

window.addEventListener('gestureend', (event) => {
  event.preventDefault();
}, { passive: false });

//Adjust size
const socLinks = document.getElementById('social-links');
const gameConsole = document.getElementById('game-console');

function updateInformation() {
  gameConsole.style.width = `${socLinks.offsetWidth}px`;
}


setInterval(updateInformation, 100);


//quiz questions and answers
const quiz = [
  {
    question: "What year did World War II begin?",
    answers: ["1935", "1939", "1941", "1945"],
    correctAnswer: "1939"
  },
  {
    question: "What is the capital of Australia?",
    answers: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: "Canberra"
  },
  {
    question: "What is the largest animal on Earth?",
    answers: ["Elephant", "Blue Whale", "Hippopotamus", "Giraffe"],
    correctAnswer: "Blue Whale"
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: ["Oxygen", "Gold", "Silver", "Hydrogen"],
    correctAnswer: "Oxygen"
  },
  {
    question: "Which planet is closest to the Sun?",
    answers: ["Earth", "Venus", "Mercury", "Mars"],
    correctAnswer: "Mercury"
  },
  {
    question: "Who wrote 'War and Peace'?",
    answers: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Alexander Pushkin"],
    correctAnswer: "Leo Tolstoy"
  },
  {
    question: "What is the official language of Brazil?",
    answers: ["Spanish", "Portuguese", "French", "English"],
    correctAnswer: "Portuguese"
  },
  {
    question: "What is the longest river in the world?",
    answers: ["Nile", "Amazon", "Mississippi", "Yangtze"],
    correctAnswer: "Amazon"
  },
  {
    question: "Who developed the theory of relativity?",
    answers: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Galileo Galilei"],
    correctAnswer: "Albert Einstein"
  },
  {
    question: "Which country is the birthplace of pizza?",
    answers: ["France", "Italy", "Greece", "Spain"],
    correctAnswer: "Italy"
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: "Pacific"
  },
  {
    question: "Who is the author of the play 'Hamlet'?",
    answers: ["William Shakespeare", "George Orwell", "Mark Twain", "Ernest Hemingway"],
    correctAnswer: "William Shakespeare"
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    answers: ["Jupiter", "Venus", "Saturn", "Mars"],
    correctAnswer: "Mars"
  },
  {
    question: "What is the process of turning water into vapor called?",
    answers: ["Condensation", "Evaporation", "Sublimation", "Melting"],
    correctAnswer: "Evaporation"
  },
  {
    question: "Which chemical element is the main component of diamond?",
    answers: ["Carbon", "Silicon", "Nitrogen", "Oxygen"],
    correctAnswer: "Carbon"
  },
  {
    question: "What is the highest mountain in the world?",
    answers: ["Kilimanjaro", "Elbrus", "Everest", "Mont Blanc"],
    correctAnswer: "Everest"
  },
  {
    question: "Who wrote 'The Master and Margarita'?",
    answers: ["Mikhail Bulgakov", "Ivan Turgenev", "Anton Chekhov", "Fyodor Dostoevsky"],
    correctAnswer: "Mikhail Bulgakov"
  },
  {
    question: "What city is the capital of Japan?",
    answers: ["Osaka", "Kyoto", "Tokyo", "Nagoya"],
    correctAnswer: "Tokyo"
  },
  {
    question: "Who is the author of the novel 'Crime and Punishment'?",
    answers: ["Leo Tolstoy", "Alexander Pushkin", "Anton Chekhov", "Fyodor Dostoevsky"],
    correctAnswer: "Fyodor Dostoevsky"
  },
  {
    question: "Which chemical element is represented by the symbol 'Fe'?",
    answers: ["Fluorine", "Phosphorus", "Iron", "Francium"],
    correctAnswer: "Iron"
  },
  {
    question: "Who painted the 'Mona Lisa'?",
    answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    question: "What is the largest desert in the world?",
    answers: ["Kalahari", "Gobi", "Sahara", "Atacama"],
    correctAnswer: "Sahara"
  },
  {
    question: "Which country has the largest population in the world?",
    answers: ["India", "USA", "Indonesia", "China"],
    correctAnswer: "China"
  },
  {
    question: "Which organ in the human body produces insulin?",
    answers: ["Liver", "Pancreas", "Kidneys", "Thyroid"],
    correctAnswer: "Pancreas"
  },
  {
    question: "What animal is the symbol of the WWF (World Wildlife Fund)?",
    answers: ["Lion", "Panda", "Tiger", "Elephant"],
    correctAnswer: "Panda"
  },
  {
    question: "What is the largest sea by area?",
    answers: ["Black Sea", "Mediterranean Sea", "Caspian Sea", "Red Sea"],
    correctAnswer: "Caspian Sea"
  },
  {
    question: "Which musical instrument has keys and strings?",
    answers: ["Guitar", "Violin", "Piano", "Harp"],
    correctAnswer: "Piano"
  },
  {
    question: "Which chemical element is the main component of the sun?",
    answers: ["Oxygen", "Helium", "Carbon", "Hydrogen"],
    correctAnswer: "Hydrogen"
  },
  {
    question: "What is the smallest country in the world?",
    answers: ["Monaco", "Malta", "Vatican City", "San Marino"],
    correctAnswer: "Vatican City"
  },
  {
    question: "What is the capital of Canada?",
    answers: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
    correctAnswer: "Ottawa"
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: ["Gold", "Iron", "Diamond", "Platinum"],
    correctAnswer: "Diamond"
  },
  {
    question: "Who wrote 'Pride and Prejudice'?",
    answers: ["Charlotte Bronte", "Mary Shelley", "Emily Bronte", "Jane Austen"],
    correctAnswer: "Jane Austen"
  },
  {
    question: "What is the tallest building in the world as of 2024?",
    answers: ["Shanghai Tower", "Burj Khalifa", "Abraj Al Bait", "One World Trade Center"],
    correctAnswer: "Burj Khalifa"
  },
  {
    question: "What is the capital of Egypt?",
    answers: ["Alexandria", "Cairo", "Giza", "Luxor"],
    correctAnswer: "Cairo"
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: ["China", "Japan", "Thailand", "South Korea"],
    correctAnswer: "Japan"
  },
  {
    question: "Which continent is the largest by land area?",
    answers: ["Africa", "North America", "Asia", "Antarctica"],
    correctAnswer: "Asia"
  },
  {
    question: "What is the main ingredient in guacamole?",
    answers: ["Tomato", "Onion", "Avocado", "Pepper"],
    correctAnswer: "Avocado"
  },
  {
    question: "Who painted the ceiling of the Sistine Chapel?",
    answers: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Donatello"],
    correctAnswer: "Michelangelo"
  },
  {
    question: "What is the capital of South Korea?",
    answers: ["Seoul", "Busan", "Incheon", "Daegu"],
    correctAnswer: "Seoul"
  },
  {
    question: "Which planet is known for its rings?",
    answers: ["Mars", "Venus", "Saturn", "Jupiter"],
    correctAnswer: "Saturn"
  },
  {
    question: "What is the main currency used in Japan?",
    answers: ["Yuan", "Won", "Yen", "Dollar"],
    correctAnswer: "Yen"
  },
  {
    question: "What is the largest mammal in the world?",
    answers: ["Elephant", "Blue Whale", "Giraffe", "Rhino"],
    correctAnswer: "Blue Whale"
  },
  {
    question: "What is the name of the longest river in Africa?",
    answers: ["Nile", "Congo", "Niger", "Zambezi"],
    correctAnswer: "Nile"
  },
  {
    question: "Which ocean is the smallest by surface area?",
    answers: ["Indian", "Southern", "Arctic", "Atlantic"],
    correctAnswer: "Arctic"
  },
  {
    question: "Who is known as the father of modern physics?",
    answers: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Niels Bohr"],
    correctAnswer: "Albert Einstein"
  },
  {
    question: "What is the capital city of Spain?",
    answers: ["Barcelona", "Seville", "Madrid", "Valencia"],
    correctAnswer: "Madrid"
  },
  {
    question: "What is the chemical formula for water?",
    answers: ["CO2", "H2O", "O2", "H2O2"],
    correctAnswer: "H2O"
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answers: ["Christopher Marlowe", "Ben Jonson", "William Shakespeare", "Thomas Kyd"],
    correctAnswer: "William Shakespeare"
  },
  {
    question: "What is the name of the largest rainforest in the world?",
    answers: ["Congo Rainforest", "Daintree Rainforest", "Amazon Rainforest", "Southeast Asian Rainforest"],
    correctAnswer: "Amazon Rainforest"
  },
  {
    question: "Which city hosted the 2016 Summer Olympics?",
    answers: ["London", "Beijing", "Rio de Janeiro", "Tokyo"],
    correctAnswer: "Rio de Janeiro"
  },
  {
    question: "What is the capital of Italy?",
    answers: ["Venice", "Milan", "Rome", "Naples"],
    correctAnswer: "Rome"
  },
  {
    question: "Who discovered penicillin?",
    answers: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Joseph Lister"],
    correctAnswer: "Alexander Fleming"
  },
  {
    question: "What is the capital city of Germany?",
    answers: ["Frankfurt", "Munich", "Berlin", "Hamburg"],
    correctAnswer: "Berlin"
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    answers: ["Mars", "Jupiter", "Mercury", "Venus"],
    correctAnswer: "Mars"
  },
  {
    question: "What is the name of the famous clock tower in London?",
    answers: ["Big Ben", "London Eye", "Tower Bridge", "The Shard"],
    correctAnswer: "Big Ben"
  },
  {
    question: "What is the capital city of France?",
    answers: ["Lyon", "Marseille", "Paris", "Nice"],
    correctAnswer: "Paris"
  },
  {
    question: "What is the largest island in the world?",
    answers: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
    correctAnswer: "Greenland"
  },
  {
    question: "Which country is famous for the Great Wall?",
    answers: ["India", "China", "Japan", "Mongolia"],
    correctAnswer: "China"
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: ["Au", "Ag", "Pb", "Fe"],
    correctAnswer: "Au"
  },
  {
    question: "Who wrote 'The Great Gatsby'?",
    answers: ["Ernest Hemingway", "Mark Twain", "F. Scott Fitzgerald", "John Steinbeck"],
    correctAnswer: "F. Scott Fitzgerald"
  },
  {
    question: "Which ocean lies on the east coast of the United States?",
    answers: ["Pacific", "Atlantic", "Indian", "Arctic"],
    correctAnswer: "Atlantic"
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Earth", "Saturn", "Neptune", "Jupiter"],
    correctAnswer: "Jupiter"
  },
  {
    question: "What is the name of the famous pyramids in Egypt?",
    answers: ["Pyramids of Teotihuacan", "Pyramids of Giza", "Pyramids of Tikal", "Pyramids of Chichen Itza"],
    correctAnswer: "Pyramids of Giza"
  },
  {
    question: "Who painted 'Starry Night'?",
    answers: ["Claude Monet", "Pablo Picasso", "Vincent van Gogh", "Salvador Dali"],
    correctAnswer: "Vincent van Gogh"
  },
  {
    question: "Which country is known as the Land of Fire and Ice?",
    answers: ["Iceland", "New Zealand", "Norway", "Canada"],
    correctAnswer: "Iceland"
  },
  {
    question: "What is the name of the ship that sank in 1912?",
    answers: ["Britannic", "Lusitania", "Titanic", "Queen Mary"],
    correctAnswer: "Titanic"
  },
  {
    question: "Who invented the telephone?",
    answers: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
    correctAnswer: "Alexander Graham Bell"
  },
  {
    question: "What is the capital city of Australia?",
    answers: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: "Canberra"
  },
  {
    question: "What is the largest continent by population?",
    answers: ["Africa", "Europe", "Asia", "South America"],
    correctAnswer: "Asia"
  },
  {
    question: "Which country is famous for the Eiffel Tower?",
    answers: ["Germany", "Italy", "Spain", "France"],
    correctAnswer: "France"
  },
  {
    question: "What is the capital of Argentina?",
    answers: ["Buenos Aires", "Santiago", "Montevideo", "Lima"],
    correctAnswer: "Buenos Aires"
  },
  {
    question: "Who developed the theory of evolution by natural selection?",
    answers: ["Gregor Mendel", "Jean-Baptiste Lamarck", "Alfred Russel Wallace", "Charles Darwin"],
    correctAnswer: "Charles Darwin"
  },
  {
    question: "What is the most spoken language in the world?",
    answers: ["Spanish", "English", "Hindi", "Mandarin"],
    correctAnswer: "Mandarin"
  },
  {
    question: "What is the name of the famous leaning tower in Italy?",
    answers: ["Tower of Pisa", "Tower of Milan", "Tower of Rome", "Tower of Florence"],
    correctAnswer: "Tower of Pisa"
  },
  {
    question: "Which country is the largest producer of coffee?",
    answers: ["Vietnam", "Colombia", "Brazil", "Ethiopia"],
    correctAnswer: "Brazil"
  },
  {
    question: "What is the capital city of Mexico?",
    answers: ["Guadalajara", "Cancun", "Mexico City", "Tijuana"],
    correctAnswer: "Mexico City"
  }
];

let score = 0;
let bestScore = getBestScoreFromLocalStorage();
let timer;
let timeLeft = 10; 

document.querySelector('#leaderboard-section #leaderboard-content #leaderboard-best-score').textContent = `Your best score: ${bestScore}`;
document.getElementById('end-container').style.display = "none";

document.getElementById('start-again').onclick = () => loadRandomQuestion();
document.getElementById('press-to-start').onclick = () => loadRandomQuestion();
document.getElementById('start-again').style.alignSelf = 'center';

const question = document.getElementById('question-container');
const answerContainer0 = document.getElementById('answer-container0');
const answerContainer1 = document.getElementById('answer-container1');
const answerContainer2 = document.getElementById('answer-container2');
const answerContainer3 = document.getElementById('answer-container3');
const gameTimer = document.getElementById('timer');
const currentScore = document.getElementById('current-score');

window.onload = startScreen;

//Function used on start
function startScreen() {
    hideElement(question);
    hideElement(answerContainer0);
    hideElement(answerContainer1);
    hideElement(answerContainer2);
    hideElement(answerContainer3);
    hideElement(gameTimer);
    hideElement(currentScore);
}

//Function that loads questions and answers
function loadRandomQuestion() {
    startGame();
    resetTimer();
    startTimer();

    const randomIndex = Math.floor(Math.random() * quiz.length);
    const selectedQuestion = quiz[randomIndex];
    displayQuestionAndAnswers(selectedQuestion);
}

//Function that checks if answer is right or not
function checkAnswer(selectedAnswer, correctAnswer, parentElement) {
    if (selectedAnswer === correctAnswer) {
        handleCorrectAnswer(parentElement);
    } else {
        handleWrongAnswer(parentElement);
    }
}

//Function that gets best score on load
function getBestScoreFromLocalStorage() {
    return localStorage.getItem('bestScore') ? parseInt(localStorage.getItem('bestScore')) : 0;
}

//Function that saves best score after quiz ends
function saveBestScoreToLocalStorage(score) {
    localStorage.setItem('bestScore', score);
}

//Function that starts game
function startGame() {
    hideElement(document.getElementById('end-container'));
    hideElement(document.getElementById('press-to-start'));
    hideElement(document.getElementById('game-name'));
    gameConsole.style.justifyContent = 'start';
    document.getElementById('header').style.justifyContent = 'space-around';
    showElement(gameTimer);
    showElement(currentScore);
    showElement(question);
    showElement(answerContainer0);
    showElement(answerContainer1);
    showElement(answerContainer2);
    showElement(answerContainer3);
}

//Function that reesets timer
function resetTimer() {
    clearInterval(timer);
    timeLeft = 10;
    gameTimer.textContent = `Time left: ${timeLeft}s`;
}

//Function that starts timer
function startTimer() {
    timer = setInterval(() => {
        timeLeft -= 1;
        gameTimer.textContent = `Time left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

//Function that displays question and answers
function displayQuestionAndAnswers(selectedQuestion) {
    document.getElementById('question').textContent = selectedQuestion.question;

    document.getElementById('answer0').textContent = selectedQuestion.answers[0];
    document.getElementById('answer1').textContent = selectedQuestion.answers[1];
    document.getElementById('answer2').textContent = selectedQuestion.answers[2];
    document.getElementById('answer3').textContent = selectedQuestion.answers[3];

    document.getElementById('answer0').onclick = () => checkAnswer(selectedQuestion.answers[0], selectedQuestion.correctAnswer, document.getElementById('answer0').parentElement);
    document.getElementById('answer1').onclick = () => checkAnswer(selectedQuestion.answers[1], selectedQuestion.correctAnswer, document.getElementById('answer1').parentElement);
    document.getElementById('answer2').onclick = () => checkAnswer(selectedQuestion.answers[2], selectedQuestion.correctAnswer, document.getElementById('answer2').parentElement);
    document.getElementById('answer3').onclick = () => checkAnswer(selectedQuestion.answers[3], selectedQuestion.correctAnswer, document.getElementById('answer3').parentElement);
}

//Function that change color to green and adds 1 score
function handleCorrectAnswer(parentElement) {
    parentElement.classList.add('correct-answer');
    setTimeout(() => {
        parentElement.classList.remove('correct-answer');
        document.getElementById('current-score').textContent = `Score: ${score += 1}`;
        loadRandomQuestion();
    }, 500);
}

//Function that ends game
function handleWrongAnswer(parentElement) {
    parentElement.classList.add('wrong-answer');
    setTimeout(() => {
        parentElement.classList.remove('wrong-answer');
        endGame();
    }, 500);
}

function endGame() {
    clearInterval(timer);
    hideElement(question);
    hideElement(answerContainer0);
    hideElement(answerContainer1);
    hideElement(answerContainer2);
    hideElement(answerContainer3);
    hideElement(gameTimer);
    hideElement(currentScore);
    showElement(document.getElementById('game-name'));
    document.getElementById('end-container').style.display = 'flex';

    document.querySelector('#game-console #end-container #end-screen #game-score').textContent = `Your current score: ${score}`;

    if (score > bestScore) {
        bestScore = score;
        saveBestScoreToLocalStorage(bestScore);
    }

    document.querySelector('#game-console #end-container #end-screen #best-score').textContent = `Your best score: ${bestScore}`;
    score = 0;
    document.getElementById('current-score').textContent = `Score: ${score}`;
    document.querySelector('#leaderboard-section #leaderboard-content #leaderboard-best-score').textContent = `Your best score: ${bestScore}`;
}

//Function that shows element
function showElement(element) {
    element.style.display = 'block';
}

//Function that hides element
function hideElement(element) {
    element.style.display = 'none';
}
