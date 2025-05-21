import React from "react";

function About() {
    return (
        <>
            {/* container */}
            <div id="about" className="scroll-mt-32 mt-25 lg:mt-15 w-full max-w-4xl mx-auto space-y-4 lg:space-y-8 px-10 lg:px-0">
                <h1 className="text-4xl lg:text-5xl font-bold">About</h1>
                <div className="rounded-lg shadow-2xl p-5 border border-gray-100">
                    <p className="text-base lg:text-lg lg:font-medium text-gray-500">
                        I am a recent MBBS graduate with a passion for patient care and
                        evidence-based medicine. During my internship, I gained valuable
                        hands-on experience across multiple departments, developing strong
                        diagnostic skills and a patient-centered approach to healthcare. I
                        am eager to begin my medical career and contribute to improving
                        healthcare outcomes while continuing to expand my clinical knowledge
                        and skills.
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;
