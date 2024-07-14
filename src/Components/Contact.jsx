// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Link } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";



// const Contact = ({ theme }) => {

//     const [data, setData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });

//     const handleChange = (e) => {
//         setData({ ...data, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch('https://formspree.io/f/mrbzgwap', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ name, email, phone, message }),
//         });

//         if (response.ok) {
//             toast.success('Message sent successfully');
//             } else {
//             toast.error('Message not sent');
//         }
//       };

//       const isDisabled = name === '' || email === '' || phone === '' || message === '';

//     return (
//         <>
//             <div className={`relative w-full m-4 rounded-lg shadow-md ${theme === 'light' ? 'bg-[#F5F7F8] text-black' : 'bg-[#2c2f33] text-white'}`}>
//                 <div className="flex flex-col p-4">
//                     <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
//                         <div className="flex flex-row gap-1 items-center justify-center">
//                             <ChevronLeft size={26} style={{ color: '#80AF81' }} />
//                             <hr className="border-[0.15rem] w-[12.5rem] rounded-lg border-[#80AF81]" />
//                         </div>
//                         <h2 className={`text-[2.4rem] font-medium ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
//                             Contact
//                         </h2>
//                         <div className="flex flex-row gap-1 items-center justify-center">
//                             <hr className="border-[0.15rem] w-[12.5rem] rounded-lg border-[#80AF81]" />
//                             <ChevronRight size={26} style={{ color: '#80AF81' }} />
//                         </div>
//                     </div>
//                     <br />
//                     <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 my-4">
//                         <div className={`w-full lg:w-[35%] ml-0 lg:ml-6 shadow-sm rounded-lg ${theme === 'light' ? 'box-glow-light' : 'box-glow-dark'}`}>
//                             <h2 className={`text-center text-[1.5rem] p-4 font-medium ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
//                                 Contact Information
//                             </h2>
//                             <div className="flex flex-col gap-4 p-4">
//                                 <div className="flex flex-row gap-4 items-center">
//                                     <img src="/email.png" alt="Email" className="w-8 h-8" />
//                                     <p className={`text-[1rem] ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
//                                         shivamk08001@gmail.com
//                                     </p>
//                                 </div>
//                                 <div className="flex flex-row gap-4 items-center">
//                                     <img src="/phone.png" alt="Phone" className="w-8 h-8" />
//                                     <p className={`text-[1rem] ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
//                                         +91 9354141450
//                                     </p>
//                                 </div>
//                                 <div className="flex flex-row gap-4 items-center">
//                                     <img src="/address.png" alt="Location" className="w-8 h-8" />
//                                     <p className={`text-[1rem] ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
//                                         Delhi, India
//                                     </p>
//                                 </div>
//                                 <hr className={`w-full mt-10 border-1 ${theme === 'light' ? 'border-gray-300' : 'border-gray-600'}`} />
//                                 <div className="flex flex-col gap-2">
//                                     <h2 className={`text-[1.4rem] pl-2 ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
//                                         Social Media :
//                                     </h2>
//                                     <div className="flex flex-row gap-4 items-center pl-2">
//                                         <Link to="https://www.linkedin.com/in/shivam-b53a201b8" target="_blank" rel="noreferrer">
//                                             <img src="/linkedin.png" alt="LinkedIn" className="w-10 h-10" />
//                                         </Link>
//                                         <Link to="https://www.instagram.com/shivam_rai_802" target="_blank" rel="noreferrer">
//                                             <img src="/instagram.png" alt="Instagram" className="w-10 h-10" />
//                                         </Link>
//                                         <Link to="https://x.com/Shivam_01_02" target="_blank" rel="noreferrer">
//                                             <img src="/twitter.png" alt="Twitter" className="w-10 h-10" />
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className={`flex flex-col gap-4 w-full lg:w-[55%] rounded-lg shadow-sm p-4 ${theme === 'light' ? 'box-glow-light' : 'box-glow-dark'}`}>
//                             <h2 className={`text-[1.5rem] text-center font-medium ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
//                                 Contact Me
//                             </h2>
//                             <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
//                                 <div className="flex flex-col">
//                                     <label htmlFor="name" className={`text-[1.3rem] pl-2 ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>Name :</label>
//                                     <input
//                                         type="text"
//                                         name="name"
//                                         placeholder="Name"
//                                         onChange={handleChange}
//                                         className="p-2 pl-4 rounded-lg text-gray-700" />
//                                 </div>
//                                 <div className="flex flex-col">
//                                     <label htmlFor="email" className={`text-[1.3rem] pl-2 ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>Email :</label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         placeholder="Email"
//                                         onChange={handleChange}
//                                         className="p-2 pl-4 rounded-lg text-gray-700" />
//                                 </div>
//                                 <div className="flex flex-col">
//                                     <label htmlFor="message" className={`text-[1.3rem] pl-2 ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>Message :</label>
//                                     <textarea
//                                         name="message"
//                                         placeholder="Type your message here...."
//                                         onChange={handleChange}
//                                         className="p-2 pl-4 rounded-lg text-gray-700" />
//                                 </div>
//                                 <button className="p-2 mt-2 rounded-lg bg-[#80AF81] text-white hover:bg-[#5F8C6A]" disabled={isDisabled}>
//                                     Submit
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <style jsx>{`
//                 .box-glow-light {
//                     box-shadow: 0 0 15px 5px rgb(48 59 48 / 50%);
//                 }
//                 .box-glow-dark {
//                     box-shadow: 0 0 15px 5px rgb(80 80 80 / 50%);
//                 }
//             `}</style>
//         </>
//     )
// }

