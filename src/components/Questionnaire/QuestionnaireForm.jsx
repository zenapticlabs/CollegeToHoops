import React, { useState } from 'react';

const Token = import.meta.env.PUBLIC_WEBHOOK_TOKEN;

function QuestionnaireForm() {
    const [toastMessage, setToastMessage] = useState("")
    const [toastStatus, setToastStatus] = useState("")
    const [questionnaireData, setQuestionnaireData] = useState({
        name: '',
        age: null,
        email: '',
        height: null,
        weight: null,
        position: '',
        dob: '',
        current_school: '',
        graduation_year: null,
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

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(questionnaireData.email)) {
            setToastMessage("Please enter a valid email address.");
            setToastStatus("failed");
            document.getElementById("toast").style.display = "flex";
            document.getElementById('header').scrollIntoView({ behavior: 'smooth' })

        }
        else{
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
                document.getElementById("toast").style.display = "flex";
                if (response.ok) {
                    setToastMessage("Thank you! Your details have been received!");
                    setToastStatus("success");
                    setQuestionnaireData({
                        name: '',
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
                    setToastMessage("We encountered an issue while submitting your details. Please try again.");
                    setToastStatus("failed");
                }
                document.getElementById('header').scrollIntoView({ behavior: 'smooth' })

            })
            .catch((error) => {
                console.error('Error:', error.message);
            });
        }       
    };

    const hideToast = () => {
        document.getElementById("toast").style.display = "none";
    };
    return (
        <>
            <form className="w-[60%] max-lg:w-full max-lg:flex max-lg:justify-center max-lg:items relative" >
                <div id="toast" className="hidden items-center min-h-[50px] absolute w-[96%] max-lg:w-[95%] top-[-66px] mx-[2%] h-8 p-4 mb-4  text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800" role="alert">
                    {toastStatus === "success" && <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span className="sr-only">Check icon</span>
                    </div>}
                    {toastStatus === "failed" && <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
                        </svg>
                        <span className="sr-only">Error icon</span>
                    </div>}

                    <div className="ms-3 text-[18px] max-lg:text-[14px] font-semibold pt-[7px] " id='toast'>{toastMessage}</div>
                    <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close" onClick={hideToast}>
                        <span className="sr-only">Close</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>
                </div>
                <div className="flex flex-wrap mb-6 max-lg:w-full">
                    <div className="w-[50%] px-3 max-lg:mb-2">
                        <label className="block tracking-wide text-[#FFFFFF] text-[14px] font-normal leading-5" htmlFor="name">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            onChange={handleChange}
                            className="h-[48px] pt-4 block w-full bg-[#FFFFFF] text-[14px] font-normal text-gray-700 border border-[#E6E6E7] rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            value={questionnaireData.name}
                        />
                    </div>

                    <div className="w-[50%] px-3 max-lg:mb-2">
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

                    <div className="w-full px-3 max-lg:mb-2">
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

                    <div className="w-[50%] px-3 max-lg:mb-2">
                        <label className="block tracking-wide text-[#FFFFFF] text-[14px] font-normal leading-5" htmlFor="height">
                            Height <span className="text-red-500">*</span>
                        </label>
                        <input
                            onChange={handleChange}
                            className="h-[48px] pt-4 block w-full bg-[#FFFFFF] text-[14px] font-normal text-gray-700 border border-[#E6E6E7] rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                            id="height"
                            type="number"
                            step="0.1"
                            placeholder="Ft.In (5.11)"
                            value={questionnaireData.height}
                        />
                    </div>

                    <div className="w-[50%] px-3 max-lg:mb-2">
                        <label className="block tracking-wide text-[#FFFFFF] text-[14px] font-normal leading-5" htmlFor="weight">
                            Weight <span className="text-red-500">*</span>
                        </label>
                        <input
                            onChange={handleChange}
                            className="h-[48px] pt-4 block w-full bg-[#FFFFFF] text-[14px] font-normal text-gray-700 border border-[#E6E6E7] rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                            id="weight"
                            type="number"
                            step="1"
                            placeholder="lb"
                            value={questionnaireData.weight}
                        />
                    </div>
                    <div className="w-[50%] px-3 max-lg:mb-2">
                        <label className="block tracking-wide text-[#FFFFFF] text-[14px] font-normal leading-5" htmlFor="weight">
                            Date of Birth <span className="text-red-500">*</span>
                        </label>
                        <input
                            onChange={handleChange}
                            className="h-[48px] pt-4 block w-full bg-[#FFFFFF] text-[14px] font-normal text-gray-700 border border-[#E6E6E7] rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                            id="dob"
                            type="date"
                            placeholder="Date of Birth"
                            value={questionnaireData.dob}
                        />
                    </div>

                    <div className="w-[50%] px-3 max-lg:mb-2">
                        <label className="block tracking-wide text-[#FFFFFF] text-[14px] font-normal leading-5" htmlFor="weight">
                            Position <span className="text-red-500">*</span>
                        </label>
                        <input
                            onChange={handleChange}
                            className="h-[48px] pt-4 block w-full bg-[#FFFFFF] text-[14px] font-normal text-gray-700 border border-[#E6E6E7] rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                            id="position"
                            type="text"
                            placeholder="Position"
                            value={questionnaireData.position}
                        />
                    </div>

                    <div className="w-[50%] px-3 max-lg:mb-2">
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

                    <div className="w-[50%] px-3 max-lg:mb-2">
                        <label className="block tracking-wide text-[#FFFFFF] text-[14px] font-normal leading-5" htmlFor="graduation_year">
                            Graduation Year <span className="text-red-500">*</span>
                        </label>
                        <input
                            onChange={handleChange}
                            className="h-[48px] pt-4 block w-full bg-[#FFFFFF] text-[14px] font-normal text-gray-700 border border-[#E6E6E7] rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                            id="graduation_year"
                            type="number"
                            placeholder="Enter your graduation year"
                            value={questionnaireData.graduation_year}
                        />
                    </div>

                    <div className="w-full px-3 max-lg:mb-2">
                        <label className="block text-[#FFFFFF] text-[14px] font-normal leading-5" htmlFor="basketball_profile">
                            Describe your basketball profile <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            onChange={handleChange}
                            className="h-[72px] pt-4 block w-full bg-[#FFFFFF] text-[14px] font-normal text-gray-700 border border-[#E6E6E7] rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                            id="basketball_profile"
                            placeholder="Current Position, Skill Level (Varsity, AAU, Club, etc.)"
                            value={questionnaireData.basketball_profile}
                        ></textarea>
                    </div>

                    <div className="w-full px-3 max-lg:mb-2">
                        <label className="block text-[#FFFFFF] text-[14px] font-normal leading-5" htmlFor="college_program">
                            What Are You Looking for in a College Program? <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            onChange={handleChange}
                            className="h-[72px] pt-4 block w-full bg-[#FFFFFF] text-[14px] font-normal text-gray-700 border border-[#E6E6E7] rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                            id="college_program"
                            placeholder="Type your message"
                            value={questionnaireData.college_program}
                        ></textarea>
                    </div>

                    <div className="w-full px-3 mb-7 flex justify-end max-lg:justify-center max-lg:pt-7">
                        <span className="border-grad rounded-[8px] max-lg:!w-[100%]">
                            <button
                                className="bg-orange-500 text-[#FFFFFF] font-semibold py-2 px-4 text-[20px] leading-6 rounded-[8px] max-lg:!w-[100%] h-[56px] pt-[14px]"
                             onClick={handleSubmit}
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
