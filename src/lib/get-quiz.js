import { prisma } from "../server/db/client";

export default async function get_quiz(){
    let quiz = await prisma.quiz.findMany(
        {
            select: {
                id : true,
                quizName : true,

            }
        }
    );
    return quiz;

} 