import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

import { ThemeSwitch } from './';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }

    const [showNav, setShowNav] = useState(false);
    const handleShowNav = () => {
        setShowNav(!showNav)
    }

    return (
        <div className='flex text-center justify-between items-center h-20 px-4'>
            <div>
                <h1>BEYOND</h1>
            </div>

            <ul className='hidden md:flex '>
                <li>Home</li>
                <li>Features</li>
                <li>Roadmap</li>
                <li>Support server</li>
                <li>About us</li>
                <li>Contact</li>
            </ul>

            
            <div className='hidden md:flex space-x-4 mx-4'>
                <ThemeSwitch />
                <div className='text-[color:var(--color-text)]'>
                    <BiSearch size={20} />
                </div>
            </div>

            <div onClick={handleShowNav} className='md:hidden z-10 relative group'>
                <div className='relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] bg-[color:#beaa9c] dark:bg-slate-700 shadow-md'>
                    <div className='flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden'>
                        <div className={showNav ? 'bg-white h-[2px] w-7 transform transition-all duration-300 origin-left translate-x-10' : 'bg-white h-[2px] w-7 transform transition-all duration-300 origin-top -translate-x-10'}></div>
                        <div className={showNav ? 'bg-white h-[2px] w-7 transform transition-opacity duration-300 opacity-0' : 'bg-white h-[2px] w-7 transform transition-opacity duration-300 opacity-100'}></div>
                        <div className={showNav ? 'bg-white h-[2px] w-7 transform transition-all duration-300 origin-left translate-x-10 delay-75' : 'bg-white h-[2px] w-7 transform transition-all duration-300 origin-yop -translate-x-10 delay-75'}></div>

                        <div className={showNav ? 'absolute items-center justify-between transform transition-all duration-500 top-2.5 translate-x-0 flex w-0 group-hover:w-12' : 'absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0 group-hover:w-12'}>
                            <div className={showNav ? 'absolute bg-white h-[2px] w-5 transform transition-all duration-500 delay-300 rotate-45' : 'absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300'}></div>
                            <div className={showNav ? 'absolute bg-white h-[2px] w-5 transform transition-all duration-500 delay-300 -rotate-45' : 'absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300'}></div>
                        </div>
                    </div>
                </div>
            </div>
            

            {/* Mobile menu dropdown*/}
            <div onClick={handleNav} className={showNav ? 'absolute left-0 top-0 h-full w-full bg-[color:var(--color-bg)] dark:bg-gray-800 px-4 py-4 flex flex-col transform ease-in-out transition-all duration-500 origin-left translate-x-0' : 'absolute left-0 top-0 h-full w-full bg-gray-800 px-4 py-4 flex flex-col transform ease-in-out transition-all duration-500 origin-left translate-x-[-100%]'}>
                <ul className='my-2 text-center'>
                    <h1 className='my-2'>BEYOND</h1>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Roadmap</li>
                    <li>Support server</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <div className='my-4 flex flex-col'>
                        <div className='mb-8'>
                            <ThemeSwitch />
                        </div>
                        <button className='text-[color:var(--color-bg)]'>Search</button>
                    </div>
                </ul>
            </div>
        </div>
        
    )
}

export default Navbar;