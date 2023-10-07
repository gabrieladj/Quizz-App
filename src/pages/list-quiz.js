import get_quiz from "@/lib/get-quiz";
import './list-quiz.css'
import { withSessionSsr } from "@/lib/session";

export default function ListQuiz({ quizlist }) {
  
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

export const getServerSideProps = withSessionSsr(async function ({ req, res }) {
  
  if (req.session.user) {
    const user = req.session.user.username;
    const userId = req.session.user.userId;
    console.log("Username: " + user);
    console.log("UserID: " + userId);
  }
  else {
    console.log("user not logged in");
  }

  // Fetch data from external API
  let quizlist = await get_quiz();
 
  // Pass data to the page via props
  return { props: { quizlist } }
});