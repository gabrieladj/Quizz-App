import { prisma } from "../../server/db/client"



export default async function handler(req, res) {
  const { method } = req

  switch (method) {
    case "POST":
      const { username, password } = req.body
      
      const post = await prisma.UserStudent.findUnique({
        where: {
          username,
        },
      })
      if(password === post.password){
        console.log('login successful');
      }
      res.status(201).json(post)
      break
    default:
      res.setHeader("Allow", ["POST"])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}