import React from "react";
import { ChevronLeft, ChevronRight, ArrowBigRightDash } from "lucide-react";

const AboutPage = ({ theme }) => {
    return (
        <div className="flex flex-col items-center justify-center mt-6">
            <div className={`w-full max-w-[60rem] m-4 rounded-lg shadow-md ${theme === 'light' ? 'bg-[#EBF4F6] text-black' : 'bg-[#2c2f33] text-white'}`}>
                <div className="p-4">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                         <div className="flex flex-row gap-1 items-center justify-center">
                             <ChevronLeft size={26} style={{ color: '#80AF81' }} />
                             <hr className="border-[0.15rem] w-[8rem] sm:w-[12.5rem] rounded-lg border-[#80AF81]" />
                         </div>
                         <h2 className={`text-[2.0rem] sm:text-[2.4rem] font-medium ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                             About Me
                         </h2>
                         <div className="flex flex-row gap-1 items-center justify-center">
                             <hr className="border-[0.15rem] w-[8rem] sm:w-[12.5rem] rounded-lg border-[#80AF81]" />
                             <ChevronRight size={26} style={{ color: '#80AF81' }} />
                         </div>
                     </div>
                    <div className="my-4">
                        <h2 className={`text-[1.8rem] font-Normal ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                            Hello🖐🏼, I'm Shivam
                        </h2>
                        <p className={`text-base ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                            I am a web developer with a passion for creating and building websites. I am a
                            self-taught developer having knowledge of MERN technologies. I am always eager to learn new
                            technologies and improve my skills. I am looking for an opportunity to work in a
                            challenging environment where I can utilize my skills and knowledge to grow as a
                            professional. I am a creative thinker who is always looking for
                            new ways to solve problems and improve existing solutions. I am a detail-oriented person who pays attention to the smallest details and always strives for perfection.
                            I am a team player who is
                            always ready to collaborate with others to achieve common goals.
                        </p>
                    </div>
                    <hr className={`my-4 border-t ${theme === 'light' ? 'border-gray-300' : 'border-gray-600'}`} />
                    <div className="mb-4">
                        <h2 className={`text-[1.8rem] font-normal mb-2 ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                            My Skills & Expertise :
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className={`shadow-md rounded-lg p-4 ${theme === 'light' ? 'bg-[#e0e0e0]' : 'bg-[#222831]'}`}>
                                <span className={`flex items-center text-[1.2rem] ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                                    <ArrowBigRightDash size={30} style={{ color: '#80AF81' }} className="mr-2" />
                                    Front-end Technologies :
                                </span>
                                <ul className="mt-2">
                                    <li className={`flex items-center text-base ${theme === 'light' ? 'text-gray-600 hover:text-[#40A578]' : 'text-white hover:text-[#B0EBB4]'} cursor-pointer`}>
                                        <img src="html5.png" alt="HTML5" className="w-8 h-8 mr-2" />
                                        HTML5
                                    </li>
                                    <li className={`flex items-center text-base ${theme === 'light' ? 'text-gray-600 hover:text-[#40A578]' : 'text-white hover:text-[#B0EBB4]'} cursor-pointer`}>
                                        <img src="css3.png" alt="CSS3" className="w-8 h-8 mr-2" />
                                        CSS3
                                    </li>
                                    <li className={`flex items-center text-base ${theme === 'light' ? 'text-gray-600 hover:text-[#40A578]' : 'text-white hover:text-[#B0EBB4]'} cursor-pointer`}>
                                        <img src="javascript.png" alt="JavaScript" className="w-8 h-8 mr-2" />
                                        JavaScript
                                    </li>
                                    <li className={`flex items-center text-base ${theme === 'light' ? 'text-gray-600 hover:text-[#40A578]' : 'text-white hover:text-[#B0EBB4]'} cursor-pointer`}>
                                        <img src="react.png" alt="React" className="w-8 h-8 mr-2" />
                                        React JS
                                    </li>
                                    <li className={`flex items-center text-base ${theme === 'light' ? 'text-gray-600 hover:text-[#40A578]' : 'text-white hover:text-[#B0EBB4]'} cursor-pointer`}>
                                        <img src="redux.png" alt="Redux" className="w-8 h-8 mr-2" />
                                        Redux
                                    </li>
                                    <li className={`flex items-center text-base ${theme === 'light' ? 'text-gray-600 hover:text-[#40A578]' : 'text-white hover:text-[#B0EBB4]'} cursor-pointer`}>
                                        <img src="tailwind.png" alt="Tailwind CSS" className="w-8 h-8 mr-2" />
                                        Tailwind CSS
                                    </li>
                                </ul>
                            </div>
                            <div className={`shadow-md rounded-lg p-4 ${theme === 'light' ? 'bg-[#e0e0e0]' : 'bg-[#222831]'}`}>
                                <span className={`flex items-center text-[1.2rem] ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                                    <ArrowBigRightDash size={30} style={{ color: '#80AF81' }} className="mr-2" />
                                    Back-end Technologies :
                                </span>
                                <ul className="mt-2">
                                    <li className={`flex items-center text-base ${theme === 'light' ? 'text-gray-600 hover:text-[#40A578]' : 'text-white hover:text-[#B0EBB4]'} cursor-pointer`}>
                                        <img src="nodejs.png" alt="Node JS" className="w-8 h-8 mr-2 ml-1" />
                                        Node JS
                                    </li>
                                    <li className={`flex items-center text-base ${theme === 'light' ? 'text-gray-600 hover:text-[#40A578]' : 'text-white hover:text-[#B0EBB4]'} cursor-pointer`}>
                                        <img src="express.png" alt="Express JS" className="w-8 h-8 mr-2 ml-1" />
                                        Express JS
                                    </li>
                                    <li className={`flex items-center text-base ${theme === 'light' ? 'text-gray-600 hover:text-[#40A578]' : 'text-white hover:text-[#B0EBB4]'} cursor-pointer`}>
                                        <img src="MongoDB.png" alt="MongoDB" className="w-8 h-8 mr-2 ml-1" />
                                        MongoDB
                                    </li>
                                    <li className={`flex items-center text-base ${theme === 'light' ? 'text-gray-600 hover:text-[#40A578]' : 'text-white hover:text-[#B0EBB4]'} cursor-pointer`}>
                                        <img src="oracle.png" alt="oracle" className="w-10 h-10" />
                                        Oracle Database
                                    </li>
                                </ul>
                            </div>
                            <div className={`shadow-md rounded-lg p-4 ${theme === 'light' ? 'bg-[#e0e0e0]' : 'bg-[#222831]'}`}>
                                <span className={`flex items-center text-[1.2rem] ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                                    <ArrowBigRightDash size={30} style={{ color: '#80AF81' }} className="mr-2" />
                                    Programming Languages :
                                </span>
                                <ul className="mt-2">
                                    <li className={`flex items-center text-base mb-1 ${theme === 'light' ? 'text-gray-600 hover:text-[#40A578]' : 'text-white hover:text-[#B0EBB4]'} cursor-pointer`}>
                                        <img src="c.png" alt="C" className="w-7 h-7 mr-2" />
                                        C Language
                                    </li>
                                    <li className={`flex items-center text-base mb-1 ${theme === 'light' ? 'text-gray-600 hover:text-[#40A578]' : 'text-white hover:text-[#B0EBB4]'} cursor-pointer`}>
                                        <img src="c++.png" alt="C++" className="w-8 h-8 mr-2" />
                                        C++ Language
                                    </li>
                                    <li className={`flex items-center text-base mb-1 ${theme === 'light' ? 'text-gray-600 hover:text-[#40A578]' : 'text-white hover:text-[#B0EBB4]'} cursor-pointer`}>
                                        <img src="java.png" alt="Java" className="w-8 h-8 mr-2" />
                                        Java Language
                                    </li>
                                    <li className={`flex items-center text-base mb-1 ${theme === 'light' ? 'text-gray-600 hover:text-[#40A578]' : 'text-white hover:text-[#B0EBB4]'} cursor-pointer`}>
                                        <img src="python.png" alt="Python" className="w-8 h-8 mr-2" />
                                        Python Language
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className={`my-4 border-t ${theme === 'light' ? 'border-gray-300' : 'border-gray-600'}`} />
                    <div className="mb-4">
                        <h2 className={`text-[1.8rem] font-normal ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                            What I Offer:
                        </h2>
                        <ul className="mt-2">
                            <li className={`flex items-center text-base ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                                <ArrowBigRightDash size={30} style={{ color: '#80AF81' }} className="mr-2" />
                                Responsive Web Design
                            </li>
                            <li className={`flex items-center text-base ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                                <ArrowBigRightDash size={30} style={{ color: '#80AF81' }} className="mr-2" />
                                Web Development
                            </li>
                            <li className={`flex items-center text-base ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                                <ArrowBigRightDash size={30} style={{ color: '#80AF81' }} className="mr-2" />
                                Front-end Development
                            </li>
                            <li className={`flex items-center text-base ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                                <ArrowBigRightDash size={30} style={{ color: '#80AF81' }} className="mr-2" />
                                Back-end Development
                            </li>
                            <li className={`flex items-center text-base ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                                <ArrowBigRightDash size={30} style={{ color: '#80AF81' }} className="mr-2" />
                                Full Stack Development
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
