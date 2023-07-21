import React from "react";
import "../Endside/Endside.css";
import { IoIosArrowForward } from "react-icons/io";
const Endside = () => {
  return (
    <>
      <div className="Endside">
        <div className="about">
          <div className="about1">
            <div className="aboutInfo">
              <p>Retirement Strategy</p>
              <div className="heading1">
                <h6>Employee Contribution</h6>
              </div>
              <div className="heading2">
                <h6>Retirement age</h6>
              </div>
            </div>

            <div className="aboutDocs">
              <div className="aboutDocsInfo">
                <h6>Employer Contribution</h6>
                <p>8.4%</p>
              </div>
              <div className="aboutDocsInfo">
                <h6>Interest Rate</h6>
                <p>5%</p>
              </div>
              <div className="btn1 w-100">
                <button type="button" class="btn btn-primary w-100">
                  Update
                </button>
              </div>
              <p className="view">
                View Help Docs
                <span>
                  <IoIosArrowForward />
                </span>
              </p>
            </div>
          </div>
          <div className="about2 ">
            <div>
              <p className="para1">Are you considering a</p>
              <p className="para2">Housing Advance?</p>
            </div>
            <p className="para3">Limited time required nterest</p>
            <p className="para4 ">
              Learn more{" "}
              <span>
                <IoIosArrowForward />
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Endside;
