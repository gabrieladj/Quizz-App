import Image from 'next/image'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '@/components//Navigation';
import HomePage from '@/components/HomePage';
import Footer from '@/components/Footer';
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

