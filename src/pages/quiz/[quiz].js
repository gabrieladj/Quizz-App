// pages/index.js
import axios from "axios";
import React, { useState } from 'react';

import Navbar from '../../components/Navigation';
import '../globals.css';
import { withSessionSsr } from "@/lib/session";
import { useRouter } from "next/navigation";

import {quiz_taken} from "../../lib/student-answers"
import {get_answers} from "../../lib/student-answers"
import {get_questions} from "@/lib/quiz"

export default function Quiz(props) {
  const router = useRouter();
  const [answers, setAnswers] = useState({});

  // get prop data
  const quizId = props.quizId;
  const questions = props.questions;
  const submittedAnswers = props.submittedAnswers;
  const disabled = props.disabled;
  const account = {account:props.account};
  const userId = props.account.userId;

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
      studentId: userId,
      quizId: quizId,
      answers: answers,
    }
    const res = await axios.post('/api/submit_quiz', data);
    router.push("/list-quiz")
  };


  return (
    <div>
        <Navbar data={account}/>
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

export const getServerSideProps = withSessionSsr(async function ({ req, res }) {
  // get quiz id from the url
  const qid = req.url.split('/').pop();
  const quizId = parseInt(qid);
  const questions = await get_questions(quizId)

  // verify login data
  if (req.session.user) {
    const username = req.session.user.username;
    const userId = parseInt(req.session.user.userId);
    const disabled = await quiz_taken(userId, quizId)
    const submittedAnswers = await get_answers(userId, quizId)
    return {props: {
      quizId,
      questions,
      submittedAnswers,
      disabled,
      account: {
        loggedIn: true,
        username,
        userId
      },
    }};
  }
  else {
    return {props: {
      quizId,
      questions,
      submittedAnswers: null,
      disabled: true,
      account: {
        loggedIn: false,
        username: "",
        userId: -1
      }
    }};
  }
});