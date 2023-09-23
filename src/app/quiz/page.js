// app/jokes/page.js

import Link from 'next/link';

import { list_questions } from '../lib/quiz';

export default async function Jokes() {
  let questions = await list_questions();

  let question_rows = questions.map((question) => (
    <tr key={question.id}>
      <td>{question.content}</td>
    </tr>
  ));

  return (
    <main className="text-center min-h-screen">
      <h1 className="text-2xl py-8">Take the Quiz</h1>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <table className="table table-striped">
        <tbody>
          {questions && questions.length>0 && questions.map(question => (
            <tr key={question.id}>
              <td>{question.content}</td>
              <td>
                <input type="radio" id={"answer_q" + question.id + "_true"} name={"answer_q" + question.id} checked="checked" />True
              </td>
              <td>
                <input type="radio" id={"answer_q" + question.id + "_true"}  name={"answer_q" + question.id} />False
              </td>
            </tr>
        ))}
        </tbody>
      </table>

      <div className="my-2">
          <button className="bg-blue-600 text-white py-2 px-4 rounded"
                  type="Submit">
            Submit Quiz
          </button>
        </div>
    </main>
  );
}
