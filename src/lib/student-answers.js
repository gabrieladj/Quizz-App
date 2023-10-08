import { prisma } from "../server/db/client";
import { get_quizes, get_answer, count_questions } from "./quiz"

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
    let answers = await prisma.Answer.findMany({
        where: {
            studentId,
            quizId 
        }
    });
    return answers;
}

export async function get_scores(studentId) {
    // get the user and include their answers
    const user = await prisma.userStudent.findUnique({
        where: {
            id: studentId
        },
        include: {
            answer: {
                include: {
                    quiz: true,
                    question: true
                }
            }
        }
    });

    let userScores = {};
    if (user) {
        for (const answer of user.answer) {
            const quizId = answer.quizId
            // if theres no index for this quiz yet, create it
            if (!userScores[quizId]) {
                
                let numQuestions = await count_questions(quizId);
                userScores[quizId] = {score: 0, numQuestions: numQuestions};
            }
            // if they got it right, increase score for this quiz
            if (answer.answer === answer.question.correctAnswer)
                userScores[quizId].score++;
        };
    }

    //console.log(userScores);
    return userScores;
}
