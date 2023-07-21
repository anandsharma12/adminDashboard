import React from "react";
import "../MainDash/MainDash.css";
import { IoIosArrowDown } from "react-icons/io";
import ApexCharts from "../Charts/ApexCharts";
import RadialBar from "../Charts/RadialBar";

const MainDash = () => {
  return (
    <>
      <div className="MainDash">
        <div className="heading">
          <p>Retirement Income</p>
          <h2>starting Year 2056</h2>
        </div>

        {/* cards */}
        <div className="cards">
          <div className="card1">
            <h2>$300,000</h2>
            <p>My Goal</p>
            <hr />
          </div>
          <div className="card2">
            <h2>59%</h2>
            <p> Goal Achieved</p>
            <hr />
          </div>
          <div className="card3">
            <h2>$300</h2>
            <p>Est.Monthly Income</p>
            <hr />
          </div>
        </div>

        {/* graph */}
        <div className="graph">
          <div className="firGraph">
            <h5>Contributions Overtime</h5>
            <ApexCharts />
          </div>
          <div className="secGraph">
            <h5>How do I compare to my peers?</h5>
            <p>These numbers represent current goal achievement</p>
            <div className="graphDetails">
              <div className="detail1">
                <div className="info">
                  <p>Age:</p>
                  <p>
                    Under 30{" "}
                    <span>
                      <IoIosArrowDown />
                    </span>{" "}
                  </p>
                </div>
                <hr />

                <div className="info">
                  <p>Salary:</p>
                  <p>
                    K 20-K 30 <IoIosArrowDown />
                  </p>
                </div>
                <hr />
                <div className="info">
                  <p>Gender:</p>
                  <p>
                    Male <IoIosArrowDown />
                  </p>
                </div>
              </div>
              <div className="detail2">
                <div className="radial">
                  <div className="radialiInfo">
                    <RadialBar />
                    <p>Average</p>
                  </div>
                </div>
                <div className="radial">
                  <div className="radialiInfo">
                    <RadialBar />
                    <p>Top</p>
                  </div>
                </div>
                <div className="radial">
                  <div className="radialiInfo">
                    <RadialBar />
                    <p>Me</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDash;
