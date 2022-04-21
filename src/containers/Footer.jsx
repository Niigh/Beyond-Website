import React from 'react';
import {
    FaTwitter,
    FaDiscord,
    FaGithub
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full bg-[color:var(--color-footer)]'>
            <div className='grid max-w-[1620px] mx-auto py-16 px-4 xl:grid-cols-5 md:grid-cols-3 grid-cols-1 text-[color:var(--color-text)]'>
                <div className='md:col-span-3 xl:col-span-2 py-4'>
                    <h1>BEYOND</h1>
                    <p className='flex z-0 pt-4 pb-2 max-w-[50%] font-light opacity-90 text-[color:var(--color-p)]'>An ecosystem to manage your Destiny 2 account and characters through multiple plateforms.</p>
                    <div className='flex mt-2 mb-8 space-x-4'>
                        <FaTwitter size={20} />
                        <FaDiscord size={20}/>
                        <FaGithub size={20}/>
                    </div>
                </div>

                <div className='col-span-1 flex justify-between py-2'>
                    <div>
                        <h4 className='font-bold pt-2'>Beyond Discord Bot</h4>
                        <ul className='pt-4'>
                            <li className='py-2 text-sm opacity-80 z-0'>Features</li>
                            <li className='py-2 text-sm opacity-80 z-0'>Roadmap</li>
                            <li className='py-2 text-sm opacity-80 z-0'>Support Server</li>
                        </ul>
                    </div>
                </div>

                <div className='col-span-1 flex justify-between py-2'>
                    <div>
                        <h4 className='font-bold pt-2'>Beyond App</h4>
                        <p className='flex py-6 italic text-sm font-light max-w-[50%] text-left opacity-60'>Still under contruction, come back later !</p>
                    </div>
                </div>

                <div className='col-span-1 flex justify-between py-2'>
                    <div>
                        <h4 className='font-bold pt-2'>Meet the team</h4>
                        <ul className='pt-4'>
                            <li className='py-2 text-sm opacity-80 z-0'>About us</li>
                            <li className='py-2 text-sm opacity-80 z-0'>Terms of use</li>
                            <li className='py-2 text-sm opacity-80 z-0'>Privacy Policy</li>
                            <li className='py-2 text-sm opacity-80 z-0'>Contact</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;