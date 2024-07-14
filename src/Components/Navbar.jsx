import React from "react";

const Navbar = ({ theme, toggleTheme }) => {
    return (
        <div className={`flex justify-between items-center h-[10%] p-2 ${theme === 'light' ? 'bg-[#f9f9f9]' : 'bg-[#15181f]'}`}>
            {
                theme === 'light' ? (
                    <img 
                        src="/LogoLight.png" 
                        alt="Logo" 
                        className="w-[30%] md:w-[20%] lg:w-[15%] ml-4" 
                    />
                ) : (
                    <img 
                        src="/LogoDark.png" 
                        alt="Logo" 
                        className="w-[30%] md:w-[20%] lg:w-[15%] ml-4" 
                    />
                )
            }
            <div className="flex flex-row rounded-full max-w-xs h-10 bg-[#DDDDDD] mx-2 md:mx-10">
                <button
                    onClick={() => toggleTheme('light')}
                    className={`flex flex-row gap-1 p-2 text-[1rem] md:text-[1.2rem] w-[50%] rounded-full focus:outline-none ${theme === 'light' ? 'bg-[#FFC55A] text-black' : 'text-black'}`}
                >
                    <img src="/LightMode.png" alt="Light Mode" className="w-5 h-5 md:w-6 md:h-6" />
                    Light
                </button>
                <button
                    onClick={() => toggleTheme('dark')}
                    className={`flex flex-row gap-1 p-2 text-[1rem] md:text-[1.2rem] w-[50%] rounded-full focus:outline-none ${theme === 'dark' ? 'bg-[#FFC55A] text-black' : 'text-black'}`}
                >
                    <img src="/DarkMode.png" alt="Dark Mode" className="w-5 h-5 md:w-6 md:h-6" />
                    Dark
                </button>
            </div>
        </div>
    );
};

export default Navbar;
