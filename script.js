const questions = [
    {
        question: "Citez un animal domestique",
        answers: [
            { text: "Chien", points: 40 },
            { text: "Chat", points: 30 },
            { text: "Poisson", points: 15 },
            { text: "Lapin", points: 10 },
            { text: "Perroquet", points: 5 },
        ]
    },
    {
        question: "Citez une boisson chaude",
        answers: [
            { text: "Café", points: 40 },
            { text: "Thé", points: 35 },
            { text: "Chocolat chaud", points: 15 },
            { text: "Tisane", points: 10 },
        ]
    },
    {
        question: "Citez un moyen de transport",
        answers: [
            { text: "Voiture", points: 40 },
            { text: "Train", points: 25 },
            { text: "Avion", points: 20 },
            { text: "Bus", points: 10 },
            { text: "Vélo", points: 5 },
        ]
    },
    {
        question: "Citez une pièce de la maison",
        answers: [
            { text: "Cuisine", points: 30 },
            { text: "Salon", points: 25 },
            { text: "Salle de bain", points: 20 },
            { text: "Chambre", points: 15 },
            { text: "Toilettes", points: 10 },
        ]
    },
    {
        question: "Citez un fruit jaune",
        answers: [
            { text: "Banane", points: 50 },
            { text: "Citron", points: 30 },
            { text: "Ananas", points: 20 },
        ]
    },
    {
        question: "Citez un métier avec un uniforme",
        answers: [
            { text: "Policier", points: 35 },
            { text: "Pompier", points: 30 },
            { text: "Infirmier", points: 20 },
            { text: "Militaire", points: 15 },
        ]
    },
    {
        question: "Citez un pays européen",
        answers: [
            { text: "France", points: 40 },
            { text: "Espagne", points: 30 },
            { text: "Italie", points: 20 },
            { text: "Allemagne", points: 10 },
        ]
    },
    {
        question: "Citez un sport d'équipe",
        answers: [
            { text: "Football", points: 40 },
            { text: "Basketball", points: 30 },
            { text: "Rugby", points: 20 },
            { text: "Handball", points: 10 },
        ]
    },
    {
        question: "Citez une langue étrangère",
        answers: [
            { text: "Anglais", points: 50 },
            { text: "Espagnol", points: 30 },
            { text: "Allemand", points: 15 },
            { text: "Italien", points: 5 },
        ]
    },
    {
        question: "Citez une saison",
        answers: [
            { text: "Été", points: 40 },
            { text: "Hiver", points: 30 },
            { text: "Printemps", points: 20 },
            { text: "Automne", points: 10 },
        ]
    },
    {
        question: "Citez un réseau social",
        answers: [
            { text: "Facebook", points: 40 },
            { text: "Instagram", points: 30 },
            { text: "TikTok", points: 20 },
            { text: "Twitter", points: 10 },
        ]
    },
    {
        question: "Citez un animal de la savane",
        answers: [
            { text: "Lion", points: 35 },
            { text: "Éléphant", points: 30 },
            { text: "Girafe", points: 20 },
            { text: "Zèbre", points: 15 },
        ]
    },
    {
        question: "Citez une matière scolaire",
        answers: [
            { text: "Maths", points: 40 },
            { text: "Français", points: 30 },
            { text: "Histoire", points: 20 },
            { text: "Géographie", points: 10 },
        ]
    },
    {
        question: "Citez un super-héros",
        answers: [
            { text: "Spider-Man", points: 35 },
            { text: "Batman", points: 30 },
            { text: "Superman", points: 20 },
            { text: "Iron Man", points: 15 },
        ]
    },
    {
        question: "Citez un style de musique",
        answers: [
            { text: "Pop", points: 40 },
            { text: "Rap", points: 30 },
            { text: "Rock", points: 20 },
            { text: "Classique", points: 10 },
        ]
    },
    {
        question: "Citez un appareil électronique",
        answers: [
            { text: "Téléphone", points: 40 },
            { text: "Ordinateur", points: 30 },
            { text: "Télévision", points: 20 },
            { text: "Tablette", points: 10 },
        ]
    },
    {
        question: "Citez un continent",
        answers: [
            { text: "Europe", points: 30 },
            { text: "Asie", points: 30 },
            { text: "Amérique", points: 20 },
            { text: "Afrique", points: 20 },
        ]
    },
    {
        question: "Citez un personnage de Disney",
        answers: [
            { text: "Mickey", points: 40 },
            { text: "Donald", points: 30 },
            { text: "Simba", points: 20 },
            { text: "Elsa", points: 10 },
        ]
    },
    {
        question: "Citez un légume vert",
        answers: [
            { text: "Haricot", points: 30 },
            { text: "Brocoli", points: 25 },
            { text: "Épinard", points: 20 },
            { text: "Salade", points: 15 },
        ]
    },
    {
        question: "Citez un jour de la semaine",
        answers: [
            { text: "Lundi", points: 20 },
            { text: "Vendredi", points: 25 },
            { text: "Samedi", points: 30 },
            { text: "Dimanche", points: 25 },
        ]
    }
];
let currentQuestion;
let revealedAnswers = [];
let errors = 0;
let teamScores = [0, 0];
let currentTeam = 0;
let timer;
let timerSeconds = 30;
let recognition;

