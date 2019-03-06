
var score = 0;
 
var TravelQuestion = [
    {
    prompt: "What European country does Aruba maintain the strongest ties to?\n(a) The Netherlands\n(b) Switzerland\n(3) Japan\n(4) Argentina\n(5) The Midway Islands",
    answer: "a"
}, {
    question: "What European country uses its Latin name, Helvetia, on its stamps?",
    choices: ["The Netherlands", "Switzerland", "Japan", "Argentina", "The Midway Islands"],
    validAnswer: 1
}, {
    question: "What country is almost twice as large as either the U.S. or China?",
    choices: ["The Netherlands", "Switzerland", "Japan", "Russia", "The Midway Islands"],
    validAnswer: 3
}, {
    question: "What continent boasts the most telephone lines?",
    choices: ["The Netherlands", "Switzerland", "Japan", "Europe", "The Midway Islands"],
    validAnswer: 3
}, {
    question: "What regional accent did Americans deem sexiest, most liked and most recognizable?",
    choices: ["Western", "Eastern", "Southern", "Russia", "Hawaiian"],
    validAnswer: 2
}];

for (var i = 0; i < questions.length; i++) {
var response = window.prompt(questions[1].prompt);    
if (response == questions[i].answer {
      win++;
      alert("correct");
    }
    else {
        lose++;
        alert("Try Again");
    }
    alert("you got " + score + "/" + questions.length);
}
