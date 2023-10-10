'use client'
import React from "react";
import { useState } from "react";
import StudentLoginPopup from "@/components/StudentLoginPopup";
import TeacherLoginPopup from "@/components/TeacherLoginPopup";
const HomePage = () =>{
    
    const[studentLoginPopOpen,setStudentLoginPopOpen] =  useState(false);
    const[teacherLoginPopOpen,setTeacherLoginPopOpen] = useState(false);

    const openTeacherLoginPopup = () => {
        
        setTeacherLoginPopOpen(true);
    }
    const closeTeacherLoginPopup = () =>{
        
        setTeacherLoginPopOpen(false);
    }

    const openStudentLoginPopup = () => {
        setStudentLoginPopOpen(true);
    }
    const closeStudentLoginPopup = () =>{
        setStudentLoginPopOpen(false);
    }

    const handlePopup = () => {
        closeStudentLoginPopup();
        closeTeacherLoginPopup();
    }


    
    return (
        <main>
            <div className="m-10 p-10" >
            <h1 className="text-center font-semibold "> Practice the Quiz and get smarter</h1>
            <p className="text-center">Assessment, instruction, and practice that motivates every student</p>
            
            </div>

            <div className="buttons-container flex justify-center">
                <div className="inline-grid gap-2 grid-cols-2">
                   
                    <div>
                        <a href="/list-quiz" ><button className="rounded-lg bg-blue-300 px-6 py-3 text-left">Student<p>Take Quizes</p></button></a>
                    </div>
                    <div>
                        <a href="/teacher-page" ><button className="rounded-lg bg-gray-300 px-6 py-3 text-left">Teacher<p>Create Quizes</p></button></a>    
                    </div>
                </div>
            </div>

            
        </main>
        
    );
}

export default HomePage;
