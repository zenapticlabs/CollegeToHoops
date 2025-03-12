import React, { useState } from 'react';

const Token = import.meta.env.PUBLIC_ACCESS_TOKEN;

function QuestionnaireForm() {
    const [questionnaireData, setQuestionnaireData] = useState({
        fullName: '',
        age: '',
        email: '',
        height: '',
        weight: '',
        current_school: '',
        graduation_year: '',
        basketball_profile: '',
        college_program: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setQuestionnaireData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedQuestionnaireData = {
            ...questionnaireData,
            QUESTIONNAIRE_FILLED: true
        };

        fetch(`https://hook.us2.make.com/${Token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedQuestionnaireData),
        })
        .then((response) => {
            console.log(response);
            if (response.ok) {
                setQuestionnaireData({
                    fullName: '',
                    age: '',
                    email: '',
                    height: '',
                    weight: '',
                    current_school: '',
                    graduation_year: '',
                    basketball_profile: '',
                    college_program: ''
                });
            } else {
                console.error('Failed to submit form');
            }
        })
        .catch((error) => {
            console.error('Error:', error.message);
        });
    };

    return (
        <>
            <form className="w-[60%] max-lg:w-full max-lg:flex max-lg:justify-center max-lg:items" onSubmit={handleSubmit}>
                <div className="flex flex-wrap mb-6 max-lg:w-[95%]">
                    <div className="w-[50%] px-3 mb-7 max-lg:mb-2">
                        <label className="block tracking-wide text-[#FFFFFF] text-[14px] font-normal leading-5" htmlFor="fullName">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            onChange={handleChange}
                            className="h-[48px] pt-4 block w-full bg-[#FFFFFF] text-[14px] font-normal text-gray-700 border border-[#E6E6E7] rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                            id="fullName"
                            type="text"
                            placeholder="Enter your full name"
                            value={questionnaireData.fullName}
                        />
                    </div>

                    <div className="w-[50%] px-3 mb-7 max-lg:mb-2">
                        <label className="block tracking-wide text-[#FFFFFF] text-[14px] font-normal leading-5" htmlFor="age">
                            Age <span className="text-red-500">*</span>
                        </label>
                        <input
                            onChange={handleChange}
                            className="h-[48px] pt-4 block w-full bg-[#FFFFFF] text-[14px] font-normal text-gray-700 border border-[#E6E6E7] rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                            id="age"
                            type="number"
                            placeholder="17"
                            value={questionnaireData.age}
                        />
                    </div>

                    <div className="w-full px-3 mb-7 max-lg:mb-2">
                        <label className="block tracking-wide text-[#FFFFFF] text-[14px] font-normal leading-5" htmlFor="email">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            onChange={handleChange}
                            className="h-[48px] pt-4 block w-full bg-[#FFFFFF] text-[14px] font-normal text-gray-700 border border-[#E6E6E7] rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            value={questionnaireData.email}
                        />
                    </div>

                    <div className="w-[50%] px-3 mb-7 max-lg:mb-2">
                        <label className="block tracking-wide text-[#FFFFFF] text-[14px] font-normal leading-5" htmlFor="height">
                            Height <span className="text-red-500">*</span>
                        </label>
                        <input
                            onChange={handleChange}
                            className="h-[48px] pt-4 block w-full bg-[#FFFFFF] text-[14px] font-normal text-gray-700 border border-[#E6E6E7] rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                            id="height"
                            type="text"
                            placeholder="ft"
                            value={questionnaireData.height}
                        />
                    </div>

                    <div className="w-[50%] px-3 mb-7 max-lg:mb-2">
                        <label className="block tracking-wide text-[#FFFFFF] text-[14px] font-normal leading-5" htmlFor="weight">
                            Weight <span className="text-red-500">*</span>
                        </label>
                        <input
                            onChange={handleChange}
                            className="h-[48px] pt-4 block w-full bg-[#FFFFFF] text-[14px] font-normal text-gray-700 border border-[#E6E6E7] rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                            id="weight"
                            type="number"
                            placeholder="lb"
                            value={questionnaireData.weight}
                        />
                    </div>

                    <div className="w-[50%] px-3 mb-7 max-lg:mb-2">
                        <label className="block tracking-wide text-[#FFFFFF] text-[14px] font-normal leading-5" htmlFor="current_school">
                            Current School <span className="text-red-500">*</span>
                        </label>
                        <input
                            onChange={handleChange}
                            className="h-[48px] pt-4 block w-full bg-[#FFFFFF] text-[14px] font-normal text-gray-700 border border-[#E6E6E7] rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                            id="current_school"
                            type="text"
                            placeholder="Enter your school name"
                            value={questionnaireData.current_school}
                        />
                    </div>

                    <div className="w-[50%] px-3 mb-7 max-lg:mb-2">
                        <label className="block tracking-wide text-[#FFFFFF] text-[14px] font-normal leading-5" htmlFor="graduation_year">
                            Graduation Year <span className="text-red-500">*</span>
                        </label>
                        <input
                            onChange={handleChange}
                            className="h-[48px] pt-4 block w-full bg-[#FFFFFF] text-[14px] font-normal text-gray-700 border border-[#E6E6E7] rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                            id="graduation_year"
                            type="text"
                            placeholder="Select a year"
                            value={questionnaireData.graduation_year}
                        />
                    </div>

                    <div className="w-full px-3 mb-7 max-lg:mb-2">
                        <label className="block text-[#FFFFFF] text-[14px] font-normal leading-5" htmlFor="basketball_profile">
                            Describe your basketball profile <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            onChange={handleChange}
                            className="h-[48px] pt-4 block w-full bg-[#FFFFFF] text-[14px] font-normal text-gray-700 border border-[#E6E6E7] rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                            id="basketball_profile"
                            placeholder="Current Position, Skill Level (Varsity, AAU, Club, etc.)"
                            value={questionnaireData.basketball_profile}
                        ></textarea>
                    </div>

                    <div className="w-full px-3 mb-7 max-lg:mb-2">
                        <label className="block text-[#FFFFFF] text-[14px] font-normal leading-5" htmlFor="college_program">
                            What Are You Looking for in a College Program? <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            onChange={handleChange}
                            className="h-[48px] pt-4 block w-full bg-[#FFFFFF] text-[14px] font-normal text-gray-700 border border-[#E6E6E7] rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                            id="college_program"
                            placeholder="Type your message"
                            value={questionnaireData.college_program}
                        ></textarea>
                    </div>

                    <div className="w-full px-3 mb-7 flex justify-end max-lg:justify-center max-lg:pt-7">
                        <span className="border-grad rounded-[8px] max-lg:!w-[100%]">
                            <button
                                className="bg-orange-500 text-[#FFFFFF] font-semibold py-2 px-4 text-[20px] leading-6 rounded-[8px] max-lg:!w-[100%] h-[56px] pt-[14px]"
                                type="submit"
                            >
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