// export default Contact;

// file path: src/Contact.js

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ theme }) => {
    const [data, setData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, message } = data;
        const response = await fetch('https://formspree.io/f/mrbzgwap', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            toast.success('Message sent successfully');
            setData({ name: '', email: '', message: '' });
        } else {
            toast.error('Message not sent');
        }
    };

    const { name, email, message } = data;
    const isDisabled = name === '' || email === '' || message === '';

    return (
        <>
            <div className={`relative w-full m-4 rounded-lg shadow-md ${theme === 'light' ? 'bg-[#F5F7F8] text-black' : 'bg-[#2c2f33] text-white'}`}>
                <div className="flex flex-col p-4">
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <div className="flex flex-row gap-1 items-center justify-center">
                            <ChevronLeft size={26} style={{ color: '#80AF81' }} />
                            <hr className="border-[0.15rem] w-[12.5rem] rounded-lg border-[#80AF81]" />
                        </div>
                        <h2 className={`text-[2.4rem] font-medium ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                            Contact
                        </h2>
                        <div className="flex flex-row gap-1 items-center justify-center">
                            <hr className="border-[0.15rem] w-[12.5rem] rounded-lg border-[#80AF81]" />
                            <ChevronRight size={26} style={{ color: '#80AF81' }} />
                        </div>
                    </div>
                    <br />
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 my-4">
                        <div className={`w-full lg:w-[35%] ml-0 lg:ml-6 shadow-sm rounded-lg ${theme === 'light' ? 'box-glow-light' : 'box-glow-dark'}`}>
                            <h2 className={`text-center text-[1.5rem] p-4 font-medium ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                                Contact Information
                            </h2>
                            <div className="flex flex-col gap-4 p-4">
                                <div className="flex flex-row gap-4 items-center">
                                    <img src="/email.png" alt="Email" className="w-8 h-8" />
                                    <p className={`text-[1rem] ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                                        shivamk08001@gmail.com
                                    </p>
                                </div>
                                <div className="flex flex-row gap-4 items-center">
                                    <img src="/phone.png" alt="Phone" className="w-8 h-8" />
                                    <p className={`text-[1rem] ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                                        +91 9354141450
                                    </p>
                                </div>
                                <div className="flex flex-row gap-4 items-center">
                                    <img src="/address.png" alt="Location" className="w-8 h-8" />
                                    <p className={`text-[1rem] ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                                        Delhi, India
                                    </p>
                                </div>
                                <hr className={`w-full mt-10 border-1 ${theme === 'light' ? 'border-gray-300' : 'border-gray-600'}`} />
                                <div className="flex flex-col gap-2">
                                    <h2 className={`text-[1.4rem] pl-2 ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                                        Social Media :
                                    </h2>
                                    <div className="flex flex-row gap-4 items-center pl-2">
                                        <Link to="https://www.linkedin.com/in/shivam-b53a201b8" target="_blank" rel="noreferrer">
                                            <img src="/linkedin.png" alt="LinkedIn" className="w-10 h-10" />
                                        </Link>
                                        <Link to="https://www.instagram.com/shivam_rai_802" target="_blank" rel="noreferrer">
                                            <img src="/instagram.png" alt="Instagram" className="w-10 h-10" />
                                        </Link>
                                        <Link to="https://x.com/Shivam_01_02" target="_blank" rel="noreferrer">
                                            <img src="/twitter.png" alt="Twitter" className="w-10 h-10" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`flex flex-col gap-4 w-full lg:w-[55%] rounded-lg shadow-sm p-4 ${theme === 'light' ? 'box-glow-light' : 'box-glow-dark'}`}>
                            <h2 className={`text-[1.5rem] text-center font-medium ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                                Contact Me
                            </h2>
                            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <label htmlFor="name" className={`text-[1.3rem] pl-2 ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>Name :</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        onChange={handleChange}
                                        className="p-2 pl-4 rounded-lg text-gray-700" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className={`text-[1.3rem] pl-2 ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>Email :</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        onChange={handleChange}
                                        className="p-2 pl-4 rounded-lg text-gray-700" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="message" className={`text-[1.3rem] pl-2 ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>Message :</label>
                                    <textarea
                                        name="message"
                                        placeholder="Type your message here...."
                                        onChange={handleChange}
                                        className="p-2 pl-4 rounded-lg text-gray-700" />
                                </div>
                                <button className="p-2 mt-2 rounded-lg bg-[#80AF81] text-white hover:bg-[#5F8C6A]" disabled={isDisabled}>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
            <style jsx>{`
                .box-glow-light {
                    box-shadow: 0 0 15px 5px rgb(48 59 48 / 50%);
                }
                .box-glow-dark {
                    box-shadow: 0 0 15px 5px rgb(80 80 80 / 50%);
                }
            `}</style>
        </>
    );
}

export default Contact;
