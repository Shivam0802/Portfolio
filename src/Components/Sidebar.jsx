import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    House,
    Waypoints,
    PhoneCall,
    CircleUserRound,
    BookCopy,
    Menu, X
} from 'lucide-react';

const Sidebar = ({ theme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="md:hidden p-4">
                <button onClick={toggleSidebar} className={`focus:outline-none ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                    {isOpen ? <X size="28" /> : <Menu size="28" />}
                </button>
            </div>

            <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-10 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} md:hidden`} onClick={toggleSidebar}></div>

            <div className={`fixed top-0 left-0 w-[75%] max-w-sm h-full shadow-md transform transition-transform duration-300 z-20 ${isOpen ? 'translate-x-0' : '-translate-x-full'} ${theme === 'light' ? 'bg-[#EBF4F6]' : 'bg-[#2c2f33]'} md:relative md:translate-x-0 md:w-[30%] md:my-10 md:ml-10 md rounded-lg`}>
                <div className="flex flex-col justify-between h-full">
                    <div className="mt-4">
                        <ul>
                            <Link to="/" >
                                <li className={`flex flex-row items-center m-2 gap-4 p-2 pl-4 rounded-md text-[1rem] md:text-[1.4rem]  cursor-pointer ${theme === 'light' ? 'text-black hover:bg-gray-300' : 'text-white hover:bg-[#45474B]'}`}>
                                    <House size="24" className="text-[#E68369]" />
                                    Home
                                </li>
                            </Link>
                            <Link to="/about" >
                                <li className={`flex flex-row items-center m-2 gap-4 p-2 pl-4 rounded-md text-[1rem] md:text-[1.4rem] cursor-pointer ${theme === 'light' ? 'text-black hover:bg-gray-300' : 'text-white hover:bg-[#45474B]'}`}>
                                    <CircleUserRound size="24" className="text-[#90D26D]" />
                                    About
                                </li>
                            </Link>
                            <Link to="/education" >
                                <li className={`flex flex-row items-center m-2 gap-4 p-2 pl-4 rounded-md text-[1rem] md:text-[1.4rem] cursor-pointer ${theme === 'light' ? 'text-black hover:bg-gray-300' : 'text-white hover:bg-[#45474B]'}`}>
                                    <BookCopy size="24" className="text-[#FA7070]" />
                                    Education
                                </li>
                            </Link>
                            <Link to="/project" >
                                <li className={`flex flex-row items-center m-2 gap-4 p-2 pl-4 rounded-md text-[1rem] md:text-[1.4rem] cursor-pointer ${theme === 'light' ? 'text-black hover:bg-gray-300' : 'text-white hover:bg-[#45474B]'}`}>
                                    <Waypoints size="24" className="text-[#5A639C]" />
                                    Projects
                                </li>
                            </Link>
                            <Link to="/contact" >
                                <li className={`flex flex-row items-center m-2 gap-4 p-2 pl-4 rounded-md text-[1rem] md:text-[1.4rem] cursor-pointer ${theme === 'light' ? 'text-black hover:bg-gray-300' : 'text-white hover:bg-[#45474B]'}`}>
                                    <PhoneCall size="24" className="text-[#F9C22E]" />
                                    Contact
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="flex flex-col m-4 mt-[11rem] justify-between">
                        <div className="flex flex-col ">
                            <h2 className={`flex flex-row items-center gap-4 pl-2 text-[1rem] md:text-[1.4rem] ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                                Follow Me :
                            </h2>
                            <div className="flex flex-row items-center gap-4 p-2">
                                <Link to="https://www.linkedin.com/in/shivam-b53a201b8" target="_blank" rel="noreferrer">
                                    <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
                                </Link>
                                <Link to="https://www.instagram.com/shivam_rai_802" target="_blank" rel="noreferrer">
                                    <img src="/instagram.png" alt="Instagram" className="w-8 h-8" />
                                </Link>
                                <Link to="https://x.com/Shivam_01_02" target="_blank" rel="noreferrer">
                                    <img src="/twitter.png" alt="Twitter" className="w-8 h-8" />
                                </Link>
                                <Link to="https://github.com/Shivam0802" target="_blank" rel="noreferrer">
                                    <img src="/github.png" alt="GitHub" className="w-8 h-8" />
                                </Link>
                            </div>
                        </div>
                        <hr className={`w-[100%] border-1 ${theme === 'light' ? 'border-gray-300' : 'border-gray-600'} mt-2`} />
                        <h2 className={`text-[1rem] md:text-[1.4rem] ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'} pl-10 mt-2`}>© 2024 Shivam</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
