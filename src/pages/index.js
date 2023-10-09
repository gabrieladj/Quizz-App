import Image from 'next/image'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '@/components/Navigation';
import HomePage from '@/components/HomePage';
import Footer from '@/components/Footer';
import { withSessionSsr } from "@/lib/session";
import { userExists } from '@/lib/users';
import './globals.css';


export default function Home(props){
  console.log("HomePage props: ")
  console.log(props);
  return (
    <div>
      <Navbar data={props}/>
      <HomePage />
      <Footer />
    </div>

  );
}

export const getServerSideProps = withSessionSsr(async function ({ req, res }) {
  if (req.session.user) {
    const username = req.session.user.username;
    const userId = req.session.user.userId;
    const data = {props: {
        account: {
          loggedIn: true,
          username: username,
          userId: userId
        } }
    }
    return data;
  }
  else {
    const data = {props: {
      account: {
        loggedIn: false,
        username: "",
        userId: -1
      } }
    }
    return data;
  }
});