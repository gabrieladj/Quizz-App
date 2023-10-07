// pages/index.js
import axios from "axios";
import React, { useState } from 'react';

import Navbar from '../../components/Navigation';
import '../globals.css';

import {quiz_taken} from "../../lib/student-answers"
import {get_answers} from "../../lib/student-answers"
import {get_questions} from "@/lib/quiz"

export default function Quiz({quizId, questions, submittedAnswers, disabled}) {
  const [answers, setAnswers] = useState({});

  

  console.log("Disabled: ")
  console.log(disabled);

  const handleAnswerChange = (questionId, answer) => {
    // Update the answers object with the selected answer
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // process the answers 
    const data = {
      quizId: quizId,
      answers: answers,
    }
    const res = await axios.post('/api/submit_quiz', data);
    console.log(res.data);
  };


  return (
    <div>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4">
        {questions.map((question) => (
        <div key={question.id} className="mb-4">
            <p className="text-lg font-semibold">{question.content}</p>
            <label className="space-x-4 inline-flex items-center">
            True
            <input
                type="radio"
                name={`question-${question.id}`}
                value="true"
                disabled={disabled}
                onChange={() => handleAnswerChange(question.id, true)} className="form-radio text-blue-500"
            />
            </label>
            <label className="space-x-4 inline-flex items-center">
            False
            <input
                type="radio"
                name={`question-${question.id}`}
                value="false"
                disabled={disabled}
                onChange={() => handleAnswerChange(question.id, false) } className="form-radio text-blue-500"
            /> 
            </label>
            <br /><br />
        </div>
        ))}
            <button className='bg-blue-500 text-white hover:bg-gray-500 rounded-lg py-2 px-4'
            type="submit" disabled={disabled}>Submit Answers</button>
            
    </form>
  </div>
  )
}

export async function getServerSideProps(context) {
  // get the dynamic route variable for quiz id
  const quizId = parseInt(context.params.quiz)
  const questions = await get_questions(quizId)
  
  const disabled = await quiz_taken(1, quizId) // will be changed to students id
  
  const submittedAnswers = await get_answers(1, quizId) // will be changed to quiz id
  /*
  Object.keys(submittedAnswers).forEach(function(key) {
    if (submittedAnswers[key] == 
  });
  */
  
  return {
    props: {
        quizId,
        questions,
        submittedAnswers,
        disabled,
        
    }
  }
}