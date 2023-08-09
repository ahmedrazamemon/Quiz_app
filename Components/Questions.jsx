import React, { useState } from 'react';
import './App.css';

const questions = [
{    question: "Which HTML tag is used for creating a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<hyperlink>"],
    correctAnswer: "<a>"
  },
  {
    question: "Which CSS property is used to change the text color of an element?",
    options: ["text-color", "color", "text-style", "font-color"],
    correctAnswer: "color"
  },
  {
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"],
    correctAnswer: "Cascading Style Sheets"
  },
  {
    question: "Which JavaScript function is used to change the content of an HTML element?",
    options: ["changeContent()", "modify()", "innerHTML()", "setText()"],
    correctAnswer: "innerHTML()"
  },
  {
    question: "Which HTML tag is used to include external JavaScript files?",
    options: ["<js>", "<script>", "<javascript>", "<link>"],
    correctAnswer: "<script>"
  },
  {
    question: "In CSS, which property is used to control the spacing between elements?",
    options: ["margin", "padding", "spacing", "border"],
    correctAnswer: "margin"
  },
  {
    question: "What is the correct syntax for a JavaScript 'for' loop?",
    options: ["for (i <= 5; i++)", "for (i = 0; i <= 5)", "for (i = 0; i <= 5; i++)", "for i = 1 to 5"],
    correctAnswer: "for (i = 0; i <= 5; i++)"
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ul>", "<list>", "<ol>", "<unordered>"],
    correctAnswer: "<ul>"
  }
  // Add more questions here
];

function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    
  };

  return (
    <div className="App">
      {showScore ? (
        <div className="score-board">
         <h2 >
         {
            
         }
           {questions.length<3 ? <><h2 style={{color:"red"}}> You loss ! <br /> The Score is  {score}</h2>  </> : <><h2 style={{color:"green"}}>  Congaratulations.. <br />  Your score is {score} </h2></>} 
            </h2>
        </div>
      ) : (
        <div className='main'>
          <div className="quiz-container">
            <div className="question">
              Question {currentQuestion + 1}/{questions.length}
            </div>
            <h1 className="options">
              {questions[currentQuestion].question}
            </h1>
          <h3 className="option">
            {questions[currentQuestion].options.map((option, index) => (
                <button
                className='opbtn'
                key={index}
                onClick={() => handleAnswerClick(option)}
                >
                {option}
              </button>
            ))}
          </h3>
            </div>
        </div>
      )}
    </div>
  );
}

export default Questions;
