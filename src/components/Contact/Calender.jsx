import React from "react";
import { InlineWidget } from "react-calendly";
const calendlyURL = import.meta.env.CALENDLY_URL;

const Calendar = () => {
  return (
    <>
      <InlineWidget
        url={calendlyURL}
        pageSettings={{
          backgroundColor: "#fff",
        }}
        styles={{
          height: "1100px",
          width: "100vw",
          paddingBottom: "40px",
        }}
      />
    </>
  );
};

export default Calendar;
