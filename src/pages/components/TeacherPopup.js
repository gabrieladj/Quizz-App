'use client'
import React, { useState } from "react";
import { useRouter } from "next/router";
import Jokes from "../../app/quiz/page";

function TeacherPopup({isOpen,onClose,onSubmit}){
    const  [username,setUsername] = useState("");
    const  [password,setPassword] = useState("");
    //const router = useRouter();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });
    
          if (response.status === 200) {
            
            console.log('Login Success');
            // Redirect to dashboard or home page upon successful login
            // You can use router.push('/dashboard') from 'next/router'
            <Jokes />
          } else {
            
            console.error('Login failed');
          }
        } catch (error) {
          console.error('Network or server error:', error);
        }
      };
    return (
        <div className={`popup ${isOpen?'active':''}`}>
            <div className="popup-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Student Login In</h2>
                {/*content goes here*/}
                <div>
                    <form onSubmit={handleSubmit}>
                       <div>
                            <label>Username:</label>
                            <input 
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />    
                       </div>
                       <div>
                            <label>Password:</label>
                            <input 
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />    
                       </div>
                       <button type="submit">Login</button>        
                    </form>
                    
                </div>
                
            </div>

        </div>
    );
}
export default TeacherPopup;