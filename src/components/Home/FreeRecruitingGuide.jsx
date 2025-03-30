import React, { useEffect, useState } from 'react';
const Token = import.meta.env.WEBHOOK_TOKEN
const FreeRecruitingGuide = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleDownload = async (e) => {
    e.preventDefault(); 
  

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) {
      setMessage('Please enter your email');
      document.getElementById('message').style.display = 'block';
      setTimeout(() => {
        document.getElementById("message").style.display="none"
      }, 2000);
      return;
    } else if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address');
      document.getElementById('message').style.display = 'block';
      setTimeout(() => {
        document.getElementById("message").style.display="none"
      }, 2000);
      return;
    }

    const response = await fetch(`https://hook.us2.make.com/${Token}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, FREE_GUIDE_RECIEVED: true }),
    });

    if (response.status === 200) {
      setEmail('');
      setMessage('Guide successfully sent to your email!');
      document.getElementById('message').style.display = 'block';
      setTimeout(() => {
        document.getElementById("message").style.display="none"
      }, 2000);
    } else {
      setMessage('There was an error. Please try again later.');
      document.getElementById('message').style.display = 'block';
      setTimeout(() => {
        document.getElementById("message").style.display="none"
      }, 2000);
    }
  
  };

  return (
    <div className="w-full overflow-hidden flex justify-center items-center pt-3.5 md:pt-8" id="download-now">
      <span className="border-grad rounded-2xl !w-[95%]">
        <div
          className="gap-[24px] px-8 py-12 max-lg:p-3 rounded-2xl flex justify-between items-center max-lg:flex-col overflow-hidden"
          style={{ background: "linear-gradient(98.18deg, #963400 1.03%, #000000 100.39%)" }}
        >
          <div className="w-[50%] flex flex-col gap-6 max-lg:w-[90%] ml-10 max-lg:m-0 max-lg:pt-6">
            <p className="font-bold text-[48px] leading-[60px] tracking-[0%] max-lg:text-[24px] bg-gradient-to-b bg-clip from-white to-[#9E9B9B] text-transparent bg-clip-text max-lg:leading-[28px] uppercase">
              FREE Recruiting Guide – Learn How to Get Noticed by College Coaches
            </p>
            <span className="font-normal text-[20px] leading-[27px] tracking-[0%] text-white">
              Enter your email below to get instant access to our step-by-step
              recruiting roadmap and start your journey toward college basketball
              today!
            </span>
            <div className="flex  gap-2 max-md:flex-col">
              <div className='w-full flex flex-col relative '>
              <span className="text-[18px] max-lg:text-[16px] max-md:text-[12px] text-[white] hidden w-[70%] absolute top-[-20px]" id="message"><span className='text-[red]'>*</span>{message}</span>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-[100%] h-[56px] rounded-[8px] p-[12px] text-[20px] bg-white max-lg:w-full pt-[18px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
              />
              </div>          
              <button
                className="w-[30%] h-[56px] pb-0 rounded-[8px] border-[1px] p-[8px] bg-black text-[20px] leading-[27px] tracking-[0%] text-white max-lg:w-full"
                type='submit'
                onClick={handleDownload} 
              >
                Download Now
              </button>
            </div>
          </div>
          <div className="w-[50%] max-lg:w-full flex mr-10 max-lg:m-0">
            <img src="/assets/header-logo.svg" className="w-[100%] h-[100%] transform scale-75 mb-[2%] max-lg:scale-100" />
          </div>
        </div>
      </span>
    </div>
  );
};

export default FreeRecruitingGuide;
