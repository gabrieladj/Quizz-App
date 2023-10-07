import React, { useState } from 'react';
import axios from 'axios';
import './globals.css';

function QuizForm() {
  const [quizName, setQuizName] = useState('');
  const [questionCount, setQuestionCount] = useState(1);
  const [questions, setQuestions] = useState([{ question: '', answer: true }]);
  const [quizCreated, setQuizCreated] = useState(false); // Flag to track quiz creation

  const handleQuizNameChange = (e) => {
    setQuizName(e.target.value);
  };

  const handleQuestionCountChange = (e) => {
    const count = parseInt(e.target.value);
    setQuestionCount(count);
    // Initialize questions array with the specified number of questions
    const initialQuestions = Array.from({length: count}, () => ({question: '', answer: true}));
    setQuestions(initialQuestions);
  };

  const handleQuestionChange = (e, index) => {
    //console.log(index)
    const updatedQuestions = [...questions];
    //console.log(updatedQuestions)
    updatedQuestions[index].question = e.target.value;
    setQuestions(updatedQuestions);
  };

  
  const handleAnswerChange = (questionIndex, answer) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answer = answer;
    setQuestions(updatedQuestions);
    console.log(questions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: '', answer: false }]);
    setQuestionCount(questionCount + 1);
  };

  const removeQuestion = () => {
    if (questionCount > 1) {
      const updatedQuestions = [...questions];
      updatedQuestions.pop();
      setQuestions(updatedQuestions);
      setQuestionCount(questionCount - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const quizData = {
      quiz_name: quizName,
      quiz_question: questions,
    };

    try {
      const res = await axios.post('/api/create-quiz', quizData);
      console.log(quizData); // You can send this data to the backend for saving
      if (res.status === 200) {
        // Quiz was successfully created
        setQuizCreated(true);
        setQuizName('');
        setQuestionCount(1);
        setQuestions([{ question: '', answer: false }]);
      }
    } catch (error) {
      // Handle errors here if needed
      console.error(error);
    }
  };
  return (
    <div>
    
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-4 text-center">Create Quiz</h1>
          {quizCreated ? (
            <p className="mb-4 text-green-600 text-center">Quiz was successfully created!</p>
          ) : null}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Quiz Name:</label>
              <input
                className="w-full p-2 border rounded-md"
                type="text"
                value={quizName}
                onChange={handleQuizNameChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Number of Questions:</label>
              <input
                className="w-full p-2 border rounded-md"
                type="number"
                value={questionCount}
                onChange={handleQuestionCountChange}
                min="1"
              />
            </div>
            {questions.map((question, index) => (
              <div key={index} className="mb-4">
                <label className="block text-sm font-semibold">Question {index + 1}:</label>
                <input
                  className="w-full p-2 border rounded-md"
                  type="text"
                  value={question.question}
                  onChange={(e) => handleQuestionChange(e, index)}
                  required
                />
                <br />
                <div className="flex items-center space-x-2">
                  <label className="block text-sm font-semibold">True</label>
                  <input
                    className="text-blue-500"
                    type="radio"
                    name={`question-${index}`}
                    value="true"
                    defaultChecked
                    onChange={() => handleAnswerChange(index, true)}
                  />
                  <label className="block text-sm font-semibold">False</label>
                  <input
                    className="text-red-500"
                    type="radio"
                    name={`question-${index}`}
                    value="false"
                    onChange={() => handleAnswerChange(index, false)}
                  />
                </div>
              </div>
            ))}
            <div className="flex space-x-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
                type="button"
                onClick={addQuestion}
              >
                Add Question
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300"
                type="button"
                onClick={removeQuestion}
              >
                Remove Question
              </button>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300"
              type="submit"
            >
              Create Quiz
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default QuizForm;
