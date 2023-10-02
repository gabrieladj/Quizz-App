import { prisma } from "../server/db/client";
import { get_answer } from "./quiz"

export async function submit_answer(answer) {
    await prisma.Answer.create({ 
      data: answer
    });
}

// boolean for if the student has already submitted this quiz
export async function quiz_taken(studentId) {
    let answers = await prisma.Answer.findMany({
        where: { studentId }
    });
    return (answers !== null);
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

