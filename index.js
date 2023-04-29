var playerStart = Math.floor(Math.random()*2);
var player1Score = 0, player2Score = 0, counter = 0;

// Functions
function newGameBtnDis(){
  document.querySelector('button.newGame').disabled = true;
  document.querySelector('button.newGame').style.backgroundColor = 'gray';
  document.querySelector('button.newGame').style.cursor = 'not-allowed';
}

function newGameBtnEnab(){
  document.querySelector('button.newGame').disabled = false;
  document.querySelector('button.newGame').style.backgroundColor = 'green';
  document.querySelector('button.newGame').style.cursor = 'pointer';
}

function rollBtnDis(){
  document.querySelector('button.roll').disabled = true;
  document.querySelector('button.roll').style.backgroundColor = 'gray';
  document.querySelector('button.roll').style.cursor = 'not-allowed';
}

function rollBtnEnab(){
  document.querySelector('button.roll').disabled = false;
  document.querySelector('button.roll').style.backgroundColor = 'green';
  document.querySelector('button.roll').style.cursor = 'pointer';
}
// End Funtions

newGameBtnDis();

document.querySelector('p.nextPlayer').style.backgroundColor = 'gray';
document.querySelector('p.nextPlayer').style.padding = '10px';

function nextPlayer(){
  document.querySelector('p.nextPlayer').textContent = document.querySelectorAll('h2')[playerStart].innerText;
}

// First time by load page set player
nextPlayer();

function dob(){
  var randomNumber = Math.floor(Math.random()*6)+1;
  var randomDiceImage = "images/dice"+randomNumber+".png";
  // var image = document.querySelector('img');
  document.querySelector('img').setAttribute("src", randomDiceImage);

  const newItem = document.createElement('li');
  // Set the text of the <li> element
  const textNode = document.createTextNode(randomNumber);
  if(counter < 20){
      if(playerStart === 0){
        newItem.appendChild(textNode);
        document.querySelector('ul.history1').appendChild(newItem);
        player1Score += randomNumber;
        document.querySelector('p.score1').innerText = player1Score;
        playerStart = 1;
      }else if(playerStart === 1){
        newItem.appendChild(textNode);
        document.querySelector('ul.history2').appendChild(newItem);
        player2Score += randomNumber;
        document.querySelector('p.score2').innerText = player2Score;
        playerStart = 0;
      }
      nextPlayer();
      counter++;
  }else{
      rollBtnDis();
      newGameBtnEnab();
      if(player1Score > player2Score){
        document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
      }else if(player1Score < player2Score){
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
      }else if(player1Score === player2Score){
        document.querySelector("h1").innerHTML = "Draw!";
      }
  }
}

// *********** If we use -- location.reload() -- then this we don't need this. ************* //
function newGame(){
  rollBtnEnab();
  newGameBtnDis();
  document.querySelector("h1").innerHTML = "Next player";
  counter = 0, player1Score = 0, player2Score = 0;
  document.querySelector('p.score1').innerText = 0;
  document.querySelector('p.score2').innerText = 0;
  const ulTag1 = document.querySelector('ul.history1');
  const ulTag2 = document.querySelector('ul.history2');

  // Remove all li elements
  if (ulTag1.hasChildNodes() && ulTag2.hasChildNodes()) {
    while (ulTag1.firstChild && ulTag2.firstChild) {
      ulTag1.removeChild(ulTag1.firstChild);
      ulTag2.removeChild(ulTag2.firstChild);
    }
  }
}
