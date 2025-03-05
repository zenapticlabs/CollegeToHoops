import React from "react";
import { InlineWidget } from "react-calendly";
const Calendar = () => {
  return (
    <>
      <InlineWidget
        url="https://calendly.com/zenaptic-labs/30min"
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
