import React from "react";
import { CiMail } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa";
import doctorImage from "../../assets/doctor.jpg";

function Banner() {
    return (
        <>
            {/* container */}
            <div id="banner" className="scroll-mt-32 mt-10 lg:mt-0 w-full container  mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 h-auto lg:h-screen px-0 lg:px-6 xl:px-0">
                {/* left side */}
                <div className="w-full lg:w-1/2 space-y-5">
                    <h1 className="text-4xl lg:text-5xl text-center lg:text-left font-bold">John Doe</h1>
                    <p className="text-base lg:text-xl text-center lg:text-left  font-medium text-gray-500">Recent MBBS Graduate | Aspiring Medical Practitioner</p>
                    <p className="flex flex-col lg:flex-row items-center text-base lg:text-lg lg:text-left  space-x-5 text-gray-500">
                        <span className="flex items-center gap-2">
                            <CiMail className="text-black" /> johndoe@example.com
                        </span>
                        <span className="flex items-center gap-2">
                            <FaPhoneVolume />
                            (555) 123-4567
                        </span>
                    </p>
                    <div className="text-center lg:text-left">
                        <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded">LinkedIn Profile</button>
                    </div>
                </div>
                {/* right side */}
                <div className="w-full lg:w-1/2 h-[350px] lg:h-[300px] xl:h-[400px] flex items-center justify-center lg:justify-end px-4 lg:px-0">
                    <img className="w-full lg:w-4/6 h-full object-cover object-[25%_20%] rounded-full" src={doctorImage} alt="a doctor" />
                </div>
            </div>

        </>
    );
}

export default Banner;
