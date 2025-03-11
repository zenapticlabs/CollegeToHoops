import React, { useState } from 'react';

function QuestionnaireForm() {
    const [questionnaireData, setQuestionnaireData] = useState({
        
    });
    
    const handleChange = (e) => {
        const { id, value } = e.target;
        setQuestionnaireData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };
   const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(questionnaireData)
    }
    return (
        <>
            <form className="w-[60%] max-lg:w-full max-lg:flex max-lg:justify-center max-lg:items "  >
                
                <div className="flex flex-wrap mb-6 max-lg:w-[95%] ">
                    <div className="w-[50%] px-3 mb-7 max-lg:mb-2">
                        <label className="block tracking-wide text-[#FFFFFF] text-[14px] font-normal leading-5" htmlFor="fullName">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                        onInput={handleChange}
                            className="h-[48px] pt-4  block w-full bg-[#FFFFFF] text-[14px] font-normal text-gray-700 border border-[#E6E6E7] rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                            id="fullName"
                            type="text"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className="w-[50%] px-3 mb-7 max-lg:mb-2">
                        <label className="block tracking-wide text-[#FFFFFF] text-[14px] font-normal leading-5" htmlFor="age">
                            Age <span className="text-red-500">*</span>
                        </label>
                        <input
                         onInput={handleChange}
                            className="h-[48px] pt-4  block w-full bg-[#FFFFFF] text-[14px] font-normal text-gray-700 border border-[#E6E6E7] rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                            id="age"
                            type="number"
                            placeholder="17"
                        />
                    </div>
                    <div className="w-full px-3 mb-7 max-lg:mb-2">
                        <label className="block tracking-wide text-[#FFFFFF] text-[14px] font-normal leading-5" htmlFor="email">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                         onInput={handleChange}
                            className="h-[48px] pt-4 block w-full bg-[#FFFFFF] text-[14px] font-normal text-gray-700 border border-[#E6E6E7] rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                        />
                    </div>
                    <div className="w-[50%] px-3 mb-7 max-lg:mb-2">
                        <label className="block tracking-wide text-[#FFFFFF] text-[14px] font-normal leading-5" htmlFor="height">
                            Height <span className="text-red-500">*</span>
                        </label>
                        <input
                         onInput={handleChange}
                            className="h-[48px] pt-4  block w-full bg-[#FFFFFF] text-[14px] font-normal text-gray-700 border border-[#E6E6E7] rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                            id="height"
                            type="text"
                            placeholder="ft"
                        />
                    </div>
                    <div className="w-[50%] px-3 mb-7 max-lg:mb-2">
                        <label className="block tracking-wide text-[#FFFFFF] text-[14px] font-normal leading-5" htmlFor="weight">
                            Weight <span className="text-red-500">*</span>
                        </label>
                        <input
                         onInput={handleChange}
                            className="h-[48px] pt-4  block w-full bg-[#FFFFFF] text-[14px] font-normal text-gray-700 border border-[#E6E6E7] rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                            id="weight"
                            type="text"
                            placeholder="lb"
                        />
                    </div>
                    <div className="w-[50%] px-3 mb-7 max-lg:mb-2">
                        <label className="block tracking-wide text-[#FFFFFF] text-[14px] font-normal leading-5" htmlFor="currentSchool">
                            Current School <span className="text-red-500">*</span>
                        </label>
                        <input
                         onInput={handleChange}
                            className="h-[48px] pt-4 block w-full bg-[#FFFFFF] text-[14px] font-normal text-gray-700 border border-[#E6E6E7] rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                            id="currentSchool"
                            type="text"
                            placeholder="Enter your school name"
                        />
                    </div>
                    <div className="w-[50%] px-3 mb-7 max-lg:mb-2">
                        <label className="block tracking-wide text-[#FFFFFF] text-[14px] font-normal leading-5" htmlFor="graduationYear">
                            Graduation Year <span className="text-red-500">*</span>
                        </label>
                        <input
                         onInput={handleChange}
                            className="h-[48px] pt-4  block w-full bg-[#FFFFFF] text-[14px] font-normal text-gray-700 border border-[#E6E6E7] rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                            id="graduationYear"
                            type="text"
                            placeholder="Select a year"
                        />
                    </div>
                    <div className="w-full px-3 mb-7 max-lg:mb-2">
                        <label className="block text-[#FFFFFF] text-[14px] font-normal leading-5" htmlFor="basketBallProfile">
                            Describe your basketball profile <span className="text-red-500">*</span>
                        </label>
                        <textarea
                         onInput={handleChange}
                            className="h-[48px] pt-4  block  w-full bg-[#FFFFFF] text-[14px] font-normal text-gray-700 border border-[#E6E6E7] rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                            id="basketBallProfile"
                            placeholder="Current Position, Skill Level (Varsity, AAU, Club, etc.)"
                        ></textarea>
                    </div>
                    <div className="w-full px-3 mb-7 max-lg:mb-2">
                        <label className="block text-[#FFFFFF] text-[14px] font-normal leading-5" htmlFor="collegeProgram">
                            What Are You Looking for in a College Program? <span className="text-red-500">*</span>
                        </label>
                        <textarea
                         onInput={handleChange}
                            className="h-[48px] pt-4  block w-full bg-[#FFFFFF] text-[14px] font-normal text-gray-700 border border-[#E6E6E7] rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                            id="collegeProgram"
                            placeholder="Type your message"
                        ></textarea>
                    </div>
                   <div className="w-full px-3  mb-7 flex justify-end max-lg:justify-center max-lg:pt-7">
                    <span className="border-grad  rounded-[8px] max-lg:!w-[100%] ">
                        <button className="bg-orange-500 text-[#FFFFFF] font-semibold py-2 px-4  text-[20px] leading-6 rounded-[8px] max-lg:!w-[100%] h-[56px] pt-[14px] " onClick={handleSubmit} type='submit'>
                            Submit
                        </button>
                        </span>
                    </div>
                </div>
            </form>
        </>
    );
}

export default QuestionnaireForm;