import { prisma } from "../server/db/client"

export async function submit_answer(answer) {
    await prisma.Answer.create({ 
      data: answer
    });
  }