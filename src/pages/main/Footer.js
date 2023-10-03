import React from 'react'


function Footer() {
  return (
    <footer className='mx-auto flex justify-between items-center'>
        <p> &copy; {new Date().getFullYear()} Quiz App</p>
    </footer>

  )
}

export default Footer