import get_quiz from "@/lib/get-quiz";
import Link from "next/link";


export default async function ListQuiz() {
    let quizlist = await get_quiz();
    console.log(quizlist);
  return (
    <div>
      {quizlist.map((quiz) =>
      (
        <div>
          <button><a href={`./quiz/${quiz.id}`}>{quiz.quizName}</a></button>
        </div>  
      )
      )}
    </div>
  )
}

