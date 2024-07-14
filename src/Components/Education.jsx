// import React from "react";
// import { ChevronLeft, ChevronRight,CircleChevronRight } from 'lucide-react';

// const Education = ({ theme }) => {
//     return (
//         <div className={`relative w-full m-4 rounded-lg shadow-md ${theme === 'light' ? 'bg-[#EBF4F6] text-black' : 'bg-[#2c2f33] text-white'}`}>
//             <div className="flex flex-col p-4">
//                 <div className="flex flex-row gap-4 items-center justify-center">
//                     <div className="flex flex-row gap-1 items-center justify-center">
//                         <ChevronLeft size={26} style={{ color: '#80AF81' }} />
//                         <hr className="border-[0.15rem] w-[12.5rem] rounded-lg border-[#80AF81]" />
//                     </div>
//                     <h2 className={`text-[2.4rem] font-medium ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
//                         Education
//                     </h2>
//                     <div className="flex flex-row gap-1 items-center justify-center">
//                         <hr className="border-[0.15rem] w-[12.5rem] rounded-lg border-[#80AF81]" />
//                         <ChevronRight size={26} style={{ color: '#80AF81' }} />
//                     </div>
//                 </div>
//                 <br />
//                 <div className="flex flex-col gap-4 mt-4">
//                 <div className="flex flex-col gap-2">
//                     <h3 className={`flex flex-row gap-4 items-center text-[1.7rem] font-normal ${theme === 'light' ? 'text-[#2F3645]' : 'text-[#FFF9D0]'}`}>
//                             <CircleChevronRight size={30} style={{ color: '#CA8787' }} />
//                             Master's in Computer Application
//                         </h3>
//                         <p className={`text-[1.05rem] pl-12 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
//                             I have completed my Master's from <strong className="font-medium text-[#C39898]">Jagan Institute of Management Studies</strong>, Rohini, Sector-5, New Delhi.
//                             <br />
//                             Year of Completion: <strong className="font-medium text-[#C39898]">2025</strong>
//                             <br />
//                         </p>
//                     </div>
//                     <div className="flex flex-col gap-2">
//                         <h3 className={`flex flex-row gap-4 items-center text-[1.7rem] font-normal ${theme === 'light' ? 'text-[#2F3645]' : 'text-[#FFF9D0]'}`}>
//                             <CircleChevronRight size={30} style={{ color: '#CA8787' }} />
//                             Bachelor in Science (Honours) Physics
//                         </h3>
//                         <p className={`text-[1.05rem] pl-12 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
//                             Completed my Bachelor's degree in Physics from <strong className="font-medium text-[#C39898]">Motilal Nehru College, University of Delhi</strong>.
//                             <br />
//                             Year of Completion: <strong className="font-medium text-[#C39898]">2021</strong>
//                             <br />
//                             Scored 79.33% in my Bachelor's degree.
//                         </p>
//                     </div>
//                     <div className="flex flex-col gap-2">
//                     <h3 className={`flex flex-row gap-4 items-center text-[1.7rem] font-normal ${theme === 'light' ? 'text-[#2F3645]' : 'text-[#FFF9D0]'}`}>
//                             <CircleChevronRight size={30} style={{ color: '#CA8787' }} />
//                             Senior Secondary (Class XII)
//                         </h3>
//                         <p className={`text-[1.05rem] pl-12 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
//                             I have completed my Senior Secondary from <strong className="font-medium text-[#C39898]">St. Mary Senior Secondary School</strong>, Ambika Vihar, New Delhi.
//                             <br />
//                             Year of Completion: <strong className="font-medium text-[#C39898]">2018</strong>
//                             <br />
//                             Scored 90.6% in my Senior Secondary.
//                         </p>
//                     </div>
//                     <div className="flex flex-col gap-2">
//                     <h3 className={`flex flex-row gap-4 items-center text-[1.7rem] font-normal ${theme === 'light' ? 'text-[#2F3645]' : 'text-[#FFF9D0]'}`}>
//                             <CircleChevronRight size={30} style={{ color: '#CA8787' }} />
//                             Secondary (Class X)
//                         </h3>
//                         <p className={`text-[1.05rem] pl-12 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
//                             I have completed my Secondary from <strong className="font-medium text-[#C39898]">Rajendra Public School</strong>, Nihal Vihar, New Delhi.
//                             <br />
//                             Year of Completion: <strong className="font-medium text-[#C39898]">2016</strong>
//                             <br />
//                             Scored 81.7% in my Senior Secondary.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )

