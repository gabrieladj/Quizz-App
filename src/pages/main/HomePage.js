'use client'
import React from "react";
import { useState } from "react";
import Popup from "../components/Popup";
import TeacherPopup from "../components/TeacherPopup";
const HomePage = () =>{
    
    const[popOpen,setpopOpen] =  useState(false);
    const[openPop,setopenPop] = useState(false);

    const openTeacherPopup = () => {
        
        setopenPop(true);
    }
    const closeTeacherPopup = () =>{
        
        setopenPop(false);
    }

    const openPopup = () => {
        setpopOpen(true);
        setopenPop(true);
    }
    const closePopup = () =>{
        setpopOpen(false);
        setopenPop(false);
    }

    const handlePopup = () => {
        closePopup();
        closeTeacherPopup();
    }


    
    return (
        <main>
            <div className="m-10 p-10" >
            <h1 className="text-center font-semibold "> Practise the Quizz and get smarter</h1>
            <p className="text-center">Assessment, instruction, and practise htat motivate every student</p>
            
            </div>


            <div className="buttons-container flex justify-center">
                <div className="inline-grid gap-2 grid-cols-2">
                    <div>
                        <button href="/" onClick={openTeacherPopup} className="rounded-lg bg-blue-300 px-6 py-3 text-left">Teacher<p>Sign Up for free</p></button>
                        <TeacherPopup isOpen={openPop} onClose={closeTeacherPopup} onSubmit={handlePopup}/>
                    </div>
                    <div>
                        <button href="/" onClick={openPopup} className="rounded-lg bg-gray-300 px-6 py-3 text-left">Student<p>Login as student</p></button>
                        
                        <Popup isOpen={popOpen} onClose={closePopup} onSubmit={handlePopup}/>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default HomePage;
