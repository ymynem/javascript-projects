/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

/*
*   Your 3 CHALLENGES
*   Change the game to follow these rules:
*   1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn.
*   (HINT: Always save the previous dice roll in a separate variable).
*   2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined
*   score of 100. (HINT: you can read that value with the .value property in JavaScript. This is a goof opportunity
*   to use google to figure this out.
*   3. Add another dice to the game, so that there are two dices now. The player looses his current score
*   when one of them is a 1. (HINT: you will need CSS to position the second dice, so take a look at the css code for
*   the first one).
* */
let scores, ackScore, roundScore, gameActive, activePlayer, hold, inactivePlayer;
init();

/*
* When new game is started then reset everything
* */
document.querySelector('.btn-new').addEventListener('click', init);

/*
* When the button toll is clicked change dice img randomly and accumulate the score
* */
document.querySelector('.btn-roll').addEventListener('click', function () {
    if(!gameActive){
        return;
    }
    let dice = Math.floor(Math.random() * 6) + 1;
    if (dice !== 1 && gameActive) {
        ackScore = ackScore + dice;
        document.getElementById('diceImg').style.display = 'block';
        document.getElementById('diceImg').src = 'dice-' + dice + '.png';
        document.getElementById('current-' + activePlayer).textContent = ackScore;
    } else {
        deactivateCurrentPlayer();
        ActivateNextPlayer();
    }
});

/*
* When the button hold is clicked, add the current sum to the player's roundScore
* */
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (!hold) {
        return;
    }
    if(gameActive){
        roundScore += ackScore;
        document.getElementById('score-' + activePlayer).textContent = roundScore;
        if (roundScore >= 20) {
            document.querySelector("#name-" + activePlayer).textContent = "Winner";
            gameOver()
        }
        deactivateCurrentPlayer();
        ActivateNextPlayer()
    }

});

function gameOver() {
    gameActive = false;
}
function deactivateCurrentPlayer() {
    ackScore = 0;
    document.getElementById('current-' + activePlayer).textContent = ackScore.toString();
    document.getElementById('diceImg').style.display = 'none';
    hold = false;
}

function ActivateNextPlayer() {
    setActivePlayer();
    document.getElementById('current-' + activePlayer).textContent = ackScore.toString();
    roundScore = parseFloat(document.getElementById('score-' + activePlayer).innerText);
    hold = true;
}

function setActivePlayer() {
    let current = activePlayer;
    document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
    document.querySelector('.player-' + inactivePlayer + '-panel').classList.toggle('active');
    activePlayer = inactivePlayer;
    inactivePlayer = current;

}

function init() {
    scores = [0, 0];
    roundScore = 0;
    ackScore = 0;
    activePlayer = 0;
    inactivePlayer = 1;
    gameActive = true;

    document.querySelector('.player-' + inactivePlayer + '-panel').classList.remove('active');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
    document.querySelector("#name-" + activePlayer).textContent = "player-1";
    document.querySelector("#name-" + inactivePlayer).textContent = "player-2";

    document.getElementById('current-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('diceImg').style.display = 'none';

    hold = true;
}