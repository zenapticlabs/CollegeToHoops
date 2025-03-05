import React from "react";
import { InlineWidget } from "react-calendly";
const Calendar = () => {
  const calendlyUrl = 'https://calendly.com/zenaptic-labs/30min'; // will replace with env variable later
  return (
    <>
      <InlineWidget
        url={calendlyUrl}
        pageSettings={{
          backgroundColor: "#fff",
        }}
        styles={{
          height: "700px",
          width: "100vw",
          padding: "0px",
        }}
      />
    </>
  );
};

export default Calendar;
