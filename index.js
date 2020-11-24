var readlineSync = require('readline-sync');
var chalk = require('chalk');

var name = readlineSync.question(chalk.bgYellowBright("Please enter your name: "));

console.log(chalk.bold(`Welcome ${name} to the FRIENDS quiz!!`));
console.log("-------------------------------------");
var questionOne = {
  question : "1. What pet did Ross own? ",
  optionOne : "a. A rabbit called Lancelot",
  optionTwo : "b. A dog named Keith",
  optionThree : "c. A monkey named Marcel",
  optionFour : "d. A lizard named Alistair",
  answer : "c"
}

var questionTwo = {
  question : "2. What’s the name of Joey’s penguin? ",
  optionOne : "a. Snowflake",
  optionTwo : "b. Waddle",
  optionThree : "c. Huggsy",
  optionFour : "d. Bobber",
  answer : "c"
}

var questionThree = {
  question : "3. What song is Phoebe best known for? ",
  optionOne : "a. Smelly Cat",
  optionTwo : "b. Smelly Dog",
  optionThree : "c. Smelly Rabbit",
  optionFour : "d. Smelly Worm",
  answer : "a"
}

var questionFour = {
  question : "4. What job does Ross have? ",
  optionOne : "a. Paleontologist",
  optionTwo : "b. Artist",
  optionThree : "c. Photographer",
  optionFour : "d. Insurance salesman",
  answer : "a"

}

var questionFive = {
  question : "5. What is Chandler’s middle name? ",
  optionOne : "a. Muriel",
  optionTwo : "b. Jason",
  optionThree : "c. Kim",
  optionFour : "d. Zachary",
  answer : "a"
}

var questionSix = {
  question : "6. What kind of uniform does Joey wear to Monica and Chandler’s wedding? ",
  optionOne : "a. Chef",
  optionTwo : "b. Soldier",
  optionThree : "c. Fire fighter",
  optionFour : "d. A baseball player",
  answer : "b"
}

var questionSeven = {
  question : "7. What is the name of Phoebe’s alter-ego? ",
  optionOne : "a. Phoebe Neeby",
  optionTwo : "b. Monica Bing",
  optionThree : "c. Regina Phalange",
  optionFour : "d. Elaine Benes",
  answer : "c"
}

var questionEight = {
  question : "8. What's the name of the coffee shop used by the characters? ",
  optionOne : "a. St James' Perk",
  optionTwo : "b. Central Perk",
  optionThree : "c. Froth Of Khan",
  optionFour : "d. Daily Grind",
  answer : "b"
}

var questionNine = {
  question : "9. What is Ross’ first wife’s name? ",
  optionOne : "a. Emily",
  optionTwo : "b. Rachel",
  optionThree : "c. Charlie",
  optionFour : "d. Carol",
  answer : "d"
}

var questionTen = {
  question : "10. What is Phoebe’s twin sister’s name? ",
  optionOne : "a. Leslie buffay",
  optionTwo : "b. Ursula buffay",
  optionThree : "c. Chrissy buffay",
  optionFour : "d. Regina phalange",
  answer : "b"
}

var score=0;
function quiz(quest,op1,op2,op3,op4,ans){
  console.log(chalk.bgRedBright(quest));
  console.log(op1);
  console.log(op2);
  console.log(op3);
  console.log(op4);
  var allAnswers = readlineSync.question();


  if(allAnswers.toLowerCase() === ans){
    console.log(chalk.green("You are right!!"));
    score+=1;
  }
  else{
    console.log(chalk.red("You are wrong!"));
  }

  console.log(chalk.blue("Your current score is: "+score));
}


var allQuestions = [questionOne, questionTwo, questionThree,questionFour, questionFive, questionSix,questionSeven, questionEight, questionNine, questionTen];

for(var i=0;i<allQuestions.length;i++){
  quiz(allQuestions[i].question,allQuestions[i].optionOne, allQuestions[i].optionTwo, allQuestions[i].optionThree, allQuestions[i].optionFour, allQuestions[i].answer);
}
console.log("---------------------------");
console.log(chalk.greenBright("Your final score is: "+score));

var highScores = [
  {name : "Manasa", score : 9,},
  {name : "Adarsh", score : 7 },
  {name : "Ashwini", score : 6,
  }]

for(i=0;i<highScores.length;i++){
if(score>highScores[i].score){
  console.log(chalk.greenBright("Yaay!! you are now one of the highScorers."));
  var userHighScore = {name: name, score: score};
  highScores.splice(i,0,userHighScore);
  highScores.pop();
  break;
}
}

console.log("---------------------------");
console.log(chalk.redBright.bold("Here are the highscores: "));
for(i=0;i<highScores.length;i++){
  console.log(chalk.bgCyanBright.red(highScores[i].name +":::" +highScores[i].score));
}
