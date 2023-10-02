import { prisma } from "@/server/db/client";


export async function create_quiz(quiz) {
    await prisma.Quiz.create({ 
      data: quiz,
      
      
    });
}


export async function create_question(question) {
    await prisma.Quiz.create({ 
      data: question
      
    });
}



