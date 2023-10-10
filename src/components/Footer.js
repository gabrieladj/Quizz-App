import React from 'react'


function Footer() {
  return (
    <footer className='mx-auto'>
        <p className='justify-between items-center'> &copy; {new Date().getFullYear()} Quiz App</p>
    </footer>

  )
}

export default Footer