// components/Navigation.js
'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Navbar(props) {

  const [signVisible,setSignVisible] = useState(false);
  const  [signupUsername,setSignupUsername] = useState("");
  const  [signupPassword,setSignupPassword] = useState("");

  console.log(props);
  const loggedIn = props.data.loggedIn;
  const username = props.data.username;

  const router = useRouter();

  if (loggedIn && username) {
    console.log("NAV: Username: " + username);
  }
  else {
    console.log("NAV Not logged in ")
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/signup', { username: signupUsername,password: signupPassword});
      console.log("Signup Successful");
      //this will reload the page without doing SSR
      router.refresh();
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data && error.response.data.message)
          alert(error.response.data.message);
      else
          alert("Unknown error occurred");
    }
  }

  const handleLogout = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/logout', {});
      console.log("Logged out")
      if (res.data.ok) {
        router.refresh();
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data && error.response.data.message)
          alert(error.response.data.message);
      else
          alert("Unknown error occurred");
    }
  }

  return (
    <nav className='bg-gray-400 p-4'>
        <div className='container mx-auto flex justify-between items-center'>
            <Link className='font-bold' href="/">Quizz App</Link>

            <ul className='flex space-x-4 mx-3'>
                {loggedIn &&
                    <li>
                        <Link href="/" >
                            <button className='p-2'>Account</button>
                        </Link>
                    </li>
                }
                {!loggedIn &&
                    <li>
                        <div>
                            <button onClick={() => setSignVisible(!signVisible)} className='text-white hover:underline hover:rounded-lg hover:bg-gray-500 p-2'>Sign Up</button>
                            {signVisible && (
                                <div>
                                    <form>
                                        <label>Username:</label>
                                        <input 
                                            type="text"
                                            value={signupUsername}
                                            onChange={(e) => setSignupUsername(e.target.value)}
                                        />
                                        <label>Password:</label>
                                        <input 
                                            type="password"
                                            value={signupPassword}
                                            onChange={(e) => setSignupPassword(e.target.value)}
                                        /> 
                                        <button type="submit" onClick={handleSubmit}>Submit</button>
                                    </form>
                                </div>
                            )}
                        </div>
                    </li>
                }
                <li>
                    
                    {loggedIn
                    ? <button className='bg-blue-500 rounded-lg text-
                    \white hover:underline hover:rounded-lg  hover:bg-gray-500 p-2' onClick={handleLogout}>Log Out</button>
                    : <Link href="/"><button className='bg-blue-500 rounded-lg text-
                    \white hover:underline hover:rounded-lg  hover:bg-gray-500 p-2'>Login In</button></Link>
                    }
                    
                </li>

            </ul>

        </div>
      
    </nav>
  );
};


