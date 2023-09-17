// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
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
                        <button className='text-white hover:underline hover:rounded-lg hover:bg-gray-500 p-2'>Sign Up</button>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <button className='bg-blue-500 rounded-lg text-white hover:underline hover:rounded-lg  hover:bg-gray-500 p-2'>Login In</button>
                    </Link>
                </li>

            </ul>

        </div>
      
    </nav>
  );
};

export default Navbar;
