import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function Header() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <nav className="flex justify-between items-center px-8 py-8 border-b border-b-gray-200 sticky top-0 bg-white/80 backdrop-blur-sm">
                {/* logo */}
                <div>
                    <h1 className="text-4xl font-bold">Doctor</h1>
                </div>

                {/* dropdown menu */}
                <div onClick={() => setOpen(!open)} className="text-3xl ">
                    {open ? (
                        <RxCross2 className="lg:hidden" />
                    ) : (
                        <IoMenu className="lg:hidden" />
                    )}
                </div>
                {open && (
                    <div className="absolute right-2 top-20 bg-white">
                        <ul className="flex flex-col gap-3 items-center px-8 py-8 border border-gray-200 text-base font-medium text-gray-500 rounded-lg shadow-2xl">
                            <li>
                                <a href="#banner">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#education">Education</a>
                            </li>
                            <li>
                                <a href="#internship">Internship</a>
                            </li>
                            <li>
                                <a href="#skills">Skills</a>
                            </li>
                            <li>
                                <a href="#interest">Interest</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                )}
                {/* links */}
                <ul className="hidden lg:flex items-center space-x-10 text-xl font-medium text-gray-500">
                    <li>
                        <a href="#banner">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#education">Education</a>
                    </li>
                    <li>
                        <a href="#internship">Internship</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#interest">Interest</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Header;
