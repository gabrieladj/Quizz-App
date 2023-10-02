// pages/index.js
import { prisma } from "../../server/db/client";
import axios from "axios";
import React, { useState } from 'react';

import Navbar from '../main/Navigation';
import '../globals.css';
import Link from 'next/link';
import { useRouter } from 'next/router'

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
        <Navbar />
        <form onSubmit={handleSubmit}>
        {questions.map((question) => (
        <div key={question.id}>
            <p>{question.content}</p>
            <label>
            True
            <input
                type="radio"
                name={`question-${question.id}`}
                value="true"
                disabled={disabled}
                onChange={() => handleAnswerChange(question.id, true)}
            />
            </label>
            <label>
            False
            <input
                type="radio"
                name={`question-${question.id}`}
                value="false"
                disabled={disabled}
                onChange={() => handleAnswerChange(question.id, false)}
            /> 
            </label>
            <br /><br />
        </div>
        ))}
            <button className='bg-blue-500 rounded-lg text-
            \white hover:underline hover:rounded-lg  hover:bg-gray-500 p-2'
            type="submit" disabled={disabled}>Submit Answers</button>
            
    </form>
  </div>
  )
}

export async function getServerSideProps(context) {
  // get the dynamic route variable for quiz id
  const quizId = parseInt(context.params.quiz)
  const questions = await get_questions(1)
  
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