  function random1(){
    let randomNumber=Math.random()*3;
    let computerChoise;  
    if(randomNumber>0 && randomNumber<=1){
        computerChoise='bat';
    }
    else if(randomNumber>1 && randomNumber<=2){
        computerChoise='ball';
    }
    else if( randomNumber>2 && randomNumber<=3){
        computerChoise='stump';
    }
}
function bat(){
    let computerChoise1=random1();
    let result;
    if(computerChoise1==='bat'){
        result=`it's a tie`;
    }
    else if(computerChoise1==='ball'){
        result='you won';
    }
    else if( computerChoise1==='stump'){
        result='computer won';
    }

    alert(`computer choice is ${computerChoise1}. your choice is bat and ${result}`);
}
function ball(){
    let computerChoise1=random1();
    let result;
    if(computerChoise1==='bat'){
        result=`computer won`;
    }
    else if(computerChoise1==='ball'){
        result=`it's a tie`;
    }
    else if( computerChoise1==='stump'){
        result='computer won';
    }

    alert(`computer choice is ${computerChoise1}. your choice is ball and ${result}`);
}

function stump(){
    let computerChoise1=random1();
    let result;
    if(computerChoise1==='bat'){
        result=`you won`;
    }
    else if(computerChoise1==='ball'){
        result='you won';
    }
    else if( computerChoise1==='stump'){
        result=`it's a tie`;
    }

    alert(`computer choice is ${computerChoise1}. your choice is stump and ${result}`);
}