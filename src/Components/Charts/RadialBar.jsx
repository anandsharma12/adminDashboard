import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const RadialBar = () => {
  return (
    <>
      <div style={{ width: 70, height: 70 }}>
        <CircularProgressbar value={78} text="78%" />
      </div>
    </>
  );
};

export default RadialBar;