function startGame() {
    teamScores = [0, 0];
    currentTeam = 0;
    updateTeamScores();
    newRound();
    setupVoiceRecognition();
}

function newRound() {
    clearInterval(timer);
    timerSeconds = 30;
    const randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[randomIndex];
    revealedAnswers = Array(currentQuestion.answers.length).fill(false);
    errors = 0;
    updateDisplay();
    startTimer();
}

function updateDisplay() {
    document.getElementById("question").innerText = currentQuestion.question;
    const board = document.getElementById("answer-board");
    board.innerHTML = "";
    currentQuestion.answers.forEach((answer, index) => {
        const div = document.createElement("div");
        div.className = "answer" + (revealedAnswers[index] ? " revealed" : "");
        div.innerText = revealedAnswers[index] ? `${answer.text} - ${answer.points} pts` : "???";
        board.appendChild(div);
    });
    document.getElementById("errors").innerText = `Erreurs : ${errors}/3`;
}

function submitAnswer(text) {
    const value = text.trim().toLowerCase();
    if (value === "") return;
    let found = false;
    currentQuestion.answers.forEach((answer, index) => {
        if (answer.text.toLowerCase() === value && !revealedAnswers[index]) {
            revealedAnswers[index] = true;
            teamScores[currentTeam] += answer.points;
            playSound("good-sound");
            found = true;
        }
    });

    if (!found) {
        errors++;
        playSound("bad-sound");
        if (errors >= 3) {
            revealAll();
            nextTeam();
            return;
        }
    }

    updateDisplay();
    updateTeamScores();

    if (revealedAnswers.every(v => v)) {
        playSound("end-sound");
        nextTeam();
    }
}

function revealAll() {
    revealedAnswers = revealedAnswers.map(() => true);
    updateDisplay();
}

function nextTeam() {
    clearInterval(timer);
    currentTeam = (currentTeam + 1) % 2;
    setTimeout(newRound, 2000);
}

function updateTeamScores() {
    document.querySelector("#team1 span").innerText = teamScores[0];
    document.querySelector("#team2 span").innerText = teamScores[1];
}

function startTimer() {
    timer = setInterval(() => {
        timerSeconds--;
        document.getElementById("timer").innerHTML = `Temps restant : <span>${timerSeconds}</span> secondes`;
        if (timerSeconds <= 0) {
            clearInterval(timer);
            revealAll();
            nextTeam();
        }
    }, 1000);
}

function setupVoiceRecognition() {
    if (!('webkitSpeechRecognition' in window)) {
        console.log("Reconnaissance vocale non supportée.");
        return;
    }

    if (recognition) {
        recognition.stop();
    }

    recognition = new webkitSpeechRecognition();
    recognition.lang = 'fr-FR';
    recognition.continuous = true;
    recognition.interimResults = false;

    recognition.onresult = function(event) {
        for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
                const transcript = event.results[i][0].transcript;
                console.log("Vous avez dit : " + transcript);
                submitAnswer(transcript);
            }
        }
    };

    recognition.onerror = function(event) {
        console.error("Erreur de reconnaissance vocale : ", event.error);
    };

    recognition.start();
}

function playSound(id) {
    const sound = document.getElementById(id);
    if (sound) sound.play();
}

window.onload = startGame;

document.getElementById("validate-button").addEventListener("click", () => {
    const input = document.getElementById("player-answer");
    submitAnswer(input.value);
    input.value = "";
});