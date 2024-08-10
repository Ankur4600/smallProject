  let score={
    win:0,
    lost:0,
    tie:0,
    displayScore: function() {
     return ` No. of matches Won:${score.win}, 
        No. of matches Lost:${score.lost}, 
        No. of matchesTie: ${score.tie}`;
      }
  };
  function generateChoice(){
    let randomNumber=Math.random()*3;
    let computerChoise;  
    if(randomNumber>0 && randomNumber<=1){
        return'bat';
    }
    else if(randomNumber>1 && randomNumber<=2){
        return'ball';
    }
    else if( randomNumber>2 && randomNumber<=3){
        return'stump';
    }
}
function getResult(userMove,computerMove){
    if(userMove==='bat'){
       if(computerMove==='bat'){
        score.tie++;
        return`it's a tie`;
       }else if(computerMove==='ball'){
        score.win++;
        return'you won';
       }else if( computerMove==='stump'){
        score.lost++;
        return'computer won';
       }
    }else if(userMove==='ball'){
        if(computerMove==='bat'){
            score.lost++;
            return `computer won`;
        }else if(computerMove==='ball'){
            score.tie++;
            return `it's a tie`;
        }else if( computerMove==='stump'){
            score.win++;
            return 'you won';
        }
    
    }else if(userMove=='stump'){
        if(computerMove==='bat'){
            score.win++;
            result=`you won`;
        }else if(computerMove==='ball'){
            score.lost++;
            result='computer won';
        }else if(computerMove==='stump'){
            score.tie++;
            result=`it's a tie`;
        }
    }   
}
function showResult(computerMove,userMove,result){
    alert(`computer choice is ${computerMove}. your choice is ${userMove} 
    
    ${result}
    ${score.displayScore()}`);
}
// function ball(){
//     let randomNumber=Math.random()*3;
//     let computerChoise;  
//     if(randomNumber>0 && randomNumber<=1){
//         computerChoise='bat';
//     }
//     else if(randomNumber>1 && randomNumber<=2){
//         computerChoise='ball';
//     }
//     else if( randomNumber>2 && randomNumber<=3){
//         computerChoise='stump';
//     }
    
//     let result;
//     if(computerChoise==='bat'){
//         result=`computer won`;
//     }
//     else if(computerChoise==='ball'){
//         result=`it's a tie`;
//     }
//     else if( computerChoise==='stump'){
//         result='computer won';
//     }

//     alert(`computer choice is ${computerChoise}. your choice is ball and ${result}`);
// }

// function stump(){ 
//     let randomNumber=Math.random()*3;
//     let computerChoise;  
//     if(randomNumber>0 && randomNumber<=1){
//         computerChoise='bat';
//     }
//     else if(randomNumber>1 && randomNumber<=2){
//         computerChoise='ball';
//     }
//     else if( randomNumber>2 && randomNumber<=3){
//         computerChoise='stump';
//     }
//     let result;
//     if(computerChoise==='bat'){
//         result=`you won`;
//     }
//     else if(computerChoise==='ball'){
//         result='you won';
//     }
//     else if( computerChoise==='stump'){
//         result=`it's a tie`;
//     }

//     alert(`computer choice is ${computerChoise}. your choice is stump and ${result}`);
// }