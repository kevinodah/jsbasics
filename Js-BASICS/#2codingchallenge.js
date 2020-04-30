var averageScoreJohnTeam = (89 + 120 + 103) / 3; 
var averageScoreMikeTeam = (116 + 94 + 123) / 3;
var averageScoreMaryTeam = (97 + 134 + 105) / 3;
console.log(averageScoreJohnTeam, averageScoreMikeTeam); // All average score

// FIRST PART

if(averageScoreJohnTeam > averageScoreMikeTeam )
  console.log('John\'s TEAM wins');

 else if (averageScoreMikeTeam > averageScoreJohnTeam)
  console.log('Mike\'s TEAM wins');

  else 
  console.log('The GAME was a draw');




// SECOND PART

console.log(averageScoreJohnTeam, averageScoreMikeTeam, averageScoreMaryTeam); // All average score
if(averageScoreJohnTeam > averageScoreMikeTeam && averageScoreJohnTeam > averageScoreMaryTeam) 
  console.log('John\'s TEAM wins');

 else if (averageScoreMikeTeam > averageScoreJohnTeam && averageScoreMikeTeam > averageScoreMaryTeam)
  console.log('Mike\'s TEAM wins');

 else if (averageScoreMaryTeam > averageScoreMikeTeam && averageScoreMaryTeam > averageScoreJohnTeam) 
  console.log('Mary\'s TEAM wins ');

  else 
  console.log('The GAME was a draw');
