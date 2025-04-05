import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import VideoPlayer from "./VideoPlayer";

const testimonials = [
  {
    video_url:
      "https://res.cloudinary.com/dt3zbndrl/video/upload/v1740755154/testimonial_4_f08uaa.mp4",
    poster:
      "https://res.cloudinary.com/dt3zbndrl/image/upload/v1740755151/testimonial_4_thumb_l1xnql.png",
    description:
      " HoopsToCollege changed the entire trajectory of my basketball career.",
    nameOFInfluecer: "Roberto G.",
  },
  {
    video_url:
      "https://res.cloudinary.com/dt3zbndrl/video/upload/v1740755157/testimonial_3_bttfh3.mp4",
    poster:
      "https://res.cloudinary.com/dt3zbndrl/image/upload/v1741669204/testimonial_3_thumb_w20tis.png",
    description:
      " They helped us find the perfect fit for my son — he even earned a partial scholarship.",
    nameOFInfluecer: "Laura C.",
  },
  {
    video_url:
      "https://res.cloudinary.com/dt3zbndrl/video/upload/v1740755152/testimonial_2_euyowc.mp4",
    poster:
      "https://res.cloudinary.com/dt3zbndrl/image/upload/v1740755152/testimonial_2_thumb_astye6.png",
    description:
      "They guided my son every step of the way and connected him with multiple college coaches.",
    nameOFInfluecer: "Ashlie H.",
  },
  {
    video_url:
      "https://res.cloudinary.com/dt3zbndrl/video/upload/v1740755155/testimonial_1_ocrszl.mp4",
    poster:
      "https://res.cloudinary.com/dt3zbndrl/image/upload/v1740755153/testimonial_1_thumb_xblacj.png",
    description:
      "They helped me build a real plan — and that plan led me to playing professionally in Germany.",
    nameOFInfluecer: "Thomas M.",
  },
  {
    video_url:
      "https://res.cloudinary.com/dt3zbndrl/video/upload/v1741669216/testimonial_6_muj1ry.mp4",
    poster:
      "https://res.cloudinary.com/dt3zbndrl/image/upload/v1741669214/testimonial_6_thumb_mxdxth.png",
    description:
      "They made sure my son had the best shot at playing at the next level.",
    nameOFInfluecer: "Brandon Y.",
  },
  {
    video_url:
      "https://res.cloudinary.com/dt3zbndrl/video/upload/v1741669215/testimonial_5_n5o8oh.mp4",
    poster:
      "https://res.cloudinary.com/dt3zbndrl/image/upload/v1741669215/testimonial_5_thumb_dnbkqk.png",
    description:
      "The partial scholarship they helped us get saved our family thousands of dollars.",
    nameOFInfluecer: "Kelly R.",
  },
];

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
                arrows: false,
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
                  <VideoPlayer
                    videoUrl={testimonial.video_url}
                    poster={testimonial.poster}
                    description={testimonial.description}
                    influencerName={testimonial.nameOFInfluecer}
                  />
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
