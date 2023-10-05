import get_quiz from "@/lib/get-quiz";
import './index.css'
export default async function ListQuiz() {
  let quizlist = await get_quiz();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold mb-6">Available Quizzes</h1>
      <div className="space-y-4">
        {quizlist.map((quiz) => (
          <div key={quiz.id} className="text-center">
            <button className="button-card px-8 py-4 text-xl font-semibold rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
              <a href={`./quiz/${quiz.id}`}>{quiz.quizName}</a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
