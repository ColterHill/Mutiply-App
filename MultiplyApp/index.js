const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const scoreEl = document.getElementById("score")
const answerEl = document.getElementById("answer")
const formEl = document.getElementById("form");
const questionEl = document.getElementById("question");
questionEl.innerText = `What is ${num1} multiplied by ${num2}?`

const correctAnswer = num1 * num2;

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
  score = 0;
}

scoreEl.innerText = `Score: ${score}`;

formEl.addEventListener("submit", ()=>{
  const userAnswer = +answerEl.value;
  if(userAnswer === correctAnswer) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }


function updateLocalStorage(){
  localStorage.setItem("score", JSON.stringify(score));
}
})
