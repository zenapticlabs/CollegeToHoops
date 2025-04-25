import React, { useState } from "react";

const essentialGamePlan = import.meta.env.PUBLIC_ESSENTIAL_GAME_PLAN;
const essentialGamePlanAddOn = import.meta.env.PUBLIC_ESSENTIAL_GAME_PLAN_ADD_ON;
const guidedRecruitingRoadMap = import.meta.env.PUBLIC_GUIDED_RECRUITING_ROADMAP;
const guidedRecruitingRoadMapAddOn = import.meta.env.PUBLIC_GUIDED_RECRUITING_ROADMAP_ADD_ON;
const eliteSpotlite = import.meta.env.PUBLIC_ELITE_SPOTLINE;
const allInOnePremium = import.meta.env.PUBLIC_ALL_IN_ONE_PRO_ADVANTAGE;
const RecruitingPlans = () => {
  const [subscriptionPlans, setSubscriptionPlans] = useState([
    {
      plan: {
        icon: '/assets/star.svg',
        planName: "Essential Game Plan",
        link: essentialGamePlan,
        id: "essential-game-plan",
        price: "$99",
        description:
          "Your First Step Toward College Basketball – Build Your Foundation & Get Noticed!",
        services: [
          { icon: '/assets/check.svg', detail: "Basic recruiting playbook (NCAA timeline, email tips)" },
          { icon: '/assets/check.svg', detail: "Quick school recommendations (3–5)" },
          { icon: '/assets/check.svg', detail: "Pre-written email templates" },
          { icon: '/assets/check.svg', detail: "Limited Q&A via email" },
        ],
        footer: "This investment could lead to a $20,000+ scholarship.",
        highlighted: { status: false, detail: "" },
      teaser: { status: false, detail: "" },
        addOns: {
          addOnText: "<span class='!w-full flex justify-center items-center  font-bold text-[20px] text-center '>Add-on : </span> <span class='font-[400] text-[20px] leading-[27px] w-full text-center  '> Full highlight reel creation ($150)</span>",
          id: "addon-button-first-tier",
        },
      },
    },
    {
      plan: {
        icon: 'assets/plan-rocket.svg',
        planName: "Guided Recruiting Roadmap",
        link: guidedRecruitingRoadMap,
        id: "guided-recruiting-roadmap",
        price: "$299",
        description:
          "Take Control of Your Recruiting Journey – Get a Personalized Plan Built for Success!",
        services: [
          { icon: '/assets/check.svg', detail: "Everything in Tier 1" },
          { icon: '/assets/check.svg', detail: "Highlight reel review (feedback only)" },
          { icon: '/assets/check.svg', detail: "8–10 targeted school recommendations" },
          { icon: '/assets/check.svg', detail: "2-week follow-up (email/text)" },
          { icon: '/assets/check.svg', detail: "30-min Zoom intake" },
        ],
        highlighted: { status: false, detail: "" },
      teaser: { status: false, detail: "" },
        addOns: {
          id: "addon-button-second-tier",
          addOnText: "<span class='!w-full flex justify-center items-center  font-bold text-[20px] text-center '>Add-on : </span> <span class='font-[400] text-[20px] leading-[27px] w-full text-center  '> Full highlight reel creation ($150)</span>",
        },
      },
    },
    {
      plan: {
        icon: '/assets/sparkle.svg',
        planName: "Elite Spotlight",
        link: eliteSpotlite,
        id: "elite-spotlight",
        price: "$799",
        description:
          "Be Seen by Coaches – Professional Highlight Reels & Direct Outreach Done for You!",
        services: [
          { icon: '/assets/check.svg', detail: "Everything in Tier 2" },
          { icon: '/assets/check.svg', detail: "Professionally edited highlight reel included" },
          { icon: '/assets/check.svg', detail: "Direct outreach to ~10–15 coaches (partially done-for-you)" },
          { icon: '/assets/check.svg', detail: "4–6 weeks of support + 3 Zoom calls" },
        ],
        footer:
          "Players using this plan are <span class='font-bold'>3x more likely</span> to get a direct coach response.",
          highlighted: { status: true, detail: "🔥 Most Popular" },
          teaser: { status: true, detail: "🔥 Enrollment closing soon" },
      },
    },
    {
      plan: {
        icon: '/assets/seal-check.svg',
        planName: "All-In Pro Advantage",
        link: allInOnePremium,
        price: "$3000",
        id: "all-in-one-pro-advantage",
        description:
          "The VIP Treatment – Get a Fully Managed Recruiting Plan & Secure Your Scholarship!",
        services: [
          { icon: '/assets/check.svg', detail: "Deep “fit” analysis (roster needs, coaching style, academics)" },
          { icon: '/assets/check.svg', detail: "Unlimited highlight reel updates" },
          { icon: '/assets/check.svg', detail: "Multi-wave outreach to 20–30 schools" },
          { icon: '/assets/check.svg', detail: "Ongoing Zoom calls + priority text/email" },
        ],
        footer: "Limited capacity (e.g., 5 families per quarter)",
        highlighted: { status: false, detail: "" },
        teaser: { status: true, detail: "🔥 Only 5 spots per quarter" },
      },
    },
    
  ]);

  const handleEssentialAddOnToggle = (checked) => {
    setSubscriptionPlans((prevPlans) =>
      prevPlans.map((plan) =>
        plan.plan.id === "essential-game-plan"
          ? {
              ...plan,
              plan: {
                ...plan.plan,
                link: checked ? essentialGamePlanAddOn : essentialGamePlan,
                price: checked ? "$249" : "$99",
              },
            }
          : plan
      )
    );
  };

  const handleRecruitingRoadMapAddOnToggle = (checked) => {
    setSubscriptionPlans((prevPlans) =>
      prevPlans.map((plan) =>
        plan.plan.id === "guided-recruiting-roadmap"
          ? {
              ...plan,
              plan: {
                ...plan.plan,
                link: checked
                  ? guidedRecruitingRoadMapAddOn
                  : guidedRecruitingRoadMap,
                price: checked ? "$449" : "$299",
              },
            }
          : plan
      )
    );
  };
  
  return (
    <div
      id="recruiting-plans"
      className="w-full bg-black text-white flex flex-col justify-center items-center gap-16 max-lg:gap-10 pb-4"
    >
      <div className="flex flex-col items-center justify-center">
        <p className="bg-gradient-to-b from-white to-[#9E9B9B] max-lg:text-white max-lg:text-[32px] text-transparent bg-clip-text font-bold uppercase text-6xl leading-tight tracking-normal text-center">
          Find Your Path to College Hoops
        </p>
        <span className="text-2xl max-lg:text-[14px] max-lg:leading-5 leading-7 font-normal text-[20px] tracking-[0%] text-center">
          Choose the right level of support to match your goals.
        </span>
      </div>

      <div className="w-[90%] bg-black gap-2 flex justify-center items-start max-lg:flex-col max-lg:items-center max-lg:gap-5">
        {subscriptionPlans.map(({ plan }) => (
          <div
          key={`${plan.id}-${plan.price}`}
          className="w-[308px] flex card flex-col items-center justify-center max-lg:w-[95%] pb-6 rounded-2xl bg-[#0E0E0E] relative box-outline hover:outline-[2px] hover:outline-white hover:shadow-[0px_0px_250px_20px_rgba(203,203,203,0.2)]"
          >
            <a
              href={plan?.link }
              target="_blank"
              rel="noopener noreferrer"
              className="w-full pt-4 pr-0 pb-1 pl-0 flex flex-col items-center justify-center gap-6 max-lg:gap-3"
              id={plan.id}
            >
              {plan.highlighted.status && (
          <span className="min-w-[120px] max-lg:text-start w-[45%] pt-[7px] bg-gradient-to-b from-[#FFFFFF] to-[#9E9B9B] text-black rounded-[8px] p-[2px_2px_2px_2px] absolute right-[10px] top-[-17px] font-[400] text-[16px] leading-[27px] max-lg:leading-[18px] text-center">
            {plan.highlighted.detail}
          </span>
        )}
              <div className="w-[85%] flex justify-between items-center">
                <img
                  src={plan.icon}
                  alt="logo"
                  className="w-12 h-12 max-lg:w-[30px] max-lg:h-[30px]"
                />
                <span className="font-semibold text-[32px] max-lg:text-[24px] leading-[40px] tracking-[0%]">
                  {plan.price}
                </span>
              </div>
              <div className="w-[85%] flex justify-center items-center border-b-[1px] border-[#4A4A4A] pb-4 max-lg:pb-2 max-lg:justify-start">
                <span className="font-semibold text-[20px] max-lg:text-[18px] leading-[25px]">
                  {plan.planName}
                </span>
              </div>
              <div className="w-[85%] flex justify-center items-center border-b-[1px] pb-4 max-lg:pb-2 border-[#4A4A4A]">
                <span className="font-[400] leading-7 tracking-[0%] text-[20px] max-lg:text-[14px] text-center max-lg:text-start">
                  {plan.description}
                </span>
              </div>
              {plan.teaser.status && (
          <span className="w-[85%] bg-black text-white font-semibold text-[16px] pt-[15px] leading-[21.6px] tracking-[0%] text-center rounded-[8px] border-[1px] p-[8px_24px_8px_24px] gap-[10px]">
            {plan.teaser.detail}
          </span>
        )}
              {plan.services.map((service, index) => (
                <div
                  key={index}
                  className="w-[85%] flex justify-center items-center"
                >
                  <div className="w-[20%] p-0.5 self-start">
                    <img
                      src={service.icon}
                      alt="service-icon"
                      className="object-contain w-7 h-8 pb-1"
                    />
                  </div>
                  <div className="self-start w-[80%]">
                    <span className="font-[400] text-[20px] max-lg:text-[14px] leading-[27px] max-lg:leading-[18px] tracking-[0%] max-lg:text-start">
                      {service.detail}
                    </span>
                  </div>
                </div>
              ))}
              <div className="w-[85%]">
                <p
                  className="font-[400] text-[20px] leading-[27px] tracking-[0%] max-lg:text-[14px] text-center"
                  dangerouslySetInnerHTML={{ __html: plan.footer }}
                ></p>
              </div>
            </a>
            {plan.addOns && (
              <div className="w-[85%] flex flex-col justify-center items-center gap-1">
                {plan.addOns.addOnText && <span style={{font: 'bold'}}
                 dangerouslySetInnerHTML={{ __html:plan.addOns.addOnText }} ></span>}
                <label className="toggle-switch  font-bold">
                 
                  {plan.addOns?.id && (
                    <input
                      type="checkbox"
                      name="addOn"
                      id={plan.addOns.id}
                      onChange={(e) =>
                        plan.id === "essential-game-plan"
                          ? handleEssentialAddOnToggle(e.target.checked)
                          : handleRecruitingRoadMapAddOnToggle(e.target.checked)
                      }
                      checked={plan?.price === "$249"  || plan?.price === "$449" } 
                    />
                  )}
                  <span className="toggle-slider"></span>
                </label>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="w-[85%] flex flex-col items-center justify-center gap-4">
        <p className="font-[400] text-[20px] leading-[27px] tracking-[0%] text-center max-lg:text-[14px]">
          Not sure which tier fits you best? Let’s talk!
        </p>
        <span className="border-grad rounded-[8px]">
          <button
            onClick={() => (window.location.href = "/questionnaire")}
            className="animate-pulse w-[383px] h-[56px] pb-0 rounded-[8px] p-[8px] bg-gradient-to-r from-[#E65E10] to-[#FF9355] text-center gap-2 max-md:h-[46px] max-md:w-[90vw] text-[20px] text-white font-semibold"
          >
            Secure My Spot—Let’s Talk.
          </button>
        </span>
      </div>
    </div>
  );
};

export default RecruitingPlans;
