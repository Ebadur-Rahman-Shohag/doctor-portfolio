import React from "react";
import { CiMail } from "react-icons/ci";
import { FaLinkedin, FaPhoneVolume } from "react-icons/fa";

function Contact() {
    return (
        <>
            {/* container */}
            <div id="contact" className="scroll-mt-32 mt-25 lg:mt-15 w-full max-w-4xl mx-auto space-y-4 lg:space-y-8 px-10 lg:px-0">
                <h1 className="text-4xl lg:text-5xl font-bold">Contact Me</h1>
                {/* card container */}
                <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-0 lg:items-stretch space-x-0 lg:space-x-5">
                    {/* card */}
                    <div className="space-y-5 w-full space-x-5 rounded-lg shadow-2xl p-5 border border-gray-100">
                        <h1 className="text-lg font-bold">Contact Information</h1>
                        <div className="space-y-5 text-base font-medium">
                            <p className="flex items-center gap-2">
                                <span >
                                    <CiMail />
                                </span>
                                johndoe@example.com
                            </p>
                            <p className="flex items-center gap-2">
                                <span >
                                    <FaPhoneVolume />
                                </span>
                                +1 (555) 123-4567
                            </p>
                            <p className="flex items-center text-blue-500 gap-2" >
                                <span >
                                    <FaLinkedin />
                                </span>
                                <a href="">LinkedIn Profile</a>
                            </p>
                        </div>
                    </div>
                    {/* card */}
                    <div className="space-y-5 w-full space-x-5 rounded-lg shadow-2xl p-5 border border-gray-100">
                        <h1 className="text-lg font-bold">Send a Message</h1>
                        <div>
                            <form className="flex flex-col" action="">
                                <label htmlFor="name">Name</label>
                                <input className="border border-gray-300 py-2 px-2 rounded-lg" type="text" placeholder="Enter Your Name" />
                                <label htmlFor="name">Email</label>
                                <input className="border border-gray-300 px-2 py-2 rounded-lg" type="email" placeholder="Enter Your Email" />
                                <label htmlFor="message">Message</label>
                                <textarea className="border border-gray-300 px-2 py-2 rounded-lg" placeholder="Enter Your Message" />
                                <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded mt-5">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
