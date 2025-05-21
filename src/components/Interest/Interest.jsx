import React from "react";
import { SiCircle } from "react-icons/si";

function Interest() {
    return (
        <>
            {/* container */}
            <div id="interest" className="scroll-mt-32 mt-25 lg:mt-15 w-full max-w-4xl mx-auto space-y-4 lg:space-y-8 px-10 lg:px-0">
                <h1 className="flex items-center gap-3 text-4xl lg:text-5xl font-bold"><span className="text-3xl text-blue-400"><SiCircle /></span> Career Interests</h1>
                <div className="rounded-lg shadow-2xl p-5 border border-gray-100">
                    <p className="text-base lg:text-lg font-medium text-gray-500">
                        I am particularly interested in pursuing a career in Internal Medicine with a potential specialization in Cardiology. I am drawn to the diagnostic challenges and the opportunity to develop long-term relationships with patients while managing complex medical conditions. I am also interested in medical education and hope to eventually contribute to teaching and mentoring future medical professionals. In the short term, I am seeking residency opportunities that will provide comprehensive training in internal medicine and exposure to cardiology.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Interest;
