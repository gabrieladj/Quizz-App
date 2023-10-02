import Image from 'next/image'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './main/Navigation';
import HomePage from './main/HomePage';
import QuizForm from '@/app/TeacherPage/page';


export default function Home(){
  return (
    <div>
     
     <QuizForm />
        
      
    
    </div>
  );
}
