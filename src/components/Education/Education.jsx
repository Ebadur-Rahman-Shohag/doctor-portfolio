import React from "react";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
    return (
        <>
            {/* container */}
            <div id="education" className="scroll-mt-32 mt-25 lg:mt-15 w-full max-w-4xl mx-auto space-y-4 lg:space-y-8 px-10 lg:px-0">
                <h1 className="flex items-center gap-3 text-4xl lg:text-5xl font-bold"><span className="text-blue-400 text-3xl"><FaGraduationCap /></span> Education</h1>
                <div className="rounded-lg shadow-2xl p-5 border border-gray-100 space-y-8">
                    {/* mbbs */}
                    <div >
                        <h1 className="text-lg font-bold">Bachelor of Medicine, Bachelor of Surgery (MBBS)</h1>
                        <p className="text-blue-500 text-base">University Medical College</p>
                        <p cla>University of Medical Sciences</p>
                        <p>2016 - 2022</p>
                    </div>
                    {/* Hsc */}
                    <div className="">
                        <h1 className="text-lg font-bold">Higher Secondary Certificate (HSC)</h1>
                        <p className="text-blue-500">University of Medical Sciences</p>
                        <p>2016 - 2022</p>
                    </div>
                    {/* <div></div> */}
                </div>
            </div>
        </>
    );
}

export default Education;
