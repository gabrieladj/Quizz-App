import { prisma } from "@/server/db/client";


export async function create_quiz(quizName, questions) {
    const newQuiz = await prisma.Quiz.create({ 
      data: {
        quizName: quizName,
      },
    });

    const questionPromises = questions.map((question) =>
      prisma.question.create({
        data: {
          content: question.question,
          correctAnswer: question.answer,
          quizId: newQuiz.id
        }
      })
    );
    await Promise.all(questionPromises);
}


export async function create_question(question) {
    await prisma.Quiz.create({ 
      data: question
    });
}
