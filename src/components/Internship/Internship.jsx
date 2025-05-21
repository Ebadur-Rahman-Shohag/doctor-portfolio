import React from "react";
import { IoBagAddOutline } from "react-icons/io5";

function Internship() {
    return (
        <>
            {/* container */}
            <div id="internship" className="scroll-mt-32 mt-25 lg:mt-15 w-full max-w-4xl mx-auto space-y-4 lg:space-y-8 px-10 lg:px-0">
                <h1 className="flex items-center gap-3 text-4xl lg:text-5xl font-bold">
                    <span className="text-blue-400 text-3xl">
                        <IoBagAddOutline />
                    </span>
                    Internship Experience
                </h1>
                <div className="space-y-5 rounded-lg shadow-2xl p-5 border border-gray-100">
                    <div>
                        <h1 className="text-lg font-bold ">Internship Experience</h1>
                        <p className="text-blue-500">Hospital Name</p>
                        <p className="text-gray-500">January 2022 - December 2022</p>
                    </div>
                    <div>
                        <p className="text-base text-gray-500">
                            Completed rotations in the following departments:
                        </p>
                    </div>
                    <div>
                        <ul className="list-disc pl-5 space-y-3 text-gray-500">
                            <li>
                                Internal Medicine (3 months) - Managed inpatient care,
                                participated in rounds, and assisted with procedures
                            </li>
                            <li>
                                Internal Medicine (3 months) - Managed inpatient care,
                                participated in rounds, and assisted with procedures
                            </li>
                            <li>
                                Internal Medicine (3 months) - Managed inpatient care,
                                participated in rounds, and assisted with procedures
                            </li>
                            <li>
                                Internal Medicine (3 months) - Managed inpatient care,
                                participated in rounds, and assisted with procedures
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Internship;
