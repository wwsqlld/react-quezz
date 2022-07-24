import React, {useState} from 'react';
import './App.css';

function App() {

  const question = [
    {
      questionText: 'Столица США ?',
      answerOptions: [
        {answerText: 'Бостон', isCorrect: false},
        {answerText: 'Вашингтон', isCorrect: true},
        {answerText: 'Нью-Йорк', isCorrect: false},
        {answerText: 'Лос-Анджелес', isCorrect: false},
      ]
    },
    {
      questionText: 'Столица Расеи ?',
      answerOptions: [
        {answerText: 'Харьков', isCorrect: false},
        {answerText: 'Львов', isCorrect: false},
        {answerText: 'Киев', isCorrect: true},
        {answerText: 'Одесса', isCorrect: false},
      ]
    },
    {
      questionText: 'Какая компания разработала React ?',
      answerOptions: [
        {answerText: 'Facebook', isCorrect: true},
        {answerText: 'Meta', isCorrect: false},
        {answerText: 'Apple', isCorrect: false},
        {answerText: 'Сын Miyagi', isCorrect: false},
      ]
    },
    {
      questionText: 'Хто я?',
      answerOptions: [
        {answerText: 'Футбольний м`ячик', isCorrect: false},
        {answerText: 'Президент України', isCorrect: true},
        {answerText: '20 год тюрьми', isCorrect: false},
        {answerText: 'Алло', isCorrect: false},
      ]
    },

  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1

    if (nextQuestion < question.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }

  }
   
  const refresh = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)

  } 


  return (
    <div className='App'>

     
      
     
    
    {
      showScore
        ?  <div className="section__score">
              <div>Правильных ответов {score} из {question.length}</div>
              <button 
              className="refresh__btn"
              onClick={refresh}
              >Попробовать ещё раз...</button>
           </div>
        : <div className='quizz'>
        <div className='question__section'>
          <div className='question__count'>
            <span>Вопрос {currentQuestion + 1} </span> / {question.length}
          </div>
          <div className='question__text'>{question[currentQuestion].questionText}</div>
        </div>
        <div className='answer__section'>
          {question[currentQuestion].answerOptions.map(item => (
          <button
          onClick={() => handleAnswerOptionClick(item.isCorrect)}
          >{item.answerText}</button>
          ) 
          ) }
        </div>
      </div>
    }



      
    </div>  

    
  )

}

export default App