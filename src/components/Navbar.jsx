import React from 'react';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-20 px-4'>
      <div>
        <h1>BEYOND</h1>
      </div>

      <ul className='flex '>
          <li>Home</li>
          <li>Features</li>
          <li>Roadmap</li>
          <li>Support server</li>
          <li>About us</li>
          <li>Contact</li>
        </ul>

        <div className='flex'>Search</div>
    </div>
  )
}

export default Navbar