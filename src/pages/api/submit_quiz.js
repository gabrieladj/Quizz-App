
import {submit_answer} from "../../lib/student-answers"


export default async function handler(req, res) {
  const { method } = req

  switch (method) {
    case "POST":
      const body = req.body['answers']
      const quizId = req.body['quizId']
      const studentId = req.body['studentId']

      Object.keys(body).forEach(function(key) {
        //arr.push(body[key]);
        submit_answer({
          questionId: parseInt(key),
          answer: body[key],
          quizId: quizId,
          studentId: studentId,
        });
      });
      
      res.status(200).json({ message: "Returned from quiz submit" })
      
      break
    default:
      res.setHeader("Allow", ["POST"])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}