import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const testimonials = [
  {
    video_url:
      "https://res.cloudinary.com/dt3zbndrl/video/upload/v1740755154/testimonial_4_f08uaa.mp4",
    description:
      " HoopsToCollege changed the entire trajectory of my basketball career.",
    nameOFInfluecer: "Roberto G.",
  },
  {
    video_url:
      "https://res.cloudinary.com/dt3zbndrl/video/upload/v1740755157/testimonial_3_bttfh3.mp4",
    description:
      " They helped us find the perfect fit for my son — he even earned a partial scholarship.",
    nameOFInfluecer: "Laura C.",
  },
  {
    video_url:
      "https://res.cloudinary.com/dt3zbndrl/video/upload/v1740755152/testimonial_2_euyowc.mp4",
    description:
      "They guided my son every step of the way and connected him with multiple college coaches.",
    nameOFInfluecer: "Ashlie H.",
  },
  {
    video_url:
      "https://res.cloudinary.com/dt3zbndrl/video/upload/v1740755155/testimonial_1_ocrszl.mp4",
    description:
      "They helped me build a real plan — and that plan led me to playing professionally in Germany.",
    nameOFInfluecer: "Thomas M.",
  },
  {
    video_url:
      "https://res.cloudinary.com/dt3zbndrl/video/upload/v1741669216/testimonial_6_muj1ry.mp4",
    description:
      "They made sure my son had the best shot at playing at the next level.",
    nameOFInfluecer: "Brandon Y.",
  },
  {
    video_url:
      "https://res.cloudinary.com/dt3zbndrl/video/upload/v1741669215/testimonial_5_n5o8oh.mp4",
    description:
      "The partial scholarship they helped us get saved our family thousands of dollars.",
    nameOFInfluecer: "Kelly R.",
  },
];

const playVideo = (index) => {
  const video = document.getElementById(`video-${index}`);
  const overlay = document.getElementById(`overlay-${index}`);
  const allVideos = document.querySelectorAll("video");
  const allOverlays = document.querySelectorAll("[id^=overlay-]");

  allVideos.forEach((vid, idx) => {
    if (idx !== index) {
      vid.pause();
      allOverlays[idx].style.display = "flex";
    }
  });

  if (video.paused) {
    video.play();
    overlay.style.display = "none";
  } else {
    video.pause();
    overlay.style.display = "flex";
  }
};

const Testimonials = () => {
  return (
    <div className="w-[100vw] justify-center items-center flex">
      <div className="w-full flex flex-col justify-center items-center gap-7 pt-[100px] pb-[170px] overflow-hidden max-lg:w-[600px]">
        <div className="w-full px-12 font-bold text-5xl leading-[60px] max-lg:text-[32px] max-lg:leading-[46px] uppercase tracking-normal text-center text-transparent bg-clip-text bg-gradient-to-r from-[#9E9B9B] to-white">
          What Real Athletes & Parents Say About HoopsToCollege
        </div>
        <div className="w-full flex justify-center items-center gap-6 cursor-pointer">
          <div className="splide-container max-lg:px-[20px]">
            <Splide
              options={{
                perPage: 5,
                type: "slide",
                gap: "1rem",
                height: "auto",
                arrows: true,
                perMove: 5,
                focus: "center",
                pagination: false,
                breakpoints: {
                  1024: {
                    perPage: 2.5,
                    perMove: 2.5,
                  },
                  786: {
                    perPage: 1.1,
                    perMove: 2,
                  },
                },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SplideSlide
                  className=" max-lg:!mr-[15px] rounded-xl"
                  key={index}
                  onClick={() => playVideo(index)}
                >
                  <div className="relative w-full h-auto rounded-xl    overflow-hidden">
                    <video id={`video-${index}`} className="w-full ">
                      <source src={testimonial.video_url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div id={`overlay-${index}`} className="overlay">
                      <img
                        src="./assets/play-opacity.svg"
                        alt="logo"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      />
                      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-end bg-gradient-to-b from-transparent to-black text-white text-base p-4 leading-normal">
                        <p className="mb-2 relative after:content-[url('../../public/assets/square-quot.svg')] after:absolute after:left-[-20px] after:top-[-40px] max-lg:text-[16px] max-lg:font-normal">
                          {testimonial.description}
                        </p>
                        <span>{testimonial.nameOFInfluecer}</span>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
