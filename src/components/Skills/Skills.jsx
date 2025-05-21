import React from "react";
import { CiStethoscope } from "react-icons/ci";

function Skills() {
    return (
        <>
            {/* container */}
            <div id="skills" className="scroll-mt-32 mt-25 lg:mt-15 w-full max-w-4xl mx-auto space-y-4 lg:space-y-8 px-10 lg:px-0">
                <h1 className="flex items-center gap-3 text-4xl lg:text-5xl font-bold"><span className="text-blue-400 text-3xl"><CiStethoscope /></span> Clinical Skills</h1>
                {/* card container */}
                <div className="w-full flex flex-col gap-5 lg:gap-0 lg:flex-row items-stretch lg:space-x-5">
                    {/* card */}
                    <div className=" space-y-5 w-full space-x-5 rounded-lg shadow-2xl p-5 border border-gray-100">
                        <h1 className="text-lg font-bold">Medical Skills</h1>
                        <div>
                            <ul className="list-disc pl-5 text-gray-500 space-y-3">
                                <li>Patient examination and history taking</li>
                                <li>Patient examination and history taking</li>
                                <li>Patient examination and history taking</li>
                            </ul>
                        </div>
                    </div>
                    {/* card */}
                    <div className="space-y-5 w-full space-x-5 rounded-lg shadow-2xl p-5 border border-gray-100">
                        <h1 className="text-lg font-bold">Soft Skills</h1>
                        <div>
                            <ul className="list-disc pl-5 text-gray-500 space-y-3">
                                <li>Patient examination and history taking</li>
                                <li>Patient examination and history taking</li>
                                <li>Patient examination and history taking</li>
                                <li>Patient examination and history taking</li>
                                <li>Patient examination and history taking</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;
