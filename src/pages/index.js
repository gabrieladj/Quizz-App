import Image from 'next/image'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '@/components//Navigation';
import HomePage from '@/components/HomePage';
import Footer from '@/components/Footer';
import { withSessionSsr } from "@/lib/session";
import './globals.css';


export default function Home(props){
  console.log(props)
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
      console.log("Logged in as: " + username + " [index.js]");
      const data = {props: {
          loggedIn: true,
          username: username
      }}
      return data;
    }
    else {
      console.log("Not logged in [index.js]");
      const data = {props: {
          loggedIn: false,
          username: ""
      }}
      return data;
    }
});