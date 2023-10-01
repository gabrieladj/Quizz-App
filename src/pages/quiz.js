// pages/index.js
import { prisma } from "../server/db/client"
import axios from "axios";
import React, { useState } from 'react';

import Navbar from './main/Navigation';
import './globals.css'
import Link from 'next/link';

export default function Quiz({questions}) {
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
    // Validate and process the answers here
    /*
    fetch("/submit_quiz", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${e.target.name.value}`
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log('Answers submitted:', answers);
    */
    
    const res = await axios.post('/api/submit_quiz', answers)
    console.log(res.data)
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
                onChange={() => handleAnswerChange(question.id, true)}
            />
            </label>
            <label>
            False
            <input
                type="radio"
                name={`question-${question.id}`}
                value="false"
                onChange={() => handleAnswerChange(question.id, false)}
            />
            </label>
        </div>
        ))}
            <button className='bg-blue-500 rounded-lg text-
            \white hover:underline hover:rounded-lg  hover:bg-gray-500 p-2' type="submit">Submit Answers</button>
            
    </form>
  </div>
  )
}

export async function getServerSideProps() {
  const questions = await prisma.question.findMany()

  return {
    props: {
        questions
    }
  }
}