var readLineSync = require("readline-sync");

var userName = readLineSync.question("Hey! What's your name? ");
console.log(
  "Welcome, " +
    userName +
    ".\nLet's see how much knowledge you have about Trivia questions!"
);

var score = 0;

var highScores = [
  {
    name: "Rahul",
    score: 5,
  },
  {
    name: "Rainy",
    score: 4,
  },
];

var questionArray = [
  {
    question:
      "1. Which one of these characters is not friends with Harry Potter?\na. Ron Weasley\nb. Neville Longbottom\nc. Draco Malfoy\n",
    answer: "c",
  },

  {
    question:
      "2. Who was the only U.S. President to resign?\na. Barack Obama\nb. George W. Bush\nc. Richard Nixon\n",
    answer: "c",
  },

  {
    question:
      "3. What is the rarest blood type?\na. O_POSITIVE\nb. A_POSITIVE\nc. AB_NEGATIVE\n",
    answer: "c",
  },

  {
    question:
      "4. How many bones are there in the human body?\na. 206\nb. 205\nc. 201\n",
    answer: "a",
  },

  {
    question:
      "5. What language is the most spoken worldwide?\na. Chinese\nb. Spanish\nc. English\n",
    answer: "c",
  },
];

function play(question, answer) {
  var userAnswer = readLineSync.question(question);
  if (userAnswer === answer) {
    console.log("Right Answer!");
    score += 1;
  } else {
    console.log("Wrong Answer!");
  }
  console.log("Your current score -> " + score);
  console.log("-----------");
}

for (i = 0; i < questionArray.length; i++) {
  play(questionArray[i].question, questionArray[i].answer);
}

if (score >= 4) {
  console.log("Woohoo! Your final score is -> " + score);
  console.log("Congratulations! You have made it to the high scorers list!");
  highScores.push({
    name: [userName],
    score: score,
  });
  highScores.sort(function (a, b) {
    return b.score - a.score;
  });
} else if (score >= 2) {
  console.log("Not bad! Your final score is -> " + score);
} else {
  console.log("You need to up your game! Your final score is -> " + score);
}

console.log("Check out the high scores!");
console.log("-----------");
for (i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + " : " + highScores[i].score);
}