
import {submit_answer} from "../../lib/student-answers"


export default async function handler(req, res) {
  const { method } = req

  switch (method) {
    case "POST":
      console.log("quiz submitted")
      /*const { username, password } = req.body
      
      const post = await prisma.UserStudent.findUnique({
        where: {
          username,
        },
      })
      if(password === post.password){
        console.log('login successful');
      }
      */
      // console.log("Answers: ");
      // console.log(req.body);
      const body = req.body

      Object.keys(body).forEach(function(key) {
        //arr.push(body[key]);
        submit_answer({
          studentId: 1,
          questionId: parseInt(key),
          answer: body[key],
        })
      });
      
      res.status(200).json({ message: "Returned from quiz submit" })
      
      break
    default:
      res.setHeader("Allow", ["POST"])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}