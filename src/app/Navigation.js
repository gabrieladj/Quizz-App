// components/Navbar.js
'use client'
import Link from 'next/link';
import { useState } from 'react';
const Navbar = () => {

    const [signVisible,setSignVisible] = useState(false);


  return (
    <nav className='bg-gray-400 p-4'>
        <div className='container mx-auto flex justify-between items-center'>
            <Link className='font-bold' href="/">Quizz App</Link>

            <ul className='flex space-x-4 mx-3'>
                <li>
                    <Link href="/" >
                        <button className='p-2'>Account</button>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <button onClick={() => setSignVisible(!signVisible)} className='text-white hover:underline hover:rounded-lg hover:bg-gray-500 p-2'>Sign Up</button>
                        {signVisible && (
                            <form>
                                <label>Email:</label>
                                <input type='email' placeholder='email'/> 
                                <label>Password:</label>
                                <input type='password' placeholder='password'/> 
                                <button type='submit'>Submit</button>
                            </form>
                        )}

                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <button className='bg-blue-500 rounded-lg text-
                        \white hover:underline hover:rounded-lg  hover:bg-gray-500 p-2'>Login In</button>
                    </Link>
                </li>

            </ul>

        </div>
      
    </nav>
  );
};

export default Navbar;
