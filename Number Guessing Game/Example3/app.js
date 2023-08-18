const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById('submit').onclick = function(){
    let guess = document.getElementById("noGuess").value
    guesses += 1;

    if(guess == answer){
        console.log(`${answer} is the #. It took you ${guesses} guesses`);
    }
    else if(guess < answer){
        console.log('Too SMALL!')
    }
    else{
        console.log('Too BIG!')
    }
}
