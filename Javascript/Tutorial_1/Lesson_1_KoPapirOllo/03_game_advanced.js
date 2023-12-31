    // const score = {
    //   wins: 0,
    //   losses: 0,
    //   ties: 0
    // };

    let score = JSON.parse(localStorage.getItem('score')) 
    || {
        wins: 0,
        losses: 0,
        ties: 0
      };

    updateScoreElement(); //write out the scores in <p>

    // if(!score){  // score === null
    //   score = {
    //     wins: 0,
    //     losses: 0,
    //     ties: 0
    //   }
    // }

    function updateScoreElement(){
      document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`;
    }
   
    function pickComputerMove() {

      const randomNumber = Math.random();
      let computerMove = '';
         
          if(randomNumber > 0 && randomNumber < 1/3){
            computerMove = 'rock';
          } else if( randomNumber >= 1/3 && randomNumber < 2/3){
            computerMove = 'paper';
          } else if (randomNumber > 2/3 && randomNumber < 1){
            computerMove = 'scissors';
          }

          return computerMove;
    }

    // You will do automatically too

    let isAutoPlaying = false;
    let intervalId;

    function autoPlay(){
      if(!isAutoPlaying){  //isAutoPlaying = false
        intervalId = setInterval(() => {
          const playerMove = pickComputerMove();
          playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
      } else{       //isAutoPlaying = true
        clearInterval(intervalId);
        isAutoPlaying = false;
      }
    }

    // With EventListener: 
    document.querySelector('.js-rock-button').addEventListener('click', () => {
      playGame('rock');
    } );


    // Game with addEventListener
    // document.body.addEventListener('keydown', (event)  => {
    //   //console.log(event.key);  // Event keeps the key we pressed. 
    //   if(event.key === 'r') {
    //     playGame('rock');
    //   } else if (event.key === 'p'){
    //     playGame('paper');
    //   } else if(event.key === 's'){
    //     playGame('scissors');
    //   }
    // });

    function playGame(playerMove){
      const computerMove = pickComputerMove(); //Returned value from the function 
      let result = '';

      if(playerMove === 'rock'){
        if (computerMove === 'rock'){
          result = 'Tie.';
        } else if (computerMove === 'paper'){
          result = 'You lose.';
        } else if (computerMove === 'scissors'){
          result = 'You win.';
        }

      }
      else if(playerMove === 'paper'){
        if (computerMove === 'rock'){
          result = 'You win.';
        } else if (computerMove === 'paper'){
          result = 'Tie.';
        } else if (computerMove === 'scissors'){
          result = 'You lose.';
        }
      }
      
      else if(playerMove === 'scissors'){
        if (computerMove === 'rock'){
          result = 'You lose.';
        } else if (computerMove === 'paper'){
          result = 'You win.';
        } else if (computerMove === 'scissors'){
          result = 'Tie.';
        }
      }

      if(result === 'You win.'){
        score.wins += 1;
      } else if(result === 'You lose.'){
        score.losses += 1;
      }else if(result === 'Tie.'){
        score.ties += 1;
      }

      localStorage.setItem('score',JSON.stringify(score));

      updateScoreElement();

      document.querySelector('.js-result').innerHTML = result;
      document.querySelector('.js-moves').innerHTML = `You <img class="move-icon" src="../images/${playerMove}-emoji.png">Computer <img class="move-icon" src="../images/${computerMove}-emoji.png">`;

//       alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties} .`);
    }