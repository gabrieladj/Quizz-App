'use client'
import React from "react";

function TeacherPopup({isOpen,onClose,onSubmit}){
    return(
        <div className={`popup ${isOpen?'active':''}`}>
            <div className="teacher-pop-up content">
                <span className="close" onClick={onClose}>&times;</span>
                    <h2>Teacher Sign Up</h2>
                    {/*content goes here*/}
                    <div>
                        <form>
                            <label>Email:</label>
                            <br/>
                            <input 
                                type="email"
                                placeholder="Email"
                            />
                            <br/>
                            <label>Password:</label>
                            <br/> 
                            <input 
                                type="password"
                                placeholder="Password"    
                            />          
                        </form>
                        
                    </div>
                    <button onClick={onSubmit}>Submit</button>
            </div>
        </div>

        
    );
}

export default TeacherPopup;