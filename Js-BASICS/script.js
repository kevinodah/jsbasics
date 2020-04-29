var johnHeight = 1.2;
var johnMass = 70;

var markHeight = 1.8;
var markMass = 80;

var johnBmi = johnMass / (johnHeight * johnHeight);
console.log(johnBmi);

var markBmi = markMass / (markHeight * markHeight);
console.log(markBmi);

var bmiComparison = markBmi >= johnBmi;

console.log('Is Mark\'s BMI higher than John\'s BMI? ' + bmiComparison);

alert('Mark BMI is: ' + markBmi);
var bmiCompPrompt = prompt('What is Mark\'s BMI?');
console.log('Mark\'s Bmi: ' + bmiCompPrompt);