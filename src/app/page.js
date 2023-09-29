import Image from 'next/image'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navigation';
import HomePage from './HomePage';
import QuizForm from './TeacherPage/TeacherQuiz';


export default function Home(){
  return (
    <div>
     
     <Navbar />
        <HomePage />
        
      
    {/*
    
  
  */}
    
    </div>
  );
}
