import get_quiz from "@/lib/get-quiz";
import './list-quiz.css'
import { withSessionSsr } from "@/lib/session";
import { userExists } from '@/lib/users';
import Navbar from '@/components/Navigation';
import { useRouter } from "next/navigation";
import axios from "axios";

export default function ListQuiz(props) {
  const account = props.account;
  if (!account.loggedIn) {
    
    return (
      <div>
        <Navbar data={props}/>
        
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-3xl font-semibold mb-6">Please login to take quizes</h1>
        </div>
      </div>
    );
  }
  else {
    return (
      <div>
        <Navbar data={props}/>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-3xl font-semibold mb-6">Available Quizzes</h1>
          <div className="space-y-4">
            {props.quizlist.map((quiz) => (
              <div key={quiz.id} className="text-center">
                <a href={`./quiz/${quiz.id}`}><button className="button-card px-8 py-4 text-xl font-semibold rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">{quiz.quizName}</button></a>
              </div>
            ))}
          </div>
        </div>
      </div>
    ); 
  }
}

export const getServerSideProps = withSessionSsr(async function ({ req, res }) {
  
  // Fetch quiz names from database
  let quizlist = await get_quiz();
  
  // verify login data
  if (req.session.user) {
    const username = req.session.user.username;
    const userId = req.session.user.userId;
    return {props: {
      quizlist,
      account: {
        loggedIn: true,
        username,
        userId
      },
    }};
  }
  else {
    return {props: {
      account: {
        loggedIn: false,
        username: "",
      userId: -1
      }
    }};
  }
});