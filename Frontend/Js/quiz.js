let score = 0;

function selectAnswer(value){

  score += value;

}

function showResult(){

  const result = document.getElementById("result");

  if(score >= 2){

    result.innerText =
      "You are Beginner Level";

  }
  else{

    result.innerText =
      "You are Intermediate Level";

  }

}