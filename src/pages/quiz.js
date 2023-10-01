// pages/index.js
import { prisma } from "../server/db/client";
import axios from "axios";
import React, { useState } from 'react';

import Navbar from './main/Navigation';
import './globals.css';
import Link from 'next/link';

import {quiz_taken} from "../lib/student-answers"
import {get_answers} from "../lib/student-answers"

export default function Quiz({questions, submittedAnswers, disabled}) {
  const [answers, setAnswers] = useState({});

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
    
    const res = await axios.post('/api/submit_quiz', answers);
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
                value="true"
                disabled="${disabled}"
                onChange={() => handleAnswerChange(question.id, true)}
            />
            </label>
            <label>
            False
            <input
                type="radio"
                name={`question-${question.id}`}
                value="false"
                disabled="${disabled}"
                onChange={() => handleAnswerChange(question.id, false)}
            />
            </label>
            
        </div>
        ))}
            <button className='bg-blue-500 rounded-lg text-
            \white hover:underline hover:rounded-lg  hover:bg-gray-500 p-2'
            type="submit" disabled="${disabled}">Submit Answers</button>
            
    </form>
  </div>
  )
}

export async function getServerSideProps() {
  const questions = await prisma.question.findMany()
  const disabled = await quiz_taken(1) // will be changed to students id
  const submittedAnswers = await get_answers(1, 0) // will be changed to quiz id


  return {
    props: {
        questions,
        submittedAnswers,
        disabled: disabled,
    }
  }
}