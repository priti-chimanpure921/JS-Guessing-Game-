let max = parseInt(prompt("Enter any number:"));
//console.log(max);
//console.log(typeof(max));

let random = Math.floor((Math.random() * max )) + 1 ;
//console.log(random);

let guess = prompt(`Guess the number between 1 to ${max} : \n Enter q to quit the game `);

while(guess!='q')
{
        let guess_number = parseInt(guess);
        if(guess_number === random)
        {
            console.log(`Congratulations...Correct Guess... Winner! The random number was ${random}`);
            break;
        }else if(guess<random)
        {
            //console.log("Guess is too small");
            guess = prompt("Please guess a larger number");
        }else 
        {
            //console.log("Guess is too large");
            guess = prompt("Please guess smaller number");
        }
        
}
console.log("Thanks for playing...");
