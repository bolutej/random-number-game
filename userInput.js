const prompt = require('prompt-sync')({ sigint: true});

const generateRandom = (start, end) => {
    let random = Math.floor(Math.random() * 2 + 1);
    return random;
  };

const guessGame = () => {
  let tries = 3;
  let start = 1;
  let end = 2;
  let points = 0;
  let name = prompt("Enter your Username : ");

  let guess;
  let rand;

  while(tries !== 0) {
    guess = prompt(`Guess a number between  ${start} and ${end}: `);
  
    if(isNaN(guess)) {
      console.log('Your guess is not a  number')
    } else {

      rand = generateRandom(start, end);

      if (rand === Number(guess)) {
        points += 1;
        console.log(`SCORE: ${points}`)
        end += 1;
        tries = 3
      } else {
        tries -= 1
        console.log(`Wrong. You have ${tries} tries`)
      }
    }
 
  }
  console.log('Game Over !!!')

};


guessGame();