import { prisma } from "@/server/db/client";


export default async function handler(req, res) {
    const { method } = req
  
    switch (method) {
      case "POST":
        const { username, password } = req.body
        
        const post = await prisma.userStudent.create({
          data: {
            username,
            password,
          },
        })
        res.json({message:"Account created successfully"})
        
        res.status(201).json(post)
        break
      default:
        //res.setHeader("Allow", ["POST"])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  }



