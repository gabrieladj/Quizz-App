'use client'
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";



function StudentLoginPopup({isOpen,onClose,onSubmit}){
    const  [username,setUsername] = useState("");
    const  [password,setPassword] = useState("");
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/api/signup', { username,password});
            console.log("Login Successful");
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data && error.response.data.message)
                alert(error.response.data.message);
            else
                alert("Unknown error occurred");
        }
    }

    return (
        <div className={`popup ${isOpen?'active':''}`}>
            <div className="popup-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Student Login In</h2>
                {/*content goes here*/}
                <div>
                    <form  onSubmit={handleSubmit}>
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
export default StudentLoginPopup;
