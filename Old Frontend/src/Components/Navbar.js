import React from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import {Dashboard.js} from './Dashboard.js
import logo from '../sky.png';

export default function Navbar() {
    let showMenu = () => {
        let menu = document.getElementById("burgerDiv");
        menu.classList.toggle("toggle");
    }
    return (
        <>
            <nav className='flex sticky top-0 z-20 bg-white shadow-sm shadow-gray-300 justify-between items-center px-5 font-medium py-1 md:justify-evenly md:py-2'>
                <a href="/" className='flex items-center text-[#6232e6]'>
                    <img src={logo} alt="" className='w-10' />
                    <span className='text-lg mx-2'>AirIQ</span>
                </a>

                <div className="burger p-2 md:hidden lg:hidden xl:hidden 2xl:hidden" onClick={showMenu}>
                    <Hamburger color="#815fe2" size={28} rounded distance='md' />
                </div>

                <div className="hidden md:flex md:items-center">
                    <ul className='flex items-center space-x-3 lg:space-x-3 text-[#815fe2] font-normal text-base'>
                        <li><a href="/dashboard" onClick={showMenu} className='px-5 py-2 my-1 text-md'>Dashboard</a></li>
                        <li><a href="/realtime" onClick={showMenu} className='px-5 py-2 my-1 text-md'>About Us</a></li>
                        <li><a href="/realtime" onClick={showMenu} className='px-5 py-2 my-1 text-md'>How it works</a></li>
                    </ul>
                </div>
            </nav>

            {/* div for hamburger menu  */}
            <div className="flex fixed z-20 text-white w-full items-center justify-center flex-col space-y-3 transition-all -translate-x-full bg-[#815fe2] h-full p-5 px-5 md:hidden lg:hidden xl:hidden 2xl:hidden" id='burgerDiv'>
                <ul className='flex items-center flex-col space-y-3'>
                    <li><a href="./Dashboard.js" onClick={<Dashboard.js/>} className='px-5 py-2 my-1 text-xl'>Dashboard</a></li>
                    <li><a href="./Aboutus.js" onClick={<Aboutus.js/>} className='px-5 py-2 my-1 text-xl'>About Us</a></li>
                    <li><a href = "./Working.js" onClick={Working.js} className='px-5 py-2 my-1 text-lg'>How it works</a></li>
                </ul>

            </div>
        </>
    )
}
