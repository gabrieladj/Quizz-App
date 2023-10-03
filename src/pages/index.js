import Image from 'next/image'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './main/Navigation';
import HomePage from './main/HomePage';
import QuizForm from './teacher-page';
import ListQuiz from '../app/list-quiz/page';
import Footer from './main/Footer';
import './globals.css';


export default function Home(){
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>


  );
}

