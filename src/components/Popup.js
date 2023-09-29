'use client'
import React, { useState } from "react";
import { useRouter } from "next/router";
import Jokes from "../app/quiz_/page";
import axios from "axios";



function Popup({isOpen,onClose,onSubmit}){
    const  [username,setUsername] = useState("");
    const  [password,setPassword] = useState("");
    const router = useRouter()

    //const router = useRouter();
    
    const handleSubmit = async (e) => {
      e.preventDefault()
      const res = await axios.post('/api/login', { username,password})
      console.log(res.data)
      router.push('/quiz')
      
        if(res.status === 200){
          router.push('/quiz')
        } 
    }
    
    return (
        <div className={`popup ${isOpen?'active':''}`}>
            <div className="popup-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Student Login In</h2>
                {/*content goes here*/}
                <div>
                    <form  onClick={handleSubmit}>
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
export default Popup;
