import React from "react";
import { Scrapster, Melodify, Todo, UrbanBuy } from "../StaticData/staticData";
import Crousal from "./Crousal";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Project = ({ theme }) => {
    return (
        <div className={`relative w-full m-4 rounded-lg shadow-md ${theme === 'light' ? 'bg-[#F5F7F8] text-black' : 'bg-[#2c2f33] text-white'}`}>
            <div className="flex flex-col p-4">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
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
                <div className="flex flex-col gap-4 mt-4">
                    <div className="flex flex-row gap-2 items-center justify-between">
                        <h2 className={`text-[1.5rem] sm:text-[1.8rem] flex flex-row gap-2 font-normal ${theme === 'light' ? 'text-gray-600' : 'text-[#F1F8E8]'}`}>
                            <img src="/project.png" alt="Project" className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg" />
                            Scrapster - A E-waste Management System
                        </h2>
                        <img src="/social.png" alt="Scrapster" className="w-10 h-10 mr-4 sm:w-12 sm:h-12 rounded-lg" />
                    </div>
                    <p className={`text-[0.9rem] sm:text-[1rem] pl-4 sm:pl-6 ${theme === 'light' ? 'text-gray-600' : 'text-[#F1F8E8]'}`}>
                        Scrapster is an E-waste management system that helps users to dispose, transport and sell electronics waste.
                        It also helps in recycling the E-waste and reducing the pollution caused by it.
                    </p>
                    <div className="flex items-center justify-center max-w-full sm:max-w-[35rem] ml-0 sm:ml-[18%]">
                        <Crousal children={Scrapster} />
                    </div>
                </div>
                <hr className="border-[0.1rem] w-full my-10 rounded-lg border-gray-400" />
                <div className="flex flex-col gap-4 mt-4">
                    <div className="flex flex-row gap-2 items-center justify-between">
                        <h2 className={`text-[1.5rem] sm:text-[1.8rem] flex flex-row gap-2 font-normal ${theme === 'light' ? 'text-gray-600' : 'text-[#F1F8E8]'}`}>
                            <img src="/project.png" alt="Project" className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg" />
                            Melodify - A Music Streaming App
                        </h2>
                        <img src="/social.png" alt="Melodify" className="w-10 h-10 mr-4 sm:w-12 sm:h-12 rounded-lg" />
                    </div>
                    <p className={`text-[0.9rem] sm:text-[1rem] pl-4 sm:pl-6 ${theme === 'light' ? 'text-gray-600' : 'text-[#F1F8E8]'}`}>
                        Melodify is a music streaming app that helps users to listen to their favorite music online.
                        It also helps in discovering new music and creating playlists of their choice.
                    </p>
                    <div className="flex items-center justify-center max-w-full sm:max-w-[35rem] ml-0 sm:ml-[18%]">
                        <Crousal children={Melodify} />
                    </div>
                </div>
                <hr className="border-[0.1rem] w-full my-10 rounded-lg border-gray-400" />
                <div className="flex flex-col gap-4 mt-4">
                    <div className="flex flex-row gap-2 items-center justify-between">
                        <h2 className={`text-[1.5rem] sm:text-[1.8rem] flex flex-row gap-2 font-normal ${theme === 'light' ? 'text-gray-600' : 'text-[#F1F8E8]'}`}>
                            <img src="/project.png" alt="Project" className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg" />
                            To-do App - A Task Management System
                        </h2>
                        <img src="/social.png" alt="Todo" className="w-10 h-10 mr-4 sm:w-12 sm:h-12 rounded-lg" />
                    </div>
                    <p className={`text-[0.9rem] sm:text-[1rem] pl-4 sm:pl-6 ${theme === 'light' ? 'text-gray-600' : 'text-[#F1F8E8]'}`}>
                        To-do App is a task management system that helps users to manage their tasks and keep track of their daily activities.
                        It also helps to marked the completed tasks and delete the unwanted tasks.
                    </p>
                    <div className="flex items-center justify-center max-w-full sm:max-w-[35rem] ml-0 sm:ml-[18%]">
                        <Crousal children={Todo} />
                    </div>
                </div>
                <hr className="border-[0.1rem] w-full my-10 rounded-lg border-gray-400" />
                <div className="flex flex-col gap-4 mt-4">
                    <div className="flex flex-row gap-2 items-center justify-between">
                        <h2 className={`text-[1.5rem] sm:text-[1.8rem] flex flex-row gap-2 font-normal ${theme === 'light' ? 'text-gray-600' : 'text-[#F1F8E8]'}`}>
                            <img src="/project.png" alt="Project" className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg" />
                            UrbanBuy - An E-commerce Website
                        </h2>
                        <img src="/social.png" alt="UrbanBuy" className="w-10 h-10 mr-4 sm:w-12 sm:h-12 rounded-lg" />
                    </div>
                    <p className={`text-[0.9rem] sm:text-[1rem] pl-4 sm:pl-6 ${theme === 'light' ? 'text-gray-600' : 'text-[#F1F8E8]'}`}>
                        UrbanBuy is an E-commerce website that helps users to buy products online.
                        It also helps in selling products and managing the inventory of the products.
                    </p>
                    <div className="flex items-center justify-center max-w-full sm:max-w-[35rem] ml-0 sm:ml-[18%]">
                        <Crousal children={UrbanBuy} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
