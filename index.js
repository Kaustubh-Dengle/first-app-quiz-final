const chalk = require("chalk");
var readlineSync = require("readline-sync");
// import wordsToNumbers from 'words-to-numbers';

var score = 0;
var userName = readlineSync.question(chalk.blueBright("What is your name? "));
console.log(chalk.blueBright("Hi " + userName + "! Welcome to How well do you know Kaustubh!"));

//rules
console.log(chalk.yellowBright("\nHere are the Rules: \n1] There are total 10 questions. \n2] TYPE 1,2,3 OR 4 AS THE CORRECT ANSWER. \n3] Each question holds one point. \n4] No points will be deducted for a wrong answer. \n5] This quiz is just for fun, it won't affect our friendship even if you dont score the highscore. \n6] Good luck! \n"))

// highscores
var highScores = [{
  name: "Kaustubh:",
  sCore: " 10"
}, {
  name: "Aditya:",
  sCore: " 10"
}, {
  name: "Tushar:",
  sCore: " 9"
}]

//function
function play(question, answer, options) {
  var yourAnswer = readlineSync.question(chalk.cyanBright(question, options));
  if (yourAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.bgGreen("Yay! You are right! "));
    score = score + 1;
  } else {
    console.log(chalk.bgRed("Oh no! You are wrong! "));
    console.log(chalk.cyan("Correct answer is: ", answer));
  }
  console.log(chalk.yellow("Your score is : ", score));
  console.log("=============");
}

//questions for those who i know irl
var questions = [{
  question: "Am I older than 25 years? ",
  answer: "2",
  options: "\n1] Yes \n2] No \n3] I'm 25 \nYour Answer: "
}, {
  question: "Which city do I live? ",
  answer: "2",
  options: "\n1] Mumbai \n2] Pune \n3] Delhi \n4] Bangalore \nYour Answer: "
}, {
  question: "What do I like more, burger or pizza? ",
  answer: "3",
  options: "\n1] Burger \n2] Pizza \n3] Both \n4] None \nYour Answer: "
}, {
  question: "Which college did I study? ",
  answer: "3",
  options: "\n1] IIT-B \n2] VIT \n3] MESCOE \n4] IISc \nYour Answer: "
}, {
  question: "How many siblings do I have? ",
  answer: "1",
  options: "\n1] One \n2] Two \n3] None \n4] Alone \nYour Answer: "
}, {
  question: "Which series genres do I like? ",
  answer: "1",
  options: "\n1] Sitcoms \n2] Thrillers \n3] Science-fictions \n4] Other \nYour Answer: "
}, {
  question: "Which school did I attend? ",
  answer: "1",
  options: "\n1] Rosary \n2] Dastur \n3] KV \n4] NMV \nYour Answer: "
}, {
  question: "What is/are my hobbies? ",
  answer: "3",
  options: "\n1] Astronomy \n2] Cooking \n3] Both \nYour Answer: "
}, {
  question: "Would I rather: ",
  answer: "1",
  options: "\n1] Chill on a beach with close friends \n2] Socialize with random people at a party \nYour Answer: "
}, {
  question: "Am I a cat person or a dog person? ",
  answer: "3",
  options: "\n1]Cats \n2]Dogs \n3]Both \nYour Answer: "
}]

//questions loop
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer, currentQuestion.options)
}

console.log(chalk.yellow("Your final score: ", score))

//highscore loop
console.log(chalk.blue("The highscores are: "))
for (var j = 0; j < highScores.length; j++) {
  console.log(chalk.blue(highScores[j].name))
  console.log(chalk.blue(highScores[j].sCore))
}

//prompt in case of highscore
if (score >= highScores[1].sCore) {
  console.log(chalk.green("Congratulations " + userName + "! You have scored the highscore! "))
  console.log(chalk.green("Please send me your score so I can update the highscore list!"))
}
console.log(chalk.blueBright("Thanks " + userName + " for taking the quiz! Have a nice day!"))