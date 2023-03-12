var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your name? ")
console.log("Hi! " + userName);
console.log("This quiz is for 'The Peaky Blinders' fan base");

var ready = readlineSync.question("Do you love this show? (Type Yes/No) ");

if(ready == "Yes"){
  console.log("Great! Let's see how much you score out of 100...");
} else if(ready == "No") {
  console.log("Okay! No problem.")
} else {
  console.log("please either type 'Yes' or 'No'");
  process.abort();
}

console.log("-----------------------");
console.log("Note: While typing the answer pick one option and type its name among A, B or C. Make sure you type the options in capital letters. Thankyou");
console.log("-----------------------");

var score = 0;

var questions = [{
  question: "Who is the protagonist in The Peaky Blinders? (A) Thomas Shelby (B) Arthur Shelby (C) John Shelby ",
  answer: "A"
}, {
  question: "What's the name of the pub where the Peaky Blinders drink? (A) The Black Lion (B) The Garrison (C) The Red Rose ",
  answer: "B"
}, {
  question: "The name of Ada's communist lover? (A) Billy Thorne (B) Freddie Thorne (C) Jimmy Thorne ",
  answer: "B"
}, {
  question: "Which singer provides the iconic 'Red Right Hand' track? (A) Leonard Cohen (B) Tom Waits (C) Nick Cave ",
  answer: "C"
}, {
  question: "Arthur accidently kills a boy in a____  (A) Sparring Session (B) Gun Fight (C) Drunken Fight ",
  answer: "A"
}, {
  question: "Grace wears a cursed ___ when she's killed. (A) Diamond (B) Ruby (C) Sapphire ",
  answer: "C"
}, {
  question: "What's the name of Polly's son? (A) Finn (B) Isiah (C) Michael ",
  answer: "C"
}, {
  question: "Lizzie is the wife of ___  (A) John (B) Thomas (C) Arthur ",
  answer: "B"
}, {
  question: "Who is Greta Jurrosi? (A) Polly's daughter (B) Thomas' ex-lover (C) Michael's Girlfriend ",
  answer: "B"
}, {
  question: "Who said this - 'If you apologise once, you do it again and again and again'  (A) Kimber (B) Alfie (C) Thomas ",
  answer: "C"
}]

for(let i = 0; i < questions.length; i++){
  var listedQuestions = questions[i];
  if(readlineSync.question(listedQuestions.question) == listedQuestions.answer){
    score = score + 10;
  } else {
    score = score;
  }
}
console.log("Your score is: ", score);
if(score == 100){
  console.log("You are a fookin peaky blinder ")
} else if(score < 100 && score >= 80){
  console.log("You should watch it once again ")
} else{
  console.log("Eh!! Don't fook with the peaky blinders ")
}

