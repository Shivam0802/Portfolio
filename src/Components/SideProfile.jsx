import React from "react";

const SideProfile = ({ theme }) => {
    return (
        <div className={`w-full md:w-[50%] lg:w-[32%] h-full mt-4 md:my-10 md:mr-10 rounded-lg shadow-md ${theme === 'light' ? 'bg-[#EBF4F6]' : 'bg-[#2c2f33]'}`}>
            <div className="w-[90%] md:w-[50%] lg:w-[90%] h-auto my-4 p-2 rounded-lg bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] shadow-md mx-auto md:mx-4">
                <img
                    src="/mypic.jpg"
                    alt="My Pic"
                    className="w-full h-full rounded-lg"
                />
            </div>
            <hr className={`w-[90%] mx-auto md:mx-4 border-1 ${theme === 'light' ? 'border-gray-300' : 'border-gray-600'}`} />
            <div className="text-center">
                <h1 className={`text-[1.5rem] md:text-[2rem] font-normal ${theme === 'light' ? 'text-[#8E3E63]' : 'text-[#C39898]'}`}>Shivam</h1>
                <p className={`text-[1rem] ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>Frontend Developer</p>
            </div>
            <hr className={`w-[90%] mx-auto md:mx-4 border-1 ${theme === 'light' ? 'border-gray-300' : 'border-gray-600'}`} />
            <div className="m-4">
                <ul>
                    <li className="my-4 flex items-center gap-2 mx-4">
                        <img src="/man.png" alt="Birthday" className="w-6 h-6 inline-block" />
                        <p className={`inline-block ml-2 ${theme === 'light' ? 'hover:text-[#40A578]' : 'hover:text-[#9DDE8B]'} cursor-pointer`}>
                           Date Of Birth: <strong className={`text-normal ${theme === 'light' ? 'text-[#C73659]' : 'text-[#B0EBB4]'}`}>08 Feb 2001</strong>
                        </p>
                    </li>
                    <li className="my-4 flex items-center gap-2 mx-4">
                        <img src="/address.png" alt="Location" className="w-6 h-6 inline-block" />
                        <p className={`inline-block ml-2 ${theme === 'light' ? 'hover:text-[#40A578]' : 'hover:text-[#9DDE8B]'} cursor-pointer`}>
                            Nihal Vihar, New Delhi, India
                        </p>
                    </li>
                    <li className="my-4 flex items-center gap-2 mx-4">
                        <img src="/email.png" alt="Email" className="w-6 h-6 inline-block" />
                        <p className={`inline-block ml-2 ${theme === 'light' ? 'hover:text-[#40A578]' : 'hover:text-[#9DDE8B]'} cursor-pointer`} >
                            shivamk08001@gmail.com
                        </p>
                    </li>
                    <li className="my-2 flex items-center gap-2 mx-4">
                        <img src='/phone.png' alt="Phone" className="w-6 h-6 inline-block" />
                        <p className={`inline-block ml-2 ${theme === 'light' ? 'hover:text-[#40A578]' : 'hover:text-[#9DDE8B]'} cursor-pointer`}>
                            +91 9354141450
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideProfile;
