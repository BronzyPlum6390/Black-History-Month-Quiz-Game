/** 

Potential Questions:





Which African American scientist is known for her research on peanuts, sweet potatoes, and other crops that helped improve agriculture in the Southern United States?
a) George Washington Carver
b) Mae Jemison
c) Katherine Johnson
d) Neil deGrasse Tyson
Answer: a) George Washington Carver

Which African American writer is known for his novel "Invisible Man"?
a) James Baldwin
b) Langston Hughes
c) Ralph Ellison
d) Toni Morrison
Answer: c) Ralph Ellison

Which African American athlete is known for his record-breaking performance in the 1936 Olympic Games in Berlin, Germany?
a) Muhammad Ali
b) Jesse Owens
c) Jackie Robinson
d) Wilma Rudolph
Answer: b) Jesse Owens

Which African American woman is known for her activism in the Civil Rights Movement, and for organizing the March on Washington in 1963?
a) Fannie Lou Hamer
b) Ella Baker
c) Coretta Scott King
d) Dorothy Height
Answer: c) Coretta Scott King

Which African American musician is known as the "King of Jazz"?
a) Louis Armstrong
b) Duke Ellington
c) Count Basie
d) Nat King Cole
Answer: b) Duke Ellington







*/



// var score = 0;

// for(var i = 0; i < questions.length; i++){
//   var response = window.prompt(questions[i].prompt);
//   if(response == questions[i].answer){
//     score++;
//     alert("Correct");
//   }else{
//     alert("WRONG!!");
//   }
// }
// alert("you got " + score + "/" + questions.length);

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click',startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
})

function startGame(){
  console.log('started')
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(()=> Math.random()-.5)
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion
}

function setNextQuestion(){
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestions(question){
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text;
    button.classList.add('btn')
    if(answer.correct){
      button.datatset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState(){
  nextButton.classList.add('hide');
  while(answerButtonsElement.firstChild){
    answerButtonsElemet.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e){
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if(shuffledQuestions.length > currentQuestionsIndex + 1) {
    nextButton.classList.remove('hide')
  }
  else{
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct){
  clearStatusClass(element);
  if(correct){
    element.classList.add('correct')
  }else{
    element.classList.add('wrong')
  }
}

function clearStatusClass(element){
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

//List of Questions and Answers
const questions =[
  {
    question: "When is Black History Month celebrated in the United States? \n (a)January \nb) February \nc) March \nd) April",
    
    answers: [{text: 'a)January \n', correct: false},
              {text: 'b) February', correct: true},
              {text: 'c) March \n', correct: false},
              {text: 'd) April' correct: false},
  },
  {
    question: "Who is the founder of Black History Month?",

    answer:[{ text: 'a) Martin Luther King Jr.',correct: false},
            {text: 'b) Rosa Parks', correct: false},
            {text: 'c) Carter G. Woodson', correct: true},
            {text: 'd) Malcolm X', correct: false},
           ] 
  },
  {
    question: "Which U.S. president officially recognized Black History Month?",

    answer: [{text: ' a) George H.W. Bush', correct: false},
             {text: 'b) Bill Clinton', correct: false},
             {text: 'c) Barack Obama', correct: false},
             {text: 'd) Ronald Reagan', correct: true},]
  }, 

  {
    question: "What is the main purpose of Black History Month?",

    answer: [{text: 'a) To celebrate the achievements of all Americans', correct: false },
             {text: 'b) To honor the contributions of African Americans to American history and culture', correct: true},
             {text: 'c) To highlight the struggles and injustices faced by African Americans', correct: false},
             {text: 'd) To promote racial segregation', correct: false},]
  },

  {
    prompt: "Which of the following African American activists is known for her refusal to give up her seat on a Montgomery, Alabama bus in 1955?",

    answer: [{text: 'a) Martin Luther King Jr.', correct: false},
             {text: 'b) Malcolm X', correct: false},
             {text: 'c) Rosa Parks', correct: true},
             {text: 'd) Angela Davis',  correct: false},],
  }, 
  
];