// }

// export default Education;

import React from "react";
import { ChevronLeft, ChevronRight, CircleChevronRight } from 'lucide-react';

const Education = ({ theme }) => {
    return (
        <div className={`relative w-full m-4 rounded-lg shadow-md ${theme === 'light' ? 'bg-[#EBF4F6] text-black' : 'bg-[#2c2f33] text-white'}`}>
            <div className="flex flex-col p-4">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <div className="flex flex-row gap-1 items-center justify-center">
                        <ChevronLeft size={26} style={{ color: '#80AF81' }} />
                        <hr className="border-[0.15rem] w-[8rem] sm:w-[12.5rem] rounded-lg border-[#80AF81]" />
                    </div>
                    <h2 className={`text-[2.0rem] sm:text-[2.4rem] font-medium ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                        Education
                    </h2>
                    <div className="flex flex-row gap-1 items-center justify-center">
                        <hr className="border-[0.15rem] w-[8rem] sm:w-[12.5rem] rounded-lg border-[#80AF81]" />
                        <ChevronRight size={26} style={{ color: '#80AF81' }} />
                    </div>
                </div>
                <br />
                <div className="flex flex-col gap-4 mt-4">
                    <div className="flex flex-col gap-2">
                        <h3 className={`flex flex-row gap-4 items-center text-[1.5rem] sm:text-[1.7rem] font-normal ${theme === 'light' ? 'text-[#2F3645]' : 'text-[#FFF9D0]'}`}>
                            <CircleChevronRight size={30} style={{ color: '#CA8787' }} />
                            Master's in Computer Application
                        </h3>
                        <p className={`text-[1rem] sm:text-[1.05rem] pl-8 sm:pl-12 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                            I have completed my Master's from <strong className="font-medium text-[#C39898]">Jagan Institute of Management Studies</strong>, Rohini, Sector-5, New Delhi.
                            <br />
                            Year of Completion: <strong className="font-medium text-[#C39898]">2025</strong>
                            <br />
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className={`flex flex-row gap-4 items-center text-[1.5rem] sm:text-[1.7rem] font-normal ${theme === 'light' ? 'text-[#2F3645]' : 'text-[#FFF9D0]'}`}>
                            <CircleChevronRight size={30} style={{ color: '#CA8787' }} />
                            Bachelor in Science (Honours) Physics
                        </h3>
                        <p className={`text-[1rem] sm:text-[1.05rem] pl-8 sm:pl-12 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                            Completed my Bachelor's degree in Physics from <strong className="font-medium text-[#C39898]">Motilal Nehru College, University of Delhi</strong>.
                            <br />
                            Year of Completion: <strong className="font-medium text-[#C39898]">2021</strong>
                            <br />
                            Scored 79.33% in my Bachelor's degree.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className={`flex flex-row gap-4 items-center text-[1.5rem] sm:text-[1.7rem] font-normal ${theme === 'light' ? 'text-[#2F3645]' : 'text-[#FFF9D0]'}`}>
                            <CircleChevronRight size={30} style={{ color: '#CA8787' }} />
                            Senior Secondary (Class XII)
                        </h3>
                        <p className={`text-[1rem] sm:text-[1.05rem] pl-8 sm:pl-12 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                            I have completed my Senior Secondary from <strong className="font-medium text-[#C39898]">St. Mary Senior Secondary School</strong>, Ambika Vihar, New Delhi.
                            <br />
                            Year of Completion: <strong className="font-medium text-[#C39898]">2018</strong>
                            <br />
                            Scored 90.6% in my Senior Secondary.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className={`flex flex-row gap-4 items-center text-[1.5rem] sm:text-[1.7rem] font-normal ${theme === 'light' ? 'text-[#2F3645]' : 'text-[#FFF9D0]'}`}>
                            <CircleChevronRight size={30} style={{ color: '#CA8787' }} />
                            Secondary (Class X)
                        </h3>
                        <p className={`text-[1rem] sm:text-[1.05rem] pl-8 sm:pl-12 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                            I have completed my Secondary from <strong className="font-medium text-[#C39898]">Rajendra Public School</strong>, Nihal Vihar, New Delhi.
                            <br />
                            Year of Completion: <strong className="font-medium text-[#C39898]">2016</strong>
                            <br />
                            Scored 81.7% in my Senior Secondary.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;
