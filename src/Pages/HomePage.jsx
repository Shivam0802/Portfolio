import React from "react";
import { Link } from "react-router-dom";
import Education from "../Components/Education";
import Contact from "../Components/Contact";
import { MoveRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Home = ({ theme }) => {
    return (
        <>
            <div className="flex flex-col w-full">
                <main className="flex flex-row gap-[0.4rem]">
                    <div className={`relative w-full m-4 mt-10 rounded-lg shadow-md ${theme === 'light' ? 'bg-[#EBF4F6] text-black' : 'bg-[#2c2f33] text-white'}`}>
                        <div className={`absolute inset-0 w-full h-[50vh] md:h-[60vh] rounded-lg bg-cover bg-center ${theme === 'light' ? 'bg-[url("/background.jpg")]' : 'bg-[url("/background.jpg")]'} bg-blur`}></div>
                        <div className="relative bg-opacity-50 bg-black w-full h-[50vh] md:h-[60vh] rounded-lg p-4">
                            <h1 className="text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] font-normal mt-[5rem] md:mt-[10rem]" style={{ color: 'whitesmoke' }}>
                                Shivam
                            </h1>
                            <p className="text-[1rem] md:text-[1.4rem] pr-4 md:pr-[8rem] lg:pr-[16rem] mt-[1rem] md:mt-[1rem]" style={{ color: 'whitesmoke' }}>
                                I am a full stack developer with experience in React, Node.js, Express, and MongoDB.
                            </p>
                        </div>
                        <div className="absolute bottom-2 md:bottom-10 left-0">
                            <button className="flex flex-row gap-2 px-4 py-2 rounded-lg text-white hover:underline">
                                Contact Me
                                <MoveRight size={24} />
                            </button>
                        </div>
                    </div>
                </main>
                <main className="flex flex-row gap-[0.4rem]">
                    <Education theme={theme} />
                </main>
                <main className="flex flex-col gap-4">
                    <div className={`relative m-4 rounded-lg shadow-md ${theme === 'light' ? 'bg-[#F5F7F8] text-black' : 'bg-[#2c2f33] text-white'}`}>
                        <div className="flex flex-col p-4">
                            <div className="flex flex-col gap-4 items-center justify-center">
                                <div className="flex flex-row gap-1 items-center justify-center">
                                    <ChevronLeft size={26} style={{ color: '#80AF81' }} />
                                    <hr className="border-[0.15rem] w-[8rem] sm:w-[12.5rem] rounded-lg border-[#80AF81]" />
                                </div>
                                <h2 className={`text-[2.0rem] sm:text-[2.4rem] font-medium ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                                    Projects
                                </h2>
                                <div className="flex flex-row gap-1 items-center justify-center">
                                    <hr className="border-[0.15rem] w-[8rem] sm:w-[12.5rem] rounded-lg border-[#80AF81]" />
                                    <ChevronRight size={26} style={{ color: '#80AF81' }} />
                                </div>
                            </div>
                            <br />
                            <div className="flex flex-col gap-4 mt-4">
                                {/* Project 1 */}
                                <div className="flex flex-col md:flex-row gap-2 items-center p-2">
                                    <img src="/Project/Scrapster/img1.png" alt="Project" className="w-full sm:max-w-[25rem] rounded-lg" />
                                    <div className={`text-[1rem] sm:text-[1.6rem] flex flex-col font-normal ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                                        <p className="px-4 text-[#FFA62F]">Scrapster - A E-waste Management System</p>
                                        <p className="text-[1rem] px-4 mt-2">
                                            Scrapster is an E-waste management system that helps users to dispose, transport and sell electronics waste.
                                            It also helps in recycling the E-waste and reducing the pollution caused by it.
                                        </p>
                                        <Link to="/project">
                                            <button className="flex flex-row items-center px-4 py-2 rounded-lg text-[1.1rem] text-gray-500 hover:underline">
                                                View More
                                                <MoveRight size={24} />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <hr className="border-[0.1rem] w-full my-2 rounded-lg border-gray-400" />

                                {/* Project 2 */}
                                <div className="flex flex-col md:flex-row gap-2 items-center p-2">
                                    <div className={`text-[1rem] sm:text-[1.6rem] flex flex-col font-normal ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                                        <p className="px-4 text-[#FFA62F]">Melodify - A Music Streaming App</p>
                                        <p className="text-[1rem] px-4 mt-2">
                                            Melodify is a music streaming app that helps users to listen to their favorite music online.
                                            It also helps in discovering new music and creating playlists of their choice.
                                        </p>
                                        <Link to="/project">
                                            <button className="flex flex-row items-center px-4 py-2 rounded-lg text-[1.1rem] text-gray-500 hover:underline">
                                                View More
                                                <MoveRight size={24} />
                                            </button>
                                        </Link>
                                    </div>
                                    <img src="/Project/Melodify/img1.png" alt="Project" className="w-full sm:max-w-[25rem] rounded-lg" />
                                </div>
                                <hr className="border-[0.1rem] w-full my-2 rounded-lg border-gray-400" />

                                {/* Project 3 */}
                                <div className="flex flex-col md:flex-row gap-2 items-center p-2">
                                    <img src="/Project/To-do/img1.png" alt="Project" className="w-full sm:max-w-[25rem] rounded-lg" />
                                    <div className={`text-[1rem] sm:text-[1.6rem] flex flex-col font-normal ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                                        <p className="px-4 text-[#FFA62F]">To-do App - A Task Management System</p>
                                        <p className="text-[1rem] px-4 mt-2">
                                            To-do App is a task management system that helps users to manage their tasks and keep track of their daily activities.
                                            It also helps to marked the completed tasks and delete the unwanted tasks.
                                        </p>
                                        <Link to="/project">
                                            <button className="flex flex-row items-center px-4 py-2 rounded-lg text-[1.1rem] text-gray-500 hover:underline">
                                                View More
                                                <MoveRight size={24} />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <hr className="border-[0.1rem] w-full my-2 rounded-lg border-gray-400" />

                                {/* Project 4 */}
                                <div className="flex flex-col md:flex-row gap-2 items-center p-2">
                                    <div className={`text-[1rem] sm:text-[1.6rem] flex flex-col font-normal ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                                        <p className="px-4 text-[#FFA62F]">UrbanBuy - An E-commerce Website</p>
                                        <p className="text-[1rem] px-4 mt-2">
                                            UrbanBuy is an E-commerce website that helps users to buy products online.
                                            It also helps in selling products and managing the orders and inventory.
                                        </p>
                                        <Link to="/project">
                                            <button className="flex flex-row items-center px-4 py-2 rounded-lg text-[1.1rem] text-gray-500 hover:underline">
                                                View More
                                                <MoveRight size={24} />
                                            </button>
                                        </Link>
                                    </div>
                                    <img src="/Project/UrbanBuy/img1.png" alt="Project" className="w-full sm:max-w-[25rem] rounded-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <main className="flex flex-row gap-[0.4rem]">
                    <Contact theme={theme} />
                </main>
            </div>
        </>
    );
};

export default Home;
