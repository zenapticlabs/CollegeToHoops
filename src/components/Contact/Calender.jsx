import React from "react";
import { InlineWidget } from "react-calendly";

const calendlyURL = "https://calendly.com/myles-hoopstocollege/30min";

const LoadingSpinner = () => (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    zIndex: 1000,
  }}>
    <div style={{
      border: "4px solid #f3f3f3",
      borderTop: "4px solid #3498db",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      animation: "spin 1s linear infinite",
    }} />
    <style>
      {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
    </style>
  </div>
);

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
        LoadingSpinner={LoadingSpinner} // Pass the spinner component directly
      />
    </>
  );
};

export default Calendar;
