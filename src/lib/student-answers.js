import { prisma } from "../server/db/client";
import { get_answer } from "./quiz"

export async function submit_answer(answer) {
    console.log("Answer: ")
    console.log(answer)
    await prisma.Answer.create({ 
      data: answer,
    });
}

// boolean for if the student has already submitted this quiz
export async function quiz_taken(studentId, quizId) {
    let count = await prisma.Answer.count({
        where: {
             studentId: studentId,
             quizId: quizId
         }
    });

    return (count !== 0)
}


export async function get_answers(studentId, quizId) {
    // add quiz id here when finished
    let answers = await prisma.Answer.findMany({
        where: { studentId }
    });
    console.log("Student Answers: ")
    console.log(answers);
    return answers;
}

