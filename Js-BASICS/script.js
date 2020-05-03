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



//#CODING CHALLENGE 3


let johnProperty = new Object();
johnProperty.fullName = 'John Smith';
johnProperty.mass = 110;
johnProperty.height = 1.1;
johnProperty.calcJohnBmi = function() {
  return this.johnBmi = this.mass / (this.height * this.height)
}
johnProperty.calcJohnBmi();



let mikeProperty = new Object();
mikeProperty.fullName = 'Mike Pot';
mikeProperty.mass = 110;
mikeProperty.height = 1.3;
mikeProperty.calcMikeBmi = function() {
  return this.mikeBmi = this.mass / (this.height * this.height)
}
mikeProperty.calcMikeBmi();


let compareBmi = function() {
  if (mikeProperty.calcMikeBmi() > johnProperty.calcJohnBmi()) {
    return mikeProperty.fullName + ' has a higher BMI of ' + mikeProperty.calcMikeBmi();
  } else if (johnProperty.calcJohnBmi() > mikeProperty.calcMikeBmi()) {
    return johnProperty.fullName + ' has a higher BMI of ' + johnProperty.calcJohnBmi();
  } else {
    return johnProperty.fullName + ' and ' + mikeProperty.fullName + ' both has equal BMI of ' + johnProperty.calcJohnBmi() + ' and ' + mikeProperty.calcMikeBmi();
  }
}
console.log(compareBmi());